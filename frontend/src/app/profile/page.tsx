import React from 'react';
import { Header } from '@/components/Header';

// ページコンポーネントの関数を定義
const ProfilePage = () => {
  // コンポーネントは必ずJSXを返す(returnする)必要があります
  return (
    <>
      <Header />
      <div>
        <h1>プロフィールページ</h1>
        <p>ここにプロフィール情報を表示します。</p>
      </div>
    </>
  );
};

// 必ずexport defaultでコンポーネントをエクスポートする
export default ProfilePage;