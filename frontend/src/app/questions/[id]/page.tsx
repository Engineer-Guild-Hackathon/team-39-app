"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { mockProblems } from '@/data/mockData';
import styles from './problem-detail.module.css';

export default function ProblemDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const problem = mockProblems.find(p => p.id === id);

  if (!problem) {
    return (
      <>
        <Header />
        <div className={styles.notFound}>
          <div className={styles.notFoundContent}>
            <h1 className={styles.notFoundTitle}>問題が見つかりませんでした</h1>
            <Link href="/" className={styles.homeLink}>
              ホームに戻る
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.container}>
          {/* 戻るボタン */}
          <Link href="/search" className={styles.backButton}>
            ← 検索結果に戻る
          </Link>

          {/* 問題詳細カード */}
          <div className={styles.problemCard}>
            {/* ヘッダー */}
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <h1 className={styles.title}>{problem.title}</h1>
                
                {/* 環境情報 */}
                <div className={styles.envTags}>
                  <span className={styles.envTag}>
                    🖥️ {problem.os}
                  </span>
                  <span className={styles.envTag}>
                    💻 {problem.hardware}
                  </span>
                  <span className={styles.envTag}>
                    ⚡ {problem.language}
                  </span>
                </div>

                {/* メタ情報 */}
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <span>👤</span>
                    <span>{problem.author}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span>📅</span>
                    <span>
                      {new Date(problem.createdAt).toLocaleDateString('ja-JP', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* コンテンツ */}
            <div className={styles.content}>
              <div className={styles.layout}>
                {/* メインコンテンツ */}
                <div className={styles.mainContent}>
                  {/* 問題の説明 */}
                  <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>問題の詳細</h2>
                    <p className={styles.description}>
                      {problem.description}
                    </p>
                  </div>

                  {/* 解決策 */}
                  <div className={`${styles.section} ${styles.solutionSection}`}>
                    <h2 className={styles.sectionTitle}>解決策</h2>
                    <p className={styles.description}>
                      {problem.solution}
                    </p>
                  </div>
                </div>

                {/* サイドバー */}
                <div className={styles.sidebar}>
                  {/* タグ */}
                  {problem.tags.length > 0 && (
                    <div className={styles.sidebarCard}>
                      <h3 className={styles.sidebarTitle}>タグ</h3>
                      <div className={styles.tags}>
                        {problem.tags.map((tag, index) => (
                          <span key={index} className={styles.tag}>
                            🏷️ {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 環境詳細 */}
                  <div className={styles.sidebarCard}>
                    <h3 className={styles.sidebarTitle}>環境</h3>
                    <div className={styles.envDetails}>
                      <div className={styles.envDetail}>
                        <span className={styles.envLabel}>OS:</span>
                        <span className={styles.envValue}>{problem.os}</span>
                      </div>
                      <div className={styles.envDetail}>
                        <span className={styles.envLabel}>ハードウェア:</span>
                        <span className={styles.envValue}>{problem.hardware}</span>
                      </div>
                      <div className={styles.envDetail}>
                        <span className={styles.envLabel}>言語:</span>
                        <span className={styles.envValue}>{problem.language}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}