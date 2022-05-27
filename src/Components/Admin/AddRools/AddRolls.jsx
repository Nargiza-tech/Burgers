import React, {useEffect, useState} from 'react';
import styles from "../AllProducts.module.css";
import {BASE_URL} from "../../../Constant";
import DeleteRolls from "./DeleteRolls";

const AddRolls = () => {

    const [rolls, setRolls] = useState([]);

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");


    const getRolls = () => {
        const url = BASE_URL + '/rolls';

        fetch(url)
            .then((response) => response.json())
            .then(data => setRolls(data))
    }

    useEffect(() => {
        getRolls()
    },[])


    const addRolls = (event) => {
        let value = event.target.value
        console.log(value)
        const url = BASE_URL + '/rolls';

        const rolls = {
            "id": id,
            "img": img,
            "title": name,
            "desc": desc,
            "price": price
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rolls)
        }

        fetch(url,options)
            .then((response) => response.json())
            .then(data => getRolls())
    }

    const setEditRolls = (data) => {
        setName(data.title)
        setDesc(data.desc)
        setImg(data.img)
        setPrice(data.price)
        setId(data.id)

    }


    const editRolls = (id) => {

        const url = BASE_URL + `/rolls/${id}`

        fetch(url)
            .then((response) => response.json())
            .then(data => setEditRolls(data))

    }

    const editSave = () => {
        const url = BASE_URL + `/rolls/${id}`

        const rolls = {
            "id": id,
            "img": img,
            "title": name,
            "desc": desc,
            "price": price
        }

        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rolls)

        }

        fetch(url,options)
            .then((response) => response.json())
            .then(data => getRolls())


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
                        rolls.map((item) => {
                            return <> <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td><img className={styles.burImg} src={item.img} alt=""/></td>
                                <td className="w-25">{item.desc}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className='btn btn-warning m-2' id="go" data-bs-toggle="modal"
                                            data-bs-target="#edit-modal" onClick={() => {editRolls(item.id)}}>Редактировать
                                    </button>
                                </td>
                                <td>
                                    <DeleteRolls id={item.id} getRolls={getRolls}/>
                                </td>
                            </tr>

                            </>
                        })
                    }


                    </tbody>
                </table>

            </div>

            {/*Add Modal*/}

            <div>


                <div className="modal fade" id="add-modal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Добавить бургер</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <form action="javascript:void(0)">
                                    <h4>Информация о продукте</h4>
                                    <div className="row mt-2">
                                        <div className="col-6 w-50">
                                            <input onChange={e => setName(e.target.value)} type="text"
                                                   className="form-control m-2" name="lastname" id="lastname"
                                                   placeholder="Название продукта"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setImg(e.target.value)} type="text"
                                                   className="form-control m-2" name="name" id="name"
                                                   placeholder="Картинка продукта"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setDesc(e.target.value)} type="text"
                                                   className="form-control m-2" name="name" id="name"
                                                   placeholder="Описание продукта"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setPrice(e.target.value)} type="text"
                                                   className="form-control m-2" name="name" id="name"
                                                   placeholder="Цена продукта"/>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Отменить
                                        </button>
                                        <button type="button" id="add-btn" data-bs-dismiss="modal"
                                                className="btn btn-primary" onClick={addRolls}>Добавить
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



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
                                            <input onChange={e => setImg(e.target.value)} value={img}
                                                   type="text" className="form-control m-2"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setDesc(e.target.value)} value={desc}
                                                   type="text" className="form-control m-2"/>
                                        </div>
                                        <div className="col-6 w-50">
                                            <input onChange={e => setPrice(e.target.value)} value={price}
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

export default AddRolls;