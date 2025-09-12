"use client";

import React, { useState } from 'react';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button';
import styles from './styles/SearchForm.module.css';

export interface SearchFilters {
  query: string;
  os: string;
  hardware: string;
  language: string;
}

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
  initialFilters?: SearchFilters;
}

const osOptions = [
  { value: '', label: 'すべてのOS' },
  { value: 'macOS', label: 'macOS' },
  { value: 'Windows 11', label: 'Windows 11' },
  { value: 'Windows 10', label: 'Windows 10' },
  { value: 'Ubuntu', label: 'Ubuntu' },
  { value: 'Linux', label: 'Linux' },
];

const hardwareOptions = [
  { value: '', label: 'すべてのハードウェア' },
  { value: 'MacBook Pro M2', label: 'MacBook Pro M2' },
  { value: 'MacBook Air M1', label: 'MacBook Air M1' },
  { value: 'Dell XPS 13', label: 'Dell XPS 13' },
  { value: 'ThinkPad X1', label: 'ThinkPad X1' },
  { value: 'カスタムデスクトップ', label: 'カスタムデスクトップ' },
];

const languageOptions = [
  { value: '', label: 'すべての言語' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  { value: 'CSS', label: 'CSS' },
  { value: 'React', label: 'React' },
];

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, initialFilters }) => {
  const [filters, setFilters] = useState<SearchFilters>(
    initialFilters || {
      query: '',
      os: '',
      hardware: '',
      language: '',
    }
  );

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.searchForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* メイン検索 */}
        <div className={styles.mainSearch}>
          <div className={styles.searchIcon}>🔍</div>
          <Input
            type="text"
            placeholder="問題、解決策、キーワードを検索..."
            value={filters.query}
            onChange={(e) => handleInputChange('query', e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* 詳細フィルター切り替え */}
        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={styles.filterToggle}
          >
            📋 詳細フィルター
          </button>

          <Button type="submit" className={styles.searchButton}>
            検索
          </Button>
        </div>

        {/* 詳細フィルター */}
        {showAdvanced && (
          <div className={styles.advancedFilters}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                オペレーティングシステム
              </label>
              <Select
                options={osOptions}
                value={filters.os}
                onChange={(e) => handleInputChange('os', e.target.value)}
              />
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                ハードウェア
              </label>
              <Select
                options={hardwareOptions}
                value={filters.hardware}
                onChange={(e) => handleInputChange('hardware', e.target.value)}
              />
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                言語・技術
              </label>
              <Select
                options={languageOptions}
                value={filters.language}
                onChange={(e) => handleInputChange('language', e.target.value)}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};