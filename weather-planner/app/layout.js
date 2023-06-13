import '../styles/globals.css'
import { Lato } from 'next/font/google'

const lato  = Lato({ 
  weight: '400',
  subsets: ['latin'], 
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}