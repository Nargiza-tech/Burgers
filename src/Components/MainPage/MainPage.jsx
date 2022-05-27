import React from 'react';
import Header from "../Header/Header";
import SecondHeader from "../SecondHeader/secondHeader";
import MenuHeader from "../Menu/MenuHeader";
import WhyChooseUs from "../WhyСhooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";

const MainPage = () => {
    return (
            <>
                <div style={{display:"flex", alignItems: "center",justifyContent:"center"}}>
                    <div>
                        <Header/>
                        <SecondHeader/>
                        <MenuHeader/>
                        <WhyChooseUs/>
                    </div>

                </div>
                <Footer/>
            </>
    );
};

export default MainPage;