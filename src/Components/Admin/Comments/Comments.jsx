import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../../Constant";
import styles from "../AllProducts.module.css";
import DeleteSalads from "../AddSalads/DeleteSalads";
import DeleteComments from "./DeleteComments";

const Comments = () => {
    const [comments, setComments] = useState([])

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("")
    const [id, setId] = useState("")


    const getComments = () => {
        const url = BASE_URL + '/comments';
        fetch(url)
            .then((response) => response.json())
            .then((data) => setComments(data))

    }


    useEffect(() => {
        getComments()
    }, [])

    const setEditComments = (data) => {
        setName(data.name)
        setFeedback(data.feedback)
        setSurname(data.surname)
        setNumber(data.number)
        setEmail(data.email)
        setId(data.id)

    }


    const editSalads = (id) => {

        const url = BASE_URL + `/comments/${id}`

        fetch(url)
            .then((response) => response.json())
            .then(data => setEditComments(data))

    }

    const editSave = () => {
        const url = BASE_URL + `/comments/${id}`

        const comments = {
            "id": id,
            "name": name,
            "email": email,
            "surname": surname,
            "feedback": feedback,
            "number": number
        }

        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comments)

        }

        fetch(url, options)
            .then((response) => response.json())
            .then(data => getComments())


    }


    return (
        <div>
            <div className="container p-5">
                <button id="go" className="float-end btn btn-success mt-2" data-bs-toggle="modal"
                        data-bs-target="#add-modal">Добавить +
                </button>
                <table className="table table-hover text-black w-100 bg-light mt-5">
                    <thead>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">img</th>
                    <th scope="col">decs</th>
                    <th scope="col">sum</th>
                    </thead>
                    <tbody>
                    {
                        comments.map((item) => {
                            return <>
                                <tr>
                                    <td>{item.surname}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td className="w-25">{item.feedback}</td>
                                    <td>
                                        <button className='btn btn-warning m-2' id="go" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal" onClick={() => {
                                            editSalads(item.id)
                                        }}>Редактировать
                                        </button>

                                    </td>
                                    <td>
                                        <DeleteComments id={item.id} getComments={getComments}/>
                                    </td>
                                </tr>

                            </>
                        })
                    }


                    </tbody>
                </table>

            </div>

            {/*Add Modal*/}


            {/*Edit Modal*/}
            <div>
                <div className="modal fade" id="edit-modal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Редактирование</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>

                            <div className="modal-body">
                                <form action="javascript:void(0)">
                                    <h4>Информация о продукте</h4>
                                    <div className="row mt-2">
                                        <div className="col-6 w-50">
                                            <input onChange={e => setName(e.target.value)} value={name}
                                                   type="text" className="form-control m-2"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setSurname(e.target.value)} value={surname}
                                                   type="text" className="form-control m-2"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setFeedback(e.target.value)} value={feedback}
                                                   type="text" className="form-control m-2"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setNumber(e.target.value)} value={number}
                                                   type="text" className="form-control m-2"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setEmail(e.target.value)} value={email}
                                                   type="text" className="form-control m-2"/>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Отменить
                                        </button>
                                        <button type="submit" id="add-btn" data-bs-dismiss="modal"
                                                className="btn btn-primary" onClick={editSave}>Добавить
                                        </button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Comments;