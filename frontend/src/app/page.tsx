"use client";

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import styles from './page.module.css';

// Selectコンポーネント用のダミーデータ
const osOptions = [
  { value: 'all', label: 'すべてのOS' },
  { value: 'macos', label: 'macOS' },
  { value: 'windows', label: 'Windows' },
];

const hardwareOptions = [
  { value: 'all', label: 'すべてのハードウェア' },
  { value: 'm1', label: 'MacBook Air M1' },
  { value: 'm2', label: 'MacBook Pro M2' },
];

const langOptions = [
  { value: 'all', label: 'すべての言語' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
];

export default function HomePage() {
  // フォームの入力値を管理するための状態
  const [keyword, setKeyword] = useState('');
  const [selectedOs, setSelectedOs] = useState('all');
  const [selectedHardware, setSelectedHardware] = useState('all');
  const [selectedLang, setSelectedLang] = useState('all');
  
  // 詳細フィルターの表示・非表示を管理する状態
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>開発解決策検索エンジン</h1>
        
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <Input 
              type="text"
              placeholder="問題、解決策、キーワードを検索..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div className={styles.filterControls}>
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className={styles.filterToggle}
            >
              ▼ 詳細フィルター
            </button>
            <Button>検索</Button>
          </div>

          {showFilters && (
            <div className={styles.filters}>
              <Select options={osOptions} value={selectedOs} onChange={(e) => setSelectedOs(e.target.value)} />
              <Select options={hardwareOptions} value={selectedHardware} onChange={(e) => setSelectedHardware(e.target.value)} />
              <Select options={langOptions} value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)} />
            </div>
          )}
        </div>

        <div className={styles.newProblemButtonWrapper}>
          <Button>+ 新しい問題を登録</Button>
        </div>
      </div>
    </main>
  );
}