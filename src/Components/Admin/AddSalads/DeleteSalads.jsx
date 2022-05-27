import React from 'react';
import {BASE_URL} from "../../../Constant";

const DeleteSalads = ({id, getSalads}) => {

    const deleteSalads= (id) => {
        const url = BASE_URL + `/salads/${id}`;

        const options = {
            method: 'DELETE'      //heders body не пишем при удаление
        }

        fetch(url, options)
            .then((response) => getSalads())

    }

    return (
        <button onClick={() => {deleteSalads(id)}} className='btn btn-danger m-2'>Удалить
        </button>
    );
};

export default DeleteSalads;