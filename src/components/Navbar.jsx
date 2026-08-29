import React from 'react';
import { Link } from 'react-router-dom';
import ScrambleLink from './ScrambleLink';

const Navbar = () => {
    return (
        <nav className="font-tomorrow fixed top-2 right-0 p-4 text-white text-xl flex justify-around">
            <ScrambleLink
                to="/"
                text="Pseudo Studio Name"
                imageSrc="/assets/image/revlogo.png"
                imageAlt="Sheepygrey"
            />
        </nav>
    );
};

export default Navbar;
