"use client";

import Link from 'next/link';
import styles from './styles/Header.module.css';

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>🔍</div>
            <span>IssuesDB</span>
          </Link> 
        </div>
        <div className={styles.right}>
        </div>
      </div>
    </header>
  );
};