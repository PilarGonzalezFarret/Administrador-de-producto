import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {

    const [ product, setProduct ] = useState ();
    const {id} = useParams();
    useEffect(() => {
        getOneProductById();
    }, [id]);
    const getOneProductById = async () => {
        try{ 
            let res = await axios.get ("http://127.0.0.1:8000/api/products/" + id);
            setProduct(res.data.product);
        } catch (err) 
            { console.log(err)}
    }

    return(
        <div>
            <h1> Your product detail: </h1>
            {product && <p> Title: { product.title } </p>}
            {product && <p> Price: { product.price } </p>}
            {product && <p> Title: { product.description } </p>}
        </div>
    )
}

export default Details;