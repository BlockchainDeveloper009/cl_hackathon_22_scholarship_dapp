import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Navbar} from '../components/Navbar'

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Student Rewards App',
  chains,
});

const wagmiClient = createClient({
  connectors,
  provider,
  autoConnect: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      
      <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <div className="container">
              {<Navbar/> }
              <Component {...pageProps} />
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
    </div>
  )
}
