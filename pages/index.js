import CardContainer from '@/components/home/CardContainer/CardContainer';
import Header from '@/components/home/Header/Header';
import Image from 'next/image'
import MarketingCardContainer from '@/components/home/CardContainer/MarketingCardContainer';
import IntegratedCardContainer from '@/components/home/CardContainer/IntegratedCardContainer';
export default function Home() {
  return (
  <div>
    <Header/>
    <CardContainer/>
    <MarketingCardContainer/>
    <IntegratedCardContainer/>
  </div>
  )
}
