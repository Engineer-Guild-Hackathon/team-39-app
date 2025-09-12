import { Problem, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: '田中 太郎',
  email: 'tanaka@example.com',
  avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  defaultEnvironment: {
    os: 'macOS',
    hardware: 'MacBook Pro M2',
    language: 'JavaScript',
  },
  favorites: ['1', '3'],
};

export const mockProblems: Problem[] = [
  {
    id: '1',
    title: 'React useStateが即座に更新されない問題',
    os: 'macOS',
    hardware: 'MacBook Pro M2',
    language: 'JavaScript',
    description: 'ReactでsetStateを呼び出した際、同じ関数内で状態が即座に更新されません。更新後の値をすぐに使おうとすると問題が発生します。',
    solution: 'useEffectフックを使用して状態の変更を監視するか、setStateの関数形式を使用してください。setStateは非同期であることを覚えておいてください。',
    tags: ['React', 'hooks', '状態管理'],
    createdAt: '2024-01-15',
    userId: '1',
    author: '田中 太郎',
  },
  {
    id: '2',
    title: 'TypeScript interfaceとtype aliasの使い分け',
    os: 'Windows 11',
    hardware: 'Dell XPS 13',
    language: 'TypeScript',
    description: 'TypeScriptでinterfaceとtype aliasをいつ使うべきか混乱しています。両方とも似たようなことができますが、微妙な違いがあります。',
    solution: '拡張される可能性のあるオブジェクトの形状にはinterfaceを使用してください。union型、プリミティブ型、計算型にはtype aliasを使用してください。interfaceは宣言マージが可能ですが、typeはできません。',
    tags: ['TypeScript', 'interface', 'type'],
    createdAt: '2024-01-14',
    userId: '2',
    author: '佐藤 花子',
  },
  {
    id: '3',
    title: 'CSS GridとFlexboxのレイアウト選択',
    os: 'Ubuntu 22.04',
    hardware: 'ThinkPad X1',
    language: 'CSS',
    description: '異なるレイアウトシナリオでCSS GridとFlexboxのどちらを使うべきか判断に困っています。それぞれをいつ使うべきでしょうか？',
    solution: '1次元レイアウト（行または列）にはFlexboxを使用してください。2次元レイアウト（行と列の両方）にはCSS Gridを使用してください。Gridは全体的なページレイアウトに適しており、Flexboxはコンポーネントレベルの配置に適しています。',
    tags: ['CSS', 'レイアウト', 'grid', 'flexbox'],
    createdAt: '2024-01-13',
    userId: '3',
    author: '鈴木 一郎',
  },
  {
    id: '4',
    title: 'Python仮想環境がアクティベートされない',
    os: 'macOS',
    hardware: 'MacBook Air M1',
    language: 'Python',
    description: '仮想環境を作成しましたが、正しくアクティベートされません。コマンドプロンプトが変わらず、パッケージがグローバルにインストールされてしまいます。',
    solution: 'シェルに適したアクティベーションコマンドを使用していることを確認してください。bash/zshの場合：source venv/bin/activate。Windowsの場合：venv\\Scripts\\activate。シェル設定を確認してください。',
    tags: ['Python', '仮想環境', 'pip'],
    createdAt: '2024-01-12',
    userId: '4',
    author: '山田 美咲',
  },
  {
    id: '5',
    title: 'Next.js App Routerでの動的ルーティング',
    os: 'macOS',
    hardware: 'MacBook Pro M2',
    language: 'TypeScript',
    description: 'Next.js 13のApp Routerで動的ルーティングを設定しようとしていますが、params の型定義でエラーが発生します。',
    solution: 'page.tsxファイルでparamsの型を正しく定義してください。例: interface Props { params: { id: string } }。また、generateStaticParamsを使用して事前生成することも考慮してください。',
    tags: ['Next.js', 'TypeScript', 'App Router', 'ルーティング'],
    createdAt: '2024-01-11',
    userId: '1',
    author: '田中 太郎',
  },
  {
    id: '6',
    title: 'Docker コンテナ内でのポート接続問題',
    os: 'Ubuntu 22.04',
    hardware: 'カスタムデスクトップ',
    language: 'Docker',
    description: 'Dockerコンテナ内で実行しているWebアプリケーションに外部からアクセスできません。localhost:3000でアクセスしようとしても接続できません。',
    solution: 'docker run時に-pオプションでポートマッピングを指定してください（例: -p 3000:3000）。また、アプリケーションが0.0.0.0でリッスンしていることを確認してください。localhostではなく0.0.0.0:3000でバインドする必要があります。',
    tags: ['Docker', 'ネットワーク', 'ポート', 'デプロイ'],
    createdAt: '2024-01-10',
    userId: '3',
    author: '鈴木 一郎',
  }
];

export const osOptions = ['macOS', 'Windows 11', 'Windows 10', 'Ubuntu', 'Linux', 'その他'];
export const hardwareOptions = ['MacBook Pro M2', 'MacBook Air M1', 'Dell XPS 13', 'ThinkPad X1', 'カスタムデスクトップ', 'その他'];
export const languageOptions = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'CSS', 'HTML', 'React', 'Vue', 'Angular', 'Docker', 'その他'];