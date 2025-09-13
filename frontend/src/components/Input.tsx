//検索窓やフォームで使う入力欄
"use client"; 

import React from 'react';
import styles from './styles/Input.module.css';

export const Input = ({ className, ...rest }: React.ComponentPropsWithoutRef<'input'>) => {
  // 基本スタイルと、外から渡された追加スタイルを組み合わせる
  const inputClassName = `${styles.input} ${className || ''}`;

  return (
    <input className={inputClassName} {...rest} />
  );
};