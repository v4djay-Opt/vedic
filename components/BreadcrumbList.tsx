import Link from 'next/link';

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbListProps {
  crumbs: Crumb[];
}

export default function BreadcrumbList({ crumbs }: BreadcrumbListProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs text-gray-400">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {crumb.href && i < crumbs.length - 1 ? (
            <Link href={crumb.href} className="hover:text-deepGreen transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className={i === crumbs.length - 1 ? 'text-deepGreen font-medium' : ''}>
              {crumb.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
