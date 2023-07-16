import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BannerAdaSouls from '../component/banner/BannerAdaSouls';
import BannerSoulBound from '../component/banner/BannerSoulBound';
import BannerPoap from '../component/banner/BannerPoap';
import PartnersList from '../component/partners/PartnersList';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const AdaSouls = () => {

    return (
        <>
        <SEO title="AdaSouls"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <Header />
            <BannerAdaSouls />
            <div className='banner banner-style-6'>            
                <BannerSoulBound/>
                <BannerPoap />
            </div>

            <div className="section section-padding">
            <PartnersList />
            </div>
            <Footer parentClass="" />
        </main>
        </>
    )
}

export default AdaSouls;

