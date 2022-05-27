import React from 'react';
import styles from './AdminPage.module.css';
import sideBarLogo from '../../img/logo.svg';
import zakazy from '../../img/zakazy.svg';
import mainImg from '../../img/main.svg';
import menu from '../../img/menu.svg';
import contacts from '../../img/contacts.svg';
import reviews from '../../img/rew.svg';
import sot from '../../img/sot.svg';
import MainPage from "../MainPage/MainPage";
import {Link} from "react-router-dom";



const AdminPage = () => {
    return (
        <div className={`container ${styles.container2}`}>
            <div className="row h-100">
                <div className={`col-2  text-white p-3 ${styles.backGorund}`}>

                    <div className={` mt-3 ${styles.logoImg}`}>
                        <span><img src={sideBarLogo} alt=""/>FOOD PLANET</span>
                    </div>

                    <div className={`mt-5 ${styles.nav}`}>

                            <div><span><img  className="m-3" src={mainImg} alt=""/></span>Главная</div>
                            <div><span><img className="m-3" src={zakazy} alt=""/></span>Заказы</div>
                            <div><span><img  className="m-3" src={menu} alt=""/></span>Меню</div>
                            <div><Link to={"/comments/"}><span><img  className="m-3" src={contacts} alt=""/></span>Отзывы</Link></div>
                            <div><span><img className="m-3"  src={reviews} alt=""/></span>Контакты</div>
                            <div><span><img className="m-3"  src={sot} alt=""/></span>Сотрудники</div>
                    </div>

                </div>
                <div className="col-10 pt-5">
                    <div className='row mt-5'>

                 <div className={`col-2 m-2  ${styles.products}`}>
                     <Link to={"/addBurgers/"}>Бургер</Link>
                  </div>

                    <div className={`col-2 m-2  ${styles.products}`}>
                        <Link to={"/addPizza/"}>Пицца</Link>
                    </div>

                    <div className={`col-2 m-2  ${styles.products}`}>
                        <Link to={"/addSushi/"}>Суши</Link>
                    </div>

                    <div className={`col-2 m-2  ${styles.products}`}>
                        <Link to={"/addRolls/"}>Роллы</Link>
                    </div>

                    <div className={`col-2 m-2  ${styles.products}`}>
                        <Link to={"/addSalads/"}> Салаты</Link>
                    </div>

                    <div className={`col-2 m-2  ${styles.products}`}>
                        <Link to={"/addDrinks/"}>Напитки</Link>
                    </div>
                    <div className={`col-2 m-2  ${styles.products}`}>
                        <Link to={"/addDesserts/"}>Десерты</Link>
                    </div>
                        <div className={`col-2 m-2  ${styles.products}`}>
                            Десерты
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default AdminPage;