import React from 'react';
import {BASE_URL} from "../../../Constant";
import {toast} from "react-toastify";

const DeletePizza = ({id, getPizza}) => {

    const deletePizza = (id) => {
        const url = BASE_URL + `/pizza/${id}`;

        const options = {
            method: 'DELETE'      //heders body не пишем при удаление
        }

        fetch(url, options)
            .then((response) => getPizza())


    }


    return (
        <div>
            <button onClick={() => {deletePizza(id)}} className='btn btn-danger m-2'>Удалить
            </button>
        </div>
    );
};

export default DeletePizza;