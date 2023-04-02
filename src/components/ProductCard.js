import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showProductDetail = (id) => {
        navigate(`/product/${id}`);
    };
    return (

        <div className="card" onClick={() => showProductDetail(item.id)}>
            <img src={item?.img} />
            <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div className="new-product">{item?.new ? "new item" : ""}</div>
        </div>


    )
}

export default ProductCard