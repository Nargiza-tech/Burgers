import React from 'react';
import SecondProducts from "../SecondProducts";
import {pizza} from "../../../Constant";
import styles from '../seconParen.module.css'

const SecondProductsParent = () => {
    return (<>
        <div className={styles.center}>
            {
                pizza.map((item) => {
                    return <SecondProducts key={item.id} item={item}/>
                })
            }

        </div>
            <div className={styles.flex}>
                <button className={styles.buttonMore}>Показать еще</button>

            </div>
        </>

);
};

export default SecondProductsParent;