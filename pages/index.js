import CardContainer from '@/components/CardContainer/CardContainer';
import Header from '@/components/Header/Header';
import Image from 'next/image'
import MarketingCardContainer from '@/components/CardContainer/MarketingCardContainer';
import IntegratedCardContainer from '@/components/CardContainer/IntegratedCardContainer';
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
