//「問題を登録」「検索」など、サイト内で共通のデザインのボタン
"use client"
import React from 'react';
import styles from './styles/Button.module.css';

// ボタンが受け取るプロパティ（引数）の型を定義
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  // childrenはボタンの中に表示するテキストやアイコン
  children: React.ReactNode;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  // classNameを組み合わせることで、基本スタイル＋追加のスタイルを適用
  const buttonClassName = `${styles.button} ${className || ''}`;

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};