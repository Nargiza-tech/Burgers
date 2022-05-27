import React from 'react';
import {BASE_URL} from "../../../Constant";

const DeleteDesserts = ({id, getDesserts}) => {

    const deleteDesserts = (id) => {
        const url = BASE_URL + `/desserts/${id}`;

        const options = {
            method: 'DELETE'
        }

        fetch(url,options)
            .then((response) => getDesserts())
    }

    return (
        <div>
            <button onClick={() => {deleteDesserts(id)}} className='btn btn-danger m-2'>Удалить
            </button>
        </div>
    );
};

export default DeleteDesserts;