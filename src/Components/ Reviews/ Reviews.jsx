import React, {useEffect, useState} from 'react';
import styles from './reviews.module.css';
import userImg from '../../img/userImg.svg';
import backEdit from '../../img/backEdit.svg'
import editPencil from '../../img/editPencil.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {BASE_URL} from "../../Constant";

const SliderSlick = () => {

    const settings = {
        dots: true,
        slidesToShow: 3.9,
        slidesToScroll: 1
    };


    const [comments, setComments] = useState([])


    const getComments = () => {
        const url = BASE_URL + '/comments';
        fetch(url)
            .then((response) => response.json())
            .then((data) => setComments(data))

    }


    useEffect(() => {
        getComments()
    }, [])


    return (

        <div className={styles.reviewsBlock}>
            <h1>Отзывы</h1>

            <div className={styles.reviewsCenter}>
                <Slider {...settings}>
                    {
                        comments.map((item) => {


                            return <div className={styles.reviews}>

                                <img src={backEdit} alt=""/>

                                <div className={styles.reviewsChildren}>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mjxJorGXVYoeJG1AZ7Nue-jB6xWl_PG0ug&usqp=CAU"
                                        className={styles.userImg} alt=""/>

                                    <div className={styles.reviewsChildren_text}>
                                        <p style={{color: "#3B7976"}}>{item.surname}<p>{item.name}</p>
                                            <p>{item.email}</p><span><img className={styles.editImg} src={editPencil}
                                                                          alt=""/></span></p>

                                        <div style={{width: "216px", height: "106px"}}>
                                            <p>{item.feedback}</p>

                                        </div>
                                    </div>
                                    <p className={styles.data}>{item.date}</p>

                                </div>

                            </div>
                        })
                    }

                </Slider>


            </div>


        </div>


    );
};

export default SliderSlick;