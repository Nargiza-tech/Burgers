import React from 'react';
import burger from '../../img/burger.svg';
import styles from './main.module.css';
import arrow from '../../img/strelca.svg';

const Main = () => {
    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <h1>
                    Доставка вкусной еды <br/> до 30 минут + напиток <br/> в подарок!
                </h1>
                <p>
                    Доставим заказ вовремя и можете рассчитывать, что <br/> еда  будет доставлен всегда горячим и ароматным.
                </p>
                <button className={styles.btn}><span>Перейти в меню <span><img src={arrow} alt="" className={styles.br}/></span></span></button>
            </div>
            <div>
                <img src={burger} alt="" className="burger"/>
            </div>
        </div>
    );
};

export default Main;