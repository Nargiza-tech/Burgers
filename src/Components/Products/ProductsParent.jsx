import React from 'react';
import {burger} from "../../Constant";
import Products from "./Products";
import styles from './products.module.css';

 const ProductsParent = () => {
     return (
 <div className={styles.center}>
     {
        burger.map((item) => {
           return  <Products key={item.id} item={item}/>
         })
                }
             </div>
    );
 };

export default ProductsParent;