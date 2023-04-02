import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
    let productList = useSelector(state => state.product.productList);
    const [query, setQuery] = useSearchParams("");
    const dispatch = useDispatch();


    const getProducts = async () => {
        try {
            let searchQuery = query.get('q') || "";
            dispatch(productAction.getProducts(searchQuery));

        } catch (err) {
            console.log(err)
        }


    }
    useEffect(() => {
        getProducts();
    }, [query])
    return (

        < div >
            <Container>

                <Row>
                    {productList.map((item) => (
                        <Col lg={3} key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>


            </Container>




        </div >
    )
}

export default ProductAll