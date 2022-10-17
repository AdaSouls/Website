import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from "@web3-react/injected-connector";

const Injected = new InjectedConnector({
  supportedChainIds: [1, 56, 43114, 137, 10, 42161, 4689, 1666600000, 2001, 200101]
});

const networks = {
  milkomeda: {
    chainId: `0x${Number(2001).toString(16)}`,
    rpcUrls: ["https://rpc-mainnet-cardano-evm.c1.milkomeda.com"],
    chainName: "Milkomeda Cardano (C1)",
    nativeCurrency: { name: "MilkADA", decimals: 18, symbol: "MilkADA" },
    blockExplorerUrls: ["https://explorer-mainnet-cardano-evm.c1.milkomeda.com"],
    iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]
  }
}

const Home = () => {

  const { activate, deactivate, active, chainId, account, library } = useWeb3React();

  // example of switching or adding network with Milkomeda
  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${Number(2001).toString(16)}` }],
      });
    } catch (switchError) {
      // 4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [
              ...networks.milkomeda
            ],
          });
        } catch (error) {
          console.error(error)
        }
      } 
    }
  };

  useEffect(() => {
    if(typeof library !== "undefined") {
      if(library.provider.chainId !== 0x7d1) {
        switchNetwork();
      };
    }    
  }, [active])

  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <br></br>
      <h2>
        Welcome to AdaSouls
      </h2>
      <h4>
        The first platform for issuing Soulbound Tokens in Cardano
      </h4>
      <br></br>
      {!active ? (
      <motion.button onClick={() => { 
        activate(Injected)
      }}
        whileHover={{ 
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)"
        }}
      >
        Connect Wallet
      </motion.button>) : (
      <motion.button onClick={() => { deactivate(Injected) }}
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
          }}
        >
          Disconnect
        </motion.button>)}
      <div>Connection Status: {active}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>
    </motion.div>
  )
}

export default Home;