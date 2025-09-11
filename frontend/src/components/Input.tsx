//検索窓やフォームで使う入力欄
"use client"; 

import React from 'react';
import styles from './styles/Input.module.css';

// Inputが受け取るプロパティの型を定義
// HTMLの<input>が持つすべての属性をそのまま受け取れるように
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
}

export const Input = ({ className, ...rest }: InputProps) => {
  // 基本スタイルと、外から渡された追加スタイルを組み合わせる
  const inputClassName = `${styles.input} ${className || ''}`;

  return (
    <input className={inputClassName} {...rest} />
  );
};