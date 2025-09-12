import React from 'react';
import Link from 'next/link';
import { Problem } from '@/types';
import styles from './styles/ProblemCard.module.css';

interface ProblemCardProps {
  problem: Problem;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link href={`/questions/${problem.id}`} className={styles.titleLink}>
            <h3 className={styles.title}>
              {problem.title}
            </h3>
          </Link>
        </div>

        <p className={styles.description}>
          {problem.description}
        </p>

        {/* 環境情報 */}
        <div className={styles.envTags}>
          <span className={styles.osTag}>
            🖥️ {problem.os}
          </span>
          <span className={styles.hardwareTag}>
            💻 {problem.hardware}
          </span>
          <span className={styles.languageTag}>
            ⚡ {problem.language}
          </span>
        </div>

        {/* タグ */}
        {problem.tags.length > 0 && (
          <div className={styles.tags}>
            {problem.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className={styles.tag}>
                🏷️ {tag}
              </span>
            ))}
            {problem.tags.length > 3 && (
              <span className={styles.moreTag}>
                +{problem.tags.length - 3} 個
              </span>
            )}
          </div>
        )}

        {/* フッター */}
        <div className={styles.footer}>
          <div className={styles.author}>
            👤 {problem.author}
          </div>
          <div className={styles.date}>
            📅 {new Date(problem.createdAt).toLocaleDateString('ja-JP')}
          </div>
        </div>
      </div>
    </div>
  );
};