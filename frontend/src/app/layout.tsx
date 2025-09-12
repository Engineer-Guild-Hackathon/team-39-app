import { Header } from '@/components/Header'; // Headerをインポート
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header /> {/* ここにHeaderを配置 */}
        <main>{children}</main>
      </body>
    </html>
  )
}