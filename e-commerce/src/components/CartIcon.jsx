import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Button,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Cart from '../components/cart/Cart'

import CartContext from '../context/CartContext';

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    let cartItems = cart && cart.total_unique_items > 0 ? cart.total_unique_items : '';
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1em', marginBottom: '1em', height: '80px' }} className="cartNav">
            <NavbarBrand><h1>cart items: </h1></NavbarBrand>
            <Navbar style={{ width: '100px', height: '110px' }}>
                <Button onClick={toggleModal} color="primary">
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    <span className="icon-button-text-right">{cartItems}</span>
                </Button>
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Cart</ModalHeader>
                    <ModalBody>
                        <Cart />
                    </ModalBody>
                </Modal>
            </Navbar>
        </div>
    )
}

export default CartIcon;