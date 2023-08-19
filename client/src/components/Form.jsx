import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const onSubmitHandlerForm = (evento) => {
        evento.preventDefault();
        axios.post("http://127.0.0.1:8000/api/products/new/", {title, price, description})
        .then((res)=> {
            console.log("Response: ", res)
            navigate('/Details')
            })

        .catch((err)=> console.log("Error: ", err));
    };   

    return (
        <div>
            <div>
                <form onSubmit={onSubmitHandlerForm} >
                    <div className="formGroup">
                        <label htmlFor="title">Title: </label>
                        <input onChange={(evento) => setTitle (evento.target.value) } type="text" id="title"/>
                    </div>
                    {(title.length < 2 && title !== "") 
                    ? <p className = 'littleText'>Title must be at least 2 character</p> 
                    : null}

                    <div className="formGroup">
                        <label htmlFor="Price">Price: </label>
                        <input onChange={(evento) => {
                            const inputPrice = Number(evento.target.value);
                            setPrice(inputPrice > 0 ? inputPrice : 0);
                        }}
                        type="number" id="price" min="0"
                        />
                    </div>
                    {price === 0 && <p className='littleText'>Price must be greater than zero</p>}

                    
                    <div className="formGroup">
                        <label htmlFor="description">Description: </label>
                        <input onChange={(evento) => setDescription (evento.target.value) } type="text" id="description"/>
                    </div>
                        {(description.length < 5 && description !== "") 
                        ? <p className = 'littleText'>Description must be at least 5 character</p> 
                        : null}


                    <button type="submit">
                        Create
                    </button>

                </form>

            </div>
            <br />
        </div>
    )
}

export default Form;