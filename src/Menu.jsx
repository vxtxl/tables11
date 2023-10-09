import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles.css';
import menuButton from './menuButton.png'




function Menu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="wide-button" onClick={handleShow} style={{ position: 'fixed', top: '120px' }}>
                <div className="d-flex flex-column">
                    <img src={menuButton} alt='button' ></img>
                    <img src={menuButton} alt='button' style={{ marginTop: '1px', marginBottom: '1px' }}></img>
                    <img src={menuButton} alt='button' ></img>

                </div>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex flex-column">
                        <button className='button-1'></button>
                        <button className='button-1'></button>
                        <button className='button-1'></button>
                        <button className='button-1'></button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Menu;