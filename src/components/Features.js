import React from 'react';
import { Link } from 'react-router-dom';

const Features = ({ addFeature, token }) => {
  let features = ['Soulbound', 'POAP', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="features container">
      
      <h3>Step 2: Choose features</h3>
      <ul>
        {features.map(feature => {
          let spanClass = token.features.includes(feature) ? 'active' : '';
          return (
            <li key={feature} onClick={() => addFeature(feature)}>
              <span className={spanClass}>{ feature }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/mint">
        <button>
          Mint
        </button>
      </Link>

    </div>
  )
}

export default Features;