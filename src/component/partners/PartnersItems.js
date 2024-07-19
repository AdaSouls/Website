import React from 'react';

const Data = [
    {
        image: "/images/brand/aldea.png",
        link: "https://aldea-dao.org"
    },
    {
        image: "/images/brand/dcspark.png",
        link: "https://www.dcSpark.io/"
    },
    {
        image: "/images/brand/gamechanger.png",
        link: "https://gamechanger.finance"
    },
    {
        image: "/images/brand/paima.png",
        link: "https://PaimaStudios.com/"
    },
    {
        image: "/images/brand/falcon.png",
        link: "https://FalconStakepool.com"
    },
    {
        image: "/images/brand/adasolar.png",
        link: "https://linkedin.com/in/adasolar"
    }
]


const PartnersItems = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <a target={'_blank'} href={process.env.PUBLIC_URL + data.link} rel="noreferrer"><img src={process.env.PUBLIC_URL + data.image} alt="Brand" /></a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PartnersItems;