// frontend/src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
      <nav>
        <Link href="/" style={{ marginRight: '16px' }}>ホーム</Link>
        <Link href="/questions/new">問題を投稿する</Link>
      </nav>
    </header>
  );
};