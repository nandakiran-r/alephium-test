import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AlephiumConnectButton, AlephiumWalletProvider } from '@alephium/web3-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlephiumWalletProvider useTheme="retro">
      <App />
      <AlephiumConnectButton />
    </AlephiumWalletProvider>
  </StrictMode>,
)
