"use client";

import Link from 'next/link';
// ImageとButtonは今のところ使わない
// import Image from 'next/image'; 
// import { Button } from '@/components/Button';
import { usePathname } from 'next/navigation';
import styles from './styles/Header.module.css';

export const Header = () => {
  // 指示.1 ユーザー登録機能は後でやる
  /*
  const user = {
    name: '田中 太郎',
    avatarUrl: '', // 画像を入れる
  };
  */

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          DevSolve
        </Link> 
      </div>
      <div className={styles.right}>
        <nav className={styles.navLinks}>
          {/* 指示4. トップページではない場合にのみ「問題を検索」リンクを表示し、リンク先をトップ('/')に変更 */}
          {pathname !== '/' && (
            <Link href="/" className={styles.navLink}>
              問題を検索
            </Link>
          )}

          {/* 指示2. 問題登録ボタンは後でやる */}
          {/*
          <Button onClick={() => {}}>
            + 問題を登録
          </Button>
          */}
        </nav>
        
        {/* 指示1. ユーザー情報は後でやる */}
        {/*
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
        */}
      </div>
    </header>
  );
};