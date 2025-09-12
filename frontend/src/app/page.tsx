"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchForm, SearchFilters } from '@/components/SearchForm';
import styles from './page.module.css';

export default function HomePage() {
  const router = useRouter();

  const handleSearch = (filters: SearchFilters) => {
    // 検索結果ページに遷移
    const searchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value);
      }
    });
    router.push(`/search?${searchParams.toString()}`);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* ヒーローセクション */}
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Issues<span className={styles.titleGradient}>DB</span>
          </h1>
        </div>

        {/* 検索セクション */}
        <div className={styles.searchSection}>
          <SearchForm onSearch={handleSearch} />
        </div>

        {/* アクションセクション */}
        <div className={styles.actionSection}>
          <Link href="/questions/new" className={styles.registerButton}>
            ➕ 新しい問題を登録
          </Link>
        </div>

      </div>
    </main>
  );
}