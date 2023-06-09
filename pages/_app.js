import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import connectDB from '@/mongoConfig'

connectDB();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
