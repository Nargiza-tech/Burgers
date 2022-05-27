import React from 'react';
import styles from '../SecondProducts/second.module.css'

import minus from "../../img/minus.svg";
import plus from "../../img/plus.svg";
import WhyChooseUs from "../WhyСhooseUs/WhyChooseUs";

const SecondProducts = (props) => {
    return (
        <>
                <div className={`${styles.products} ${styles.ml}`}>

                              <div className={styles.productsPrent}>
                                <img src={props.item.img} alt="" className={styles.productImg}/>
                                <div className={styles.description}>
                                    <p className={styles.title}>
                                        {props.item.title}
                                    </p>
                                    <p className={styles.desc}>
                                        {props.item.decs}
                                    </p>
                                    <p className={styles.mt}>
                                        200 сом
                                    </p>
                                    <div className={styles.df}>
                                        <span><img src={minus} alt="" className={styles.minus}/> <span>1</span><span><img src={plus} alt=""/></span></span>
                                    </div>


                                    <button className={styles.btn}>в корзину</button>
                                </div>
                            </div>


                </div>



        </>
    );
};

export default SecondProducts;