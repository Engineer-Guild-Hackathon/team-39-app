//問題の詳細説明などで使う、複数行の入力エリア
"use client"; // Required for handling user input

import React from 'react';
import styles from './styles/Textarea.module.css';

// Define the type for the component's props.
// It inherits all standard attributes of an HTML <textarea> element.
interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  // No additional custom props are needed for now
}

export const Textarea = ({ className, ...rest }: TextareaProps) => {
  // Combine the base style with any additional classes passed in
  const textareaClassName = `${styles.textarea} ${className || ''}`;

  return (
    <textarea className={textareaClassName} {...rest} />
  );
};