import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import CardContainer from '@/components/CardContainer/CardContainer';
import Header from '@/components/Header/Header';
import Image from 'next/image'
import MarketingCardContainer from '@/components/CardContainer/MarketingCardContainer';
import IntegratedCardContainer from '@/components/CardContainer/IntegratedCardContainer';
import SignIn from '@/components/popup/SignIn';
export default function Home() {

  return (
  <div>
    <Header/>
    <CardContainer/>
    <MarketingCardContainer/>
    <IntegratedCardContainer/>
    {/* <SignIn/> */}
  </div>
  )
}
