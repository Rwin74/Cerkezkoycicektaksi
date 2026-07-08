'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Breadcrumb({ customItems }) {
  const pathname = usePathname();
  
  let pathItems = [];
  
  if (customItems) {
    pathItems = customItems;
  } else {
    // Generate from pathname if no custom items
    const paths = pathname.split('/').filter(p => p);
    let currentPath = '';
    
    pathItems = paths.map((path, index) => {
      currentPath += `/${path}`;
      return {
        label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
        url: currentPath
      };
    });
  }

  const breadcrumbList = [
    { label: 'Ana Sayfa', url: '/' },
    ...pathItems
  ];

  // Schema generation
  const schemaList = breadcrumbList.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    "item": `https://www.cerkezkoycicektaksi.com${item.url}`
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaList
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-list">
          {breadcrumbList.map((item, index) => {
            const isLast = index === breadcrumbList.length - 1;
            return (
              <li key={item.url} className={`breadcrumb-item ${isLast ? 'active' : ''}`} aria-current={isLast ? 'page' : undefined}>
                {!isLast ? (
                  <>
                    <Link href={item.url}>{item.label}</Link>
                    <span className="breadcrumb-separator">/</span>
                  </>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <style jsx>{`
        .breadcrumb-nav {
          margin-bottom: var(--sp-16);
          font-size: 0.875rem;
          font-weight: 600;
        }
        .breadcrumb-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .breadcrumb-item {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.7);
        }
        .breadcrumb-item.active {
          color: var(--taxi-yellow);
        }
        .breadcrumb-item a {
          color: #fff;
          text-decoration: none;
          transition: color var(--trans-fast);
        }
        .breadcrumb-item a:hover {
          color: var(--taxi-yellow);
        }
        .breadcrumb-separator {
          margin: 0 8px;
          color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </>
  );
}
