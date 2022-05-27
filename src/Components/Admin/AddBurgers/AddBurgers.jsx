import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../../Constant";
import styles from '../AllProducts.module.css'
import {toast} from "react-toastify";

const AddBurgers = () => {
    const [burger, setBurgers] = useState([]);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");


    const getBurgers = () => {
        const url = BASE_URL + '/burgers';
        fetch(url)
            .then((response) => response.json())
            .then((data) => setBurgers(data))

    }

    let addBurgers = (event) => {
        let value = event.target.value
        console.log(value)
        const url = BASE_URL + '/burgers';

        const burgers = {
            "img": img,
            "title": name,
            "desc": desc,
            "price": price,
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(burgers)
        }

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => getBurgers())
    }


    useEffect(() => {
        getBurgers()
    }, [])


    const deleteBurg = (id) => {
        const url = BASE_URL + `/burgers/${id}`;

        const options = {
            method: 'DELETE'      //heders body не пишем при удаление
        }

        fetch(url, options)
            .then((response) => getBurgers())


    }


    const setEditBurg = (data) => {
        setName(data.title)
        setImg(data.img)
        setDesc(data.desc)
        setPrice(data.price)
        setId(data.id)
    }


    const editProduct = (id) => {
        const url = BASE_URL + `/burgers/${id}`;
        console.log(url)

        fetch(url)
            .then((response) => response.json())
            .then((data) => setEditBurg(data))

    }

    const editSave = () => {
        const url = BASE_URL + `/burgers/${id}`;
        const burgers = {
            "id": id,
            "img": img,
            "title": name,
            "desc": desc,
            "price": price,
        }

        console.log(burgers)

        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(burgers)
        }

        fetch(url, options)
            .then((response) => getBurgers())
    }


    return (
        <>
            <div className="container p-5">
                <button id="go" className="float-endbtn btn-success mt-2" data-bs-toggle="modal"
                        data-bs-target="#add-modal">Добавить +
                </button>
                <table className="table table-hover text-black w-100 bg-light mt-5">
                    <thead>
                    <th scope="col">id</th>
                    <th scope="col">img</th>
                    <th scope="col">name</th>
                    <th scope="col">decs</th>
                    <th scope="col">sum</th>
                    </thead>
                    <tbody>
                    {
                        burger.map((item, id) => {

                            return <tr>
                                <td>{item.id}</td>
                                <td><img className={styles.burImg} src={item.img} alt=""/></td>
                                <td>{item.title}</td>
                                <td className="w-25">{item.desc}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className='btn btn-warning m-2' id="go" data-bs-toggle="modal"
                                            data-bs-target="#edit-modal" onClick={() => {
                                        editProduct(item.id)
                                    }}>Редактировать
                                    </button>
                                    <button className='btn btn-danger' onClick={() => {
                                        deleteBurg(item.id)
                                    }}>Удалить
                                    </button>
                                </td>
                            </tr>
                        })
                    }

                    </tbody>
                </table>

            </div>
            {/*AddModal*/}

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
                                            className="btn btn-primary" onClick={addBurgers}>Добавить
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/*EditModal*/}

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


        </>
    );
};

export default AddBurgers;