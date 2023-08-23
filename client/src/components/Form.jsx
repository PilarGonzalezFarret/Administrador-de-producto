import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const onSubmitHandlerForm = (e) => {   //aquí se declara la función que maneja eventos onSubmit, como el botón de más abajo.
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/products/new/", {title, price, description})
        .then((res)=> {                        //Después de .then viene lo que ocurre cuando todo sale bien. 
            console.log("Response: ", res)     //Se imprime la respuesta de lo que se acaba de ingresar. El servidor me lo devuelve en forma de respuesta.
            const id = res.data.product._id;   //Se declara variable id, para ser usada en la siguiente línea. _id está dentro de product, que está dentro de data, que está dentro de res. Eso se ve en la consola del browser. 
            navigate('/products/'+id)          //.then, vamos a esa ruta.
            })                                       

        .catch((err)=> console.log("Error: ", err));
    };   

    return (
        <div>
            <div>
                <form onSubmit={onSubmitHandlerForm} >   {/* Al establecer onSubmit={onSubmitHandlerForm}, se está indicando que onSubmitHandlerForm es la función que se ejecutará cuando el formulario se envíe */}  
                    <div className="formGroup">
                        <label htmlFor="title">Title: </label>
                        <input onChange={(e) => setTitle (e.target.value) } type="text" id="title"/>
                    </div>
                    {(title.length < 2 && title !== "") 
                    ? <p className = 'littleText'>Title must be at least 2 character</p> 
                    : null}

                    <div className="formGroup">
                        <label htmlFor="Price">Price: </label>
                        <input onChange={(e) => {
                            const inputPrice = Number(e.target.value);
                            setPrice(inputPrice > 0 ? inputPrice : 0);
                        }}
                        type="number" id="price" min="0"
                        />
                    </div>
                    {price === 0 && <p className='littleText'>Price must be greater than zero</p>}

                    
                    <div className="formGroup">
                        <label htmlFor="description">Description: </label>
                        <input onChange={(e) => setDescription (e.target.value) } type="text" id="description"/>
                    </div>
                        {(description.length < 5 && description !== "") 
                        ? <p className = 'littleText'>Description must be at least 5 character</p> 
                        : null}


                            <button type="submit" >   {/* Este botón "Create" activa la función onSubmitHandlerForm, porque la función sirve para manejar el evento onSubmit, y el botón tiene el type=submit. */}
                                Create
                            </button>       


                </form>
            </div>
            <br />
        </div>
    )
}

export default Form;