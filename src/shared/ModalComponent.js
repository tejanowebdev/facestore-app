import React, { useEffect, useState, } from 'react'
import { Modal, Button, Row, Col, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatDate } from '../utils/stringHelper';

function ModalComponent(props) {
    const {show, setShowModal, product} = props

    const [faceSize, setFaceSize] =  useState(0)

    useEffect(() => {
        setFaceSize(product.size)
    }, [product])

    const handleClose = () => {
        setShowModal(false)
    }

    const increaseSize = () => {
        if(faceSize < 100){
            setFaceSize(prev => prev + 5)
        }
    }

    const decreaseSize = () => {
        if(faceSize > 10){
            setFaceSize(prev => prev - 5)
        }
    }

    // console.log("product: ", product)

    let dateAdded = formatDate(new Date(product.date_added))

    return (
        <Modal 
            show={show} 
            onHide={handleClose}
            size="lg"
            centered
        >
            <Modal.Header closeButton className="pb-0">
               <h4>{product.name}</h4>
            </Modal.Header>
           
            <Modal.Body className="pt-1"> 
                <Col className="asc-size pl-0">                    
                    <p className="mb-0 d-inline-block align-middle">Size: <span className="font-weight-bold">{faceSize}</span></p>   
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button  variant="secondary" className="font-weight-bold mx-1" onClick={decreaseSize}>-</Button>
                        <Button  variant="secondary" className="" onClick={increaseSize}>+</Button> 
                    </ButtonGroup>
                </Col>
                <Modal.Title className="text-center pb-3" style={{fontSize:`${faceSize}px`}}>{product.ascii}</Modal.Title>
            </Modal.Body>

            <Modal.Footer className="text-holder py-0">
                <Row className="w-100 align-items-center">
                    <Col className="p-0 text-desc">
                        <p className="mb-0">Id: {product.id}</p>   
                        <p className="mb-0">Added: {dateAdded}</p>
                    </Col>
                    <Col><Modal.Title className="text-warning text-center modal-price">{`$${product.price}`}</Modal.Title></Col>
                    <Col className="text-right pr-0">
                        <Button variant="warning" className="font-weight-bold" onClick={handleClose}>
                            BUY NOW!
                        </Button>
                    </Col>
                </Row>
                
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent
