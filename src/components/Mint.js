import React from 'react';

const Poap = ({ token }) => {
  if(token.type === 'POAP') console.log('hola')
  return (
    <div className="container mint">
      <h2>Thank you for minting your soulbound token :)</h2>
      <p>You have minted a token in {token.network} network with: </p>
      {token.features.map(feature => <div key={feature}>{feature}</div>)}
    </div>
  )
}

export default Poap;