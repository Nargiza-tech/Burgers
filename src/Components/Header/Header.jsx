import React, {useContext} from 'react';
import styles from '../../Components/Header/header.module.css';
import img from '../../img/log.svg';
import phone from '../../img/phone.svg';
import cart from '../../img/cart.svg'
import Main from "../Main/Main";
import {Link} from "react-router-dom";
import LangContext from "../../CalcContext/CalcContext";

const Header = () => {
    const {calc, setCalc} = useContext(LangContext);
    return (
        <>
        <div className={styles.containerHeaders}>


      <header className={styles.header}>
          <div>
              <img  className={styles.logoImg} src={img} alt=""/>
          </div>
          <div>
              <nav>
                  <ul className={styles.ul}>
                      <li>Главное</li>
                      <li>Меню</li>
                      <li>Доставка</li>
                      <li><Link to="/contacts">Контакты</Link></li>
                          <li>Главное</li>
                          <li><span className={styles.mr}><img  src={phone} alt=""/></span><span>0500000000</span></li>

                      <li><span className={styles.mr}><Link to="/table/"><img src={cart} alt="" className="cart"/></Link></span><span>{calc}</span></li>

                  </ul>
              </nav>
          </div>

      </header>
        </div>
                <Main/>

        </>
    );
};

export default Header;