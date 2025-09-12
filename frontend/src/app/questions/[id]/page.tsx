"use client"; // useStateを使うため

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

export default function QuestionDetailPage() {
  const [details, setDetails] = useState('');

  return (
    <>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '600px' }}>
        <form>
          <label 
            htmlFor="problem-details" 
            style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}
          >
            問題の詳細説明
          </label>
          <Textarea 
            id="problem-details"
            placeholder="何をしていて、何が起こったか、エラーメッセージなどを詳しく書いてください..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={10}
          />
          <div style={{ marginTop: '1rem' }}>
            <Button type="submit">
              問題を登録
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}