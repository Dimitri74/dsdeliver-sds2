import React from 'react';
import './styles.css'
import { ReactComponent as MainImage } from './main.svg'
import Footer from '../Footer';



function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faço seu pedido <br /> que entregamos <br /> pra você!!!
                    </h1>
                        <h3 className="home-subtitle">
                            Escolha su pedido e em poucos minutos<br />
                        levaremos na sua porta.
                    </h3>
                        <a href="ORDERS" className="home-btn-order">
                            FAZER PEDIDO
                    </a>
                    </div>
                    <div className="home-image">
                        <MainImage></MainImage>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )

}

export default Home;