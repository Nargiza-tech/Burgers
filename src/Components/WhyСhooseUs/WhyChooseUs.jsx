import React from 'react';
import styles from './whyChooseUs.module.css';
import car from '../../img/car.svg';
import base from '../../img/base.svg';
import menu from '../../img/Group 27.svg';
import location from '../../img/location.svg'
import Reviews from "../ Reviews/ Reviews";
import SliderSlick from "../ Reviews/ Reviews";




const WhyChooseUs = () => {
    return (
        <>
            <h1 className={styles.h1}>Почему выбирают нас:</h1>
            {/*<div className={styles.containerServis}>*/}
            <div className={styles.delivery}>
            <div className={styles.flex}>
            <div className={styles.col}>

                <img className={styles.ml} src={location} alt=""/>
                <div className={styles.text}>
                <h3 className={styles.dilveryTitle}>Мгновенное доставка</h3>
                <p className={styles.dilveryDesc}>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                </div>

            </div>
            <div className={styles.col}>

                <img className={styles.ml} src={location} alt=""/>
                <div className={styles.text}>
                <h3 className={styles.dilveryTitle}>Свежие продукты</h3>
                <p className={styles.dilveryDesc}>Вся продукция хранится в хороших условиях тем самым продливая срок хранения</p>
                </div>

            </div>
            <div className={styles.col}>

                <img className={styles.ml} src={location} alt=""/>
                <div className={styles.text}>
                <h3 className={styles.dilveryTitle}>Уникальное меню</h3>
                <p className={styles.dilveryDesc}>Ежедневно мы обновляем наше меню и том числе коктейльное</p>
                </div>

            </div>
                <div className={styles.col}>

            <img className={styles.ml} src={location} alt=""/>
            <div className={styles.text}>
            <h3 className={styles.dilveryTitle}>Доставка</h3>
            <p className={styles.dilveryDesc}>Мы быстро доставляем вашу еду по указанному адресу</p>
            </div>

        </div>

            </div>
            </div>
            {/*</div>*/}
                <div style={{width:'1206px'}}>
                    <SliderSlick/>
                </div>

        </>


    );
};

export default WhyChooseUs;