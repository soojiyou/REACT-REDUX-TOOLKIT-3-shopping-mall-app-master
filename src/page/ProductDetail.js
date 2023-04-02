import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';


const ProductDetail = ({ item }) => {
    // const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    let { id } = useParams();
    let productSelected = useSelector(state => state.product.selectedItem);
    console.log(productSelected, { id });

    const getProductInfo = async () => {
        dispatch(productAction.getProductDetail(id));
    }

    // useEffect(() => {
    //     dispatch(productAction.getProductDetail({ id }));
    // }, [dispatch, id])

    useEffect(() => {
        getProductInfo()
    }, [])



    return (
        <Container>
            <Row>
                <Col className='product-img'>
                    <img src={productSelected?.img} /></Col>
                <Col>
                    <div>{productSelected?.title}</div>
                    <div>{productSelected?.price}</div>
                    <div className="choice">
                        {productSelected.choice ? "Conscious choice" : ""}
                    </div>
                    <Dropdown className="drop-down">
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            Select Size
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {productSelected?.size?.length > 0 &&
                                productSelected?.size.map((item) => (
                                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                                ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className="add-button">
                        add
                    </Button>
                </Col>
            </Row>

        </Container>

    )
}

export default ProductDetail