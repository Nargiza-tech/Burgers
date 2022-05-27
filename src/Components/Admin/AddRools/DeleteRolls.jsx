import React from 'react';
import {BASE_URL} from "../../../Constant";

const DeleteSushi = ({id, getRolls}) => {

    const deleteRolls = (id) => {
        const url = BASE_URL + `/rolls/${id}`;

        const options = {
            method: 'DELETE'      //heders body не пишем при удаление
        }

        fetch(url, options)
            .then((response) => getRolls())

    }

    return (
        <button onClick={() => {deleteRolls(id)}} className='btn btn-danger m-2'>Удалить
        </button>
    );
};

export default DeleteSushi;