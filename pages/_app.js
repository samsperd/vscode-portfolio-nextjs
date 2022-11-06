import LayoutOne from '../components/LayoutOne'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutOne>
      <Component {...pageProps} />
    </LayoutOne>
  )
}

export default MyApp
