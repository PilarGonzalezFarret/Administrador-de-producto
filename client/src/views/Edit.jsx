import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Edit = props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])
    const updateExistingProduct = e => {
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update the product</h1>
            <form onSubmit={updateExistingProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
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
                <input type="submit" />

                <Link to='/'>
                    <p>back to home</p>
                </Link>
            </form>
        </div>
    )
}

export default Edit;