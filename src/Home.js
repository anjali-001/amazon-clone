import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                    />
                    <div className="home__row">
                        <Product 
                        id="1"
                        title="The lean startup" 
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={5}/>
                        <Product
                        id="2"
                        title="Kenwood kMix Stand Mixer"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        />
                    </div>
                    <div className="home__row">
                    <Product
                        id="3"
                        title="FitBit band"
                        price={39.0}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        />
                       <Product
                       id="4"
                        title="Amazon Echo"
                        price={200.0}
                        rating={4}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                        <Product
                        id="5"
                        title="New Apple iPad Pro"
                        price={69.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
                        />
                    </div>
                    <div className="home__row">
                    
                    <Product
                        id="6"
                        title="Samsung LED Monitor"
                        price={23.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
