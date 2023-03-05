// Top level imports

import { Inter } from 'next/font/google';

// Atoms / Molecules / Organisms
import { Header } from '@/components/organisms/Header';

const inter = Inter({ subsets: ['latin'] })

// Component definition
export default function Home() {
  return (
    <>
      <Header />
    </>
  )
}
