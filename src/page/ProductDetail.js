import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = ({ item }) => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <Container>
            <Row>
                <Col className='product-img'>
                    <img src={product?.img} /></Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>
                </Col>
            </Row>

        </Container>

    )
}

export default ProductDetail