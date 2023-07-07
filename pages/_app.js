import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const navlink_ = ["home",  "resources", "inspiration", "pricing"];
  return <>
    <Navbar navlink={navlink_}/>
   <Component {...pageProps} />
   <Footer/>
   </>
}
