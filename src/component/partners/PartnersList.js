import React from 'react';
import PartnersItems from './PartnersItems';


const PartnersList = () => {
    return (
        <div className="section section-padding-2 bg-color-light">            
            <div className="container">
            <h3 className='title-partners'>Partners</h3>
                <div className='row'>
                <PartnersItems />
                </div>
            </div>
        </div>
    )
}

export default PartnersList;