import Image from 'next/image'
import styles from './page.module.css'
import {increment} from "@/app/actions";
import PlusMinus from './components/plusminus';
export default function Home() {


  return (
    <div>
      <PlusMinus />
    </div>
  )
}
