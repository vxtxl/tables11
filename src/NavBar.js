import React from 'react';
import LogoWhite from './images/LogoWhite.svg'

const Navbar = () => {

    return (
        <nav style={{ position: 'fixed', top: 0, width: '100%', height: '100px', backgroundColor: '#071945', zIndex: 2 }}>
            <img src={LogoWhite} alt="Logo White" width={294} height={100} style={{ marginLeft: '100px', }} />
        </nav>
    );
}

export default Navbar;
