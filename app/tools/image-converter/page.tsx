'use client';

import { useState, useRef, useCallback } from 'react';

export default function ImageConverterPage() {
  const [files, setFiles] = useState<ConvertedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const [quality, setQuality] = useState(85);
  const [converting, setConverting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  interface ConvertedFile {
    name: string;
    originalSize: number;
    convertedSize?: number;
    webpUrl?: string;
    status: 'pending' | 'done' | 'error';
    originalPreview: string;
  }

  const processFiles = useCallback(
    async (rawFiles: FileList | File[]) => {
      const arr = Array.from(rawFiles).filter((f) => f.type.startsWith('image/'));
      if (!arr.length) return;

      const initial: ConvertedFile[] = arr.map((f) => ({
        name: f.name.replace(/\.[^.]+$/, '') + '.webp',
        originalSize: f.size,
        status: 'pending',
        originalPreview: URL.createObjectURL(f),
      }));
      setFiles((prev) => [...prev, ...initial]);
      setConverting(true);

      const results: ConvertedFile[] = await Promise.all(
        arr.map((file, i) =>
          new Promise<ConvertedFile>((resolve) => {
            const img = new window.Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;
              const ctx = canvas.getContext('2d')!;
              ctx.drawImage(img, 0, 0);
              canvas.toBlob(
                (blob) => {
                  if (!blob) {
                    resolve({ ...initial[i], status: 'error' });
                    return;
                  }
                  resolve({
                    ...initial[i],
                    convertedSize: blob.size,
                    webpUrl: URL.createObjectURL(blob),
                    status: 'done',
                  });
                },
                'image/webp',
                quality / 100
              );
            };
            img.onerror = () => resolve({ ...initial[i], status: 'error' });
            img.src = initial[i].originalPreview;
          })
        )
      );

      setFiles((prev) => {
        const updated = [...prev];
        results.forEach((r, i) => {
          const idx = updated.length - arr.length + i;
          updated[idx] = r;
        });
        return updated;
      });
      setConverting(false);
    },
    [quality]
  );

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    processFiles(e.dataTransfer.files);
  }

  function formatBytes(b: number) {
    if (b < 1024) return b + ' B';
    if (b < 1024 * 1024) return (b / 1024).toFixed(1) + ' KB';
    return (b / (1024 * 1024)).toFixed(2) + ' MB';
  }

  function savings(orig: number, conv: number) {
    const pct = ((orig - conv) / orig) * 100;
    return pct.toFixed(1);
  }

  return (
    <main>
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            🛠️ TOOL
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-deepGreen">Image → WebP Converter</h1>
          <p className="text-gray-600 text-sm mt-3 max-w-xl leading-relaxed">
            Convert any image (JPG, PNG, GIF, BMP) to the modern WebP format. Runs entirely in your
            browser — no upload to any server.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Quality slider */}
          <div className="flex items-center gap-5 bg-cream border border-deepGreen/10 rounded-2xl px-5 py-4">
            <label className="text-sm font-bold text-deepGreen whitespace-nowrap">
              Quality: <span className="text-ochre">{quality}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="flex-1 accent-deepGreen"
            />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {quality >= 80 ? 'High' : quality >= 50 ? 'Medium' : 'Low'}
            </span>
          </div>

          {/* Drop zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 ${
              dragging
                ? 'border-deepGreen bg-sage scale-[1.01]'
                : 'border-gray-200 hover:border-deepGreen/50 hover:bg-sage/50'
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => e.target.files && processFiles(e.target.files)}
            />
            <div className="text-5xl mb-4">🖼️</div>
            <p className="text-deepGreen font-bold text-base">
              {dragging ? 'Drop images here' : 'Click or drag images here'}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Supports JPG, PNG, GIF, BMP, WEBP · Multiple files allowed
            </p>
          </div>

          {/* File list */}
          {files.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-deepGreen text-sm">
                  {files.length} file{files.length > 1 ? 's' : ''}
                  {converting && <span className="ml-2 text-ochre font-normal">Converting…</span>}
                </h2>
                <button
                  onClick={() => setFiles([])}
                  className="text-xs text-gray-400 hover:text-red-500 underline transition-colors"
                >
                  Clear all
                </button>
              </div>

              {files.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                >
                  {/* Preview */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-50 shrink-0 border border-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.originalPreview}
                      alt={f.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{f.name}</p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-xs text-gray-400">
                        Original: {formatBytes(f.originalSize)}
                      </span>
                      {f.status === 'done' && f.convertedSize !== undefined && (
                        <>
                          <span className="text-gray-300">→</span>
                          <span className="text-xs text-deepGreen font-semibold">
                            WebP: {formatBytes(f.convertedSize)}
                          </span>
                          <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                            Number(savings(f.originalSize, f.convertedSize)) > 0
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {Number(savings(f.originalSize, f.convertedSize)) > 0 ? '−' : '+'}
                            {Math.abs(Number(savings(f.originalSize, f.convertedSize)))}%
                          </span>
                        </>
                      )}
                      {f.status === 'pending' && (
                        <span className="text-xs text-ochre">Converting…</span>
                      )}
                      {f.status === 'error' && (
                        <span className="text-xs text-red-500">Failed</span>
                      )}
                    </div>
                  </div>

                  {/* Download */}
                  {f.status === 'done' && f.webpUrl && (
                    <a
                      href={f.webpUrl}
                      download={f.name}
                      className="shrink-0 inline-flex items-center gap-1.5 bg-deepGreen hover:bg-deepGreen/90 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  )}
                </div>
              ))}

              {/* Download all */}
              {files.filter((f) => f.status === 'done').length > 1 && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      files.forEach((f) => {
                        if (f.status === 'done' && f.webpUrl) {
                          const a = document.createElement('a');
                          a.href = f.webpUrl;
                          a.download = f.name;
                          a.click();
                        }
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-deepGreen hover:bg-deepGreen/90 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download All WebP Files
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Info box */}
          <div className="bg-deepGreen/5 border border-deepGreen/10 rounded-2xl p-5">
            <h3 className="font-bold text-deepGreen text-sm mb-2">Why WebP?</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <strong>25–35% smaller</strong> than JPG at equivalent visual quality</li>
              <li>• <strong>Supports transparency</strong> like PNG, but much smaller</li>
              <li>• <strong>Faster page loads</strong> — recommended by Google PageSpeed</li>
              <li>• <strong>Supported</strong> in all modern browsers (Chrome, Firefox, Safari, Edge)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
