import React, { useState } from 'react';
import styles from './products.module.css';
import productBurger from '../../img/burgerImg.svg';




const Products = (props) => {

    const[count, setcount] = useState(0);

    let plusBtn = () => {
        setcount(count+1)
    }

    let minusBtn = () => {
        setcount(count-1)
    }


    return (
        <>
        <div className={styles.center}>

                     <div className={styles.productsPrent}>

                        <img src={productBurger} alt="" className={styles.productImg}/>
                        <div className={styles.description}>
                            <p className={styles.title}>
                                {props.item.title}
                            </p>
                            <p className={styles.desc}>
                                {props.item.desc}
                            </p>
                            <p className={styles.mt}>
                                200 сом
                            </p>
                            <div className={styles.df}>

                                <span><button className={styles.minus} onClick={minusBtn}>-</button> <span>{count}</span><span><button className={styles.plus} onClick={plusBtn}>+</button></span></span>


                            </div>


                            <button className={styles.btn}>в корзину</button>
                        </div>
                    </div>



        </div>
        </>
    );
};

export default Products;