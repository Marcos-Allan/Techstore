import Menu from '@/app/components/Menu'
import './globals.css'
import { Aldrich } from 'next/font/google'

import { Provider } from '@/providers'

const aldrich = Aldrich({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'TechStore',
  description: 'loja de roupas, sapatos e chapéus',
}

export default function RootLayout({children}) {
  return (
    <Provider>
      <html lang="pt-br">
        <body className={`${aldrich.className} bg-h-white-100`}>
          <Menu />
          {children}
        </body>
      </html>
    </Provider>
  )
}



