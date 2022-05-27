import React, {useEffect, useState} from 'react';
import styles from '../SecondHeader/seconHeader.module.css'
import {BASE_URL} from "../../Constant";


const MenuProduct = ({item}) => {
    const [count, setcount] = useState(1);

    let plusBtn = () => {
        setcount(count + 1)
    }

    let minusBtn = () => {
        setcount(count - 1)
    }

    return <div className={styles.productsPrent}>
        <img src={item.img} alt="" className={styles.productImg}/>
        <div className={styles.description2}>
            <p className={styles.title} style={{color: "#254F4C"}}>
                {item.title}
            </p>
            <p className={styles.desc}>
                {item.desc}
            </p>
            <p className={`styles.mt ${styles.price}`}>
                {item.price}
            </p>
            <div className={styles.df}>

              <span><button className={styles.minus2} onClick={minusBtn}>-</button>
                  <span>{count}</span>
                 <span><button className={styles.plus2} onClick={plusBtn}>+</button></span>
              </span>
            </div>
            <button className={styles.btn2}>в корзину</button>
        </div>
    </div>
}


const MenuHeader = () => {

    const [food, setFood] = useState([]);

    const updateFoodContent = (foodUrl) => {
        const url = BASE_URL + foodUrl;
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => setFood(data))

        console.log('hello')
    }

    useEffect(() => {
        updateFoodContent("/pizza")
    }, [])

    return (
        <>
            <div className={styles.flex}>
                <span className={styles.h1}>Меню</span>
                <div className={styles.secondHeader}>
                    <div>
                        <ul>
                            <li onClick={() => updateFoodContent("/pizza")}>Пицца</li>
                            <li onClick={() => updateFoodContent("/burgers")}>Бургер</li>
                            <li onClick={() => updateFoodContent("/sushi")}>Суши</li>
                            <li onClick={() => updateFoodContent("/rolls")}>Роллы</li>
                            <li onClick={() => updateFoodContent("/salads ")}>Салаты</li>
                            <li onClick={() => updateFoodContent("/desserts ")}>Десерты</li>
                            <li onClick={() => updateFoodContent("/drinks ")}>Напитки</li>
                        </ul>
                        {console.log(food)}
                        <div className={styles.center}>
                            {
                                food.map((item) => {
                                    return <MenuProduct item={item}/>
                                })
                            }
                        </div>
                    </div>
                </div>

                {/*<div className={styles.flex}>*/}
                {/*    <ProductsParent/>*/}
                {/*</div>*/}
            </div>

        </>
    );
};

export default MenuHeader;