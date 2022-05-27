import React, {useContext, useEffect, useState} from 'react';
import styles from './seconHeader.module.css';
import {BASE_URL} from "../../Constant";
import LangContext from "../../CalcContext/CalcContext";


const NewProduct = ({item}) => {
    const {calc, setCalc} = useContext(LangContext);

    const [countCart, setCountCart] = useState(1);

    const increase = () => {
        setCountCart(countCart + 1)
    }

    const decrease = () => {
        if (countCart > 1) {
            setCountCart(countCart - 1)
        }
    }


    const addCard = () => {
        setCalc(calc + 1)
        let cartStorage = localStorage.getItem('cart');
        let id = item.id;
        let obj = {
            [id]: {
                ...item,
                countCart
            }
        }

        if (cartStorage) {
            cartStorage = JSON.parse(cartStorage);
            obj = {
                ...obj,
                ...cartStorage
            }

        }
        localStorage.setItem("cart", JSON.stringify(obj))

    }


    return <div className={styles.productsPrent}>
        <img src={item.img} alt="" className={styles.productImg}/>
        <div className={styles.description}>
            <p className={styles.title}>
                {item.title}
            </p>
            <p className={styles.desc}>
                {item.desc}
            </p>
            <p className={`styles.mt ${styles.price1}`}>
                {item.price}
            </p>
            <div className={styles.df}>

              <span><button className={styles.minus} onClick={decrease}>-</button>
                  <span>{countCart}</span>
                 <span><button className={styles.plus} onClick={increase}>+</button></span>
              </span>
            </div>
            <button className={styles.btn} onClick={addCard}>в корзину</button>
        </div>
    </div>
}


const SecondHeader = () => {

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
        updateFoodContent("/burgers")
    }, [])

    return (
        <>
            <div className={styles.flex}>
                <span className={styles.h1}>Новинки</span>
                <div className={styles.secondHeader}>
                    <div style={{maxHeight: "450px"}}>
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
                                    return <NewProduct item={item}/>
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

export default SecondHeader;