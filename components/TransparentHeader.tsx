'use client';

import { useEffect } from 'react';

export default function TransparentHeader() {
  useEffect(() => {
    document.body.dataset.headerTransparent = 'true';
    return () => {
      delete document.body.dataset.headerTransparent;
    };
  }, []);
  return null;
}
