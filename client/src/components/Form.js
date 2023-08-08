import React, {useState} from 'react'

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    
    const formulario = (evento) => {
        evento.preventDefault();
    }

    return (
        <div>
            <div>
                <form onSubmit={formulario}  >
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
                    
                </form>
                <button>
                    Create
                </button>
            </div>
            <br />
        </div>
    )
}

export default Form;