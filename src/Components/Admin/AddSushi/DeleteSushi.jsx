import React from 'react';
import {BASE_URL} from "../../../Constant";

const DeleteSushi = ({id, getSushi}) => {

    const deleteSushi = (id) => {
        const url = BASE_URL + `/sushi/${id}`;

        const options = {
            method: 'DELETE'      //heders body не пишем при удаление
        }

        fetch(url, options)
            .then((response) => getSushi())

    }

    return (
        <button onClick={() => {deleteSushi(id)}} className='btn btn-danger m-2'>Удалить
        </button>
    );
};

export default DeleteSushi;