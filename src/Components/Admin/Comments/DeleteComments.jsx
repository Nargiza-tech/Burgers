import React from 'react';
import {BASE_URL} from "../../../Constant";

const DeleteComments = ({id, getComments}) => {
    const deleteComments = (id) => {
        const url = BASE_URL + `/comments/${id}`;

        const option = {
            method: 'DELETE'
        }


        fetch(url, option)
            .then((response) => getComments())
    }

    return (
        <div>
            <button className='btn btn-danger' onClick={() => {deleteComments(id)}}>Удалить
            </button>
        </div>
    );
};

export default DeleteComments;