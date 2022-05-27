import React from 'react';
import img from "../../img/LOgo (3).svg";
import phone from "../../img/footerPhone.svg";
import cart from "../../img/cart.svg";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>


            <footer className={styles.footer}>
                <div>
                    <img  className={styles.logoImg} src={img} alt=""/>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>Главное</li>
                            <li>Меню</li>
                            <li>Доставка</li>
                            <li>Контакты</li>
                            <li>Главное</li>
                            <li><img  src={phone} alt=""/>0500000000</li>

                        </ul>
                    </nav>
                </div>

            </footer>
        </div>
    );
};

export default Footer;