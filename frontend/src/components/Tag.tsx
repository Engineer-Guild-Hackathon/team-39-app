//「React」「CSS」などのタグ表示
import React from 'react';
import styles from './styles/Tag.module.css';

interface TagProps {
  children: React.ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return <span className={styles.tag}>{children}</span>;
};