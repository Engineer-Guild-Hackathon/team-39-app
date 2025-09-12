"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { SearchForm, SearchFilters } from '@/components/SearchForm';
import { ProblemCard } from '@/components/ProblemCard';
import { Problem } from '@/types';
import { mockProblems } from '@/data/mockData';
import styles from './search.module.css';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [sortBy, setSortBy] = useState<'date' | 'relevance'>('relevance');

  const currentFilters: SearchFilters = {
    query: searchParams.get('query') || '',
    os: searchParams.get('os') || '',
    hardware: searchParams.get('hardware') || '',
    language: searchParams.get('language') || '',
  };

  useEffect(() => {
    // 検索機能のシミュレーション
    let filteredProblems = mockProblems;

    if (currentFilters.query) {
      filteredProblems = filteredProblems.filter(problem =>
        problem.title.toLowerCase().includes(currentFilters.query.toLowerCase()) ||
        problem.description.toLowerCase().includes(currentFilters.query.toLowerCase()) ||
        problem.tags.some(tag => tag.toLowerCase().includes(currentFilters.query.toLowerCase()))
      );
    }

    if (currentFilters.os) {
      filteredProblems = filteredProblems.filter(problem => problem.os === currentFilters.os);
    }

    if (currentFilters.hardware) {
      filteredProblems = filteredProblems.filter(problem => problem.hardware === currentFilters.hardware);
    }

    if (currentFilters.language) {
      filteredProblems = filteredProblems.filter(problem => problem.language === currentFilters.language);
    }

    // 結果をソート
    if (sortBy === 'date') {
      filteredProblems.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    setProblems(filteredProblems);
  }, [currentFilters.query, currentFilters.os, currentFilters.hardware, currentFilters.language, sortBy]);

  const handleSearch = (filters: SearchFilters) => {
    const newSearchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        newSearchParams.set(key, value);
      }
    });
    router.push(`/search?${newSearchParams.toString()}`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* 検索フォーム */}
        <div className={styles.searchSection}>
          <SearchForm onSearch={handleSearch} initialFilters={currentFilters} />
        </div>

        {/* 結果ヘッダー */}
        <div className={styles.resultsHeader}>
          <div className={styles.resultsInfo}>
            <h2 className={styles.resultsTitle}>検索結果</h2>
            <p className={styles.resultsCount}>
              {problems.length}件の問題が見つかりました
              {currentFilters.query && (
                <span className={styles.searchQuery}> - &ldquo;{currentFilters.query}&rdquo;</span>
              )}
            </p>
          </div>

          <div className={styles.sortSection}>
            <div className={styles.sortControl}>
              <span className={styles.sortIcon}>📊</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'relevance')}
                className={styles.sortSelect}
              >
                <option value="relevance">関連度順</option>
                <option value="date">新しい順</option>
              </select>
            </div>
          </div>
        </div>

        {/* 結果グリッド */}
        {problems.length > 0 ? (
          <div className={styles.resultsGrid}>
            {problems.map(problem => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <div className={styles.noResultsContent}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3 className={styles.noResultsTitle}>問題が見つかりませんでした</h3>
              <p className={styles.noResultsText}>
                検索条件を調整するか、すべての問題を閲覧してください。
              </p>
              <button
                onClick={() => router.push('/questions/new')}
                className={styles.newProblemButton}
              >
                新しい問題を登録
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className={styles.loading}>検索結果を読み込み中...</div>}>
        <SearchResultsContent />
      </Suspense>
    </>
  );
}