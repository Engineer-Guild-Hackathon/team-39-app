"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button';
import styles from './styles/Header.module.css';

export const Header = () => {
  // 本来はログイン状態などから取得する
  const user = {
    name: '田中 太郎',
    avatarUrl: '', // 画像を入れる
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          DevSolve
        </Link> 
      </div>
      <div className={styles.right}>
        <nav className={styles.navLinks}>
          <Link href="/search" className={styles.navLink}>
            問題を検索
          </Link>
          <Button onClick={() => { /* 問題登録ページへ遷移する処理 */ }}>
            + 問題を登録
          </Button>
        </nav>
        <Link href="/profile" className={styles.userProfile}>
          <Image
            src={user.avatarUrl}
            alt="ユーザーアイコン"
            width={36}
            height={36}
            className={styles.avatar}
          />
          <span>{user.name}</span>
        </Link>
      </div>
    </header>
  );
};