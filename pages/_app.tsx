import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import * as servicWorker from './serviceWorker';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>
}

if (typeof window !== 'undefined') {
  servicWorker.unregister();
}

