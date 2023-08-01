import Footer from '@/Layout/Footer/Footer'
import Navbar from '@/Layout/Navbar/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer/>
    </>
}
