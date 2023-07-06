import Navbar from '@/components/Navbar'
import Image from 'next/image'
export default function Home() {
  const navlink_ = ["home",  "resources", "inspiration", "pricing"];

  return (
  <div>
    <Navbar navlink={navlink_}/>
    mailChip
  </div>
  )
}
