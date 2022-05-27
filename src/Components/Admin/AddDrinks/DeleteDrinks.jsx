import React from 'react';
import {BASE_URL} from "../../../Constant";

const DeleteDrinks = ({id, getDrinks}) => {

    const deleteDrinks = (id) => {
        const url = BASE_URL + `/drinks/${id}`;

        const options = {
            method: 'DELETE'      //heders body не пишем при удаление
        }

        fetch(url, options)
            .then((response) => getDrinks())

    }

    return (
        <button onClick={() => {deleteDrinks(id)}} className='btn btn-danger m-2'>Удалить
        </button>
    );
};

export default DeleteDrinks;