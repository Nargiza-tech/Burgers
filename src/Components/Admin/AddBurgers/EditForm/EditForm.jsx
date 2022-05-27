import React, {useState} from 'react';


const EditForm = ({item}) => {
    // const [id, setId] = useState()
    //
    // burger.map((item) =>
    //     setId(item.id)
    //
    // )
    // console.log(id)
    //
    //
    // console.log(burger.id)
    //





    return (
        <div>
            <div className="modal-body">
                <form  action="javascript:void(0)">
                    <h4>Информация о продукте</h4>
                    <div className="row mt-2">

                                <div className="col-6 w-50">
                                    <input value={item.title} type="text" className="form-control m-2"/>
                                </div>
                                <div className="col-6 w-50">
                                    <input value={item.desc}   type="text" className="form-control m-2"/>
                                </div>
                                <div className="col-6 w-50">
                                    <input value={item.price}  type="text" className="form-control m-2"/>
                                </div>
                                <div className="col-6 w-50">
                                    <input value={item.ing} type="text" className="form-control m-2"/>
                                </div>

                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отменить</button>
                        <button type="button" id="add-btn" data-bs-dismiss="modal" className="btn btn-primary">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditForm;