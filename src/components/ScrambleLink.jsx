import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ScrambleLink = ({ to, text, imageSrc, imageAlt }) => {
    const scrambleText = (text) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    };

    const [displayText, setDisplayText] = useState(text);
    const [intervalId, setIntervalId] = useState(null);
    const textAlteringTime = 75;
    const textRevertingTime = 5;

    const handleMouseEnter = () => {
        let iterations = 0;
        const id = setInterval(() => {
            setDisplayText(scrambleText(text));
            iterations++;
            if (iterations > textRevertingTime) {
                clearInterval(id);
                setDisplayText(text);
            }
        }, textAlteringTime);
        setIntervalId(id);
    };

    const handleMouseLeave = () => {
        clearInterval(intervalId);
        setDisplayText(text);
    };

    return (
        <Link 
            to={to} 
            className="mr-4 inline-flex items-center gap-3 hover:text-gray-400 transition duration-200"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <span>{displayText}</span>
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={imageAlt ?? ''}
                    className="h-8 w-8 object-contain"
                />
            ) : null}
        </Link>
    );
};

export default ScrambleLink
