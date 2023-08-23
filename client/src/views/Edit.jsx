import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = props => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [description, setDescription] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/' + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
    }, [])
    const updateExistingProduct = e => {
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/products/update/' + id, {
            title,
            price,
            description
        })
            .then(res => navigate('/products/'+id));
    }

    const deleteAnExistingProduct = e => {
        e.preventDefault();
        axios.delete('http://127.0.0.1:8000/api/products/delete/' + id, {
            title,
            price,
            description
        })
            .then(res => navigate('/'));
    }
    return (
        <div>
            <h2>Update the product</h2>
            <form onSubmit={updateExistingProduct}>
                <div>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} 
                    placeholder= { title}/>
                </div> 
                <p>
                    <label>price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                
                    <button type="submit" >Edit</button>
                
                    <button type='button' onClick={deleteAnExistingProduct}>Delete</button>
                
                <Link to='/'>
                    <p>back to home</p>
                </Link>
            </form>
        </div>
    )
}

export default Edit;