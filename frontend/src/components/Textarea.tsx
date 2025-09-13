//問題の詳細説明などで使う、複数行の入力エリア
"use client"; // Required for handling user input

import React from 'react';
import styles from './styles/Textarea.module.css';

export const Textarea = ({ className, ...rest }: React.ComponentPropsWithoutRef<'textarea'>) => {
  // Combine the base style with any additional classes passed in
  const textareaClassName = `${styles.textarea} ${className || ''}`;

  return (
    <textarea className={textareaClassName} {...rest} />
  );
};