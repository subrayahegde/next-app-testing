import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return (
      <div className="flex h-screen">
        <div className="m-auto">
           <h1>This is HOME page</h1>
        </div>  
     </div>
  );  
}
