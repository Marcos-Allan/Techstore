import Menu from '@/app/components/Menu'
import './globals.css'
import { Aldrich } from 'next/font/google'

const aldrich = Aldrich({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Teste google',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${aldrich.className} pt-[120px]`}>
          <Menu />
          {children}
      </body>
    </html>
  )
}



