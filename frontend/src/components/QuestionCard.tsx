//検索結果一覧で表示される、一つ一つの問題カード
"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { Tag } from './Tag'; // 先ほど作成したTagコンポーネント
import styles from './styles/QuestionCard.module.css';

// QuestionCardが受け取るデータの型を定義
export interface QuestionCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  authorName: string;
  authorAvatarUrl: string;
  createdAt: string;
}

export const QuestionCard = (props: QuestionCardProps) => {
  return (
    <Link href={`/questions/${props.id}`} className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      
      <div className={styles.tagsContainer}>
        {props.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className={styles.footer}>
        <Image
          src={props.authorAvatarUrl}
          alt={props.authorName}
          width={24}
          height={24}
          className={styles.avatar}
        />
        <span className={styles.authorName}>{props.authorName}</span>
        <time className={styles.date}>{props.createdAt}</time>
      </div>
    </Link>
  );
};