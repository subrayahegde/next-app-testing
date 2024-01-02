import Image from 'next/image'
import { Inter } from 'next/font/google'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'
import Component4 from '../components/Component4'
import Component5 from '../components/Component5'
//import Component6 from '../components/Component6'

const inter = Inter({ subsets: ['latin'] })

export default function Component() {  
  return (
    <>
     <div className="grid grid-cols-3 divide-x">
         <div className="h-96 w-96"><Component1 name="Hegdes"/></div>
         <div className="h-96 w-96"><Component2 /></div>
         <div className="h-96 w-96"><Component3 /></div>         
         <div className="h-96 w-96"><Component4 /></div>
         <div className="h-96 w-96"><Component5 /></div>   
        
     </div>
    </>
  )
}
