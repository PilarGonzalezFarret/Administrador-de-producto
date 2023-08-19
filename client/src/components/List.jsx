import React from "react";
import { Link } from "react-router-dom";

const List = props => {
    console.log(props); //const { products } = props; //Este products de acá = products(de color morado) en Main.js
    return (
        <div>
            { props.products.map((product, index) => (
                <p key={index}> 
                    <Link to={`/products/${product._id}`}> { product.title } </Link>
                </p>
            ))}
        </div>
    );
};

export default List;

