//OSなどを選ぶドロップダウンメニュー
"use client"; // ユーザーの選択操作を受け付けるため

import React from 'react';
import styles from './styles/Select.module.css';

// 各選択肢の型を定義
type Option = {
  value: string;
  label: string;
};

// Selectコンポーネントが受け取るプロパティの型を定義
interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  options: Option[];
}

export const Select = ({ options, className, ...rest }: SelectProps) => {
  return (
    <div className={styles.selectWrapper}>
      <select className={`${styles.select} ${className || ''}`} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};