import React, {useState} from 'react'
import axios from "axios";

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState("");
    
    const formulario = async (evento) => {
        evento.preventDefault();

        // Crear un objeto con los datos del formulario
        const newProduct = {
            title: title,
            price: price,
            description: description
        };

        try {
            // Realizar una solicitud POST al servidor
            const response = await axios.post('http://127.0.0.1:8000/api/products/new', newProduct);
            console.log('New product created:', response.data);

            // Reiniciar los campos del formulario
            setTitle('');
            setPrice(null);
            setDescription('');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };    

    return (
        <div>
            <div>
                <form onSubmit={formulario} >
                    <div className="formGroup">
                        <label htmlFor="Title">Title: </label>
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
                        <label htmlFor="Description">Description: </label>
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