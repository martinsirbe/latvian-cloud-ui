import React, { useEffect, useState } from 'react';
import { useJokes } from './useJokes';
import logo from '../../assets/potatoe_cloud.png'
const Joke: React.FC = () => {
    const [joke, setJoke] = useState<string | null>(null);
    const { data } = useJokes();

    useEffect(() => {
        if (data) {
            const randomIndex = Math.floor(Math.random() * data.jokes.length);
            setJoke(data.jokes[randomIndex]);
        }
    }, [data]);

    if (!joke) {
        return <div>Loading...</div>;
    }

    const isSmallScreen = window.innerWidth < 600;

    const imageStyle: React.CSSProperties = {
        width: isSmallScreen ? '70%' : '35%',
        height: 'auto',
        marginTop: isSmallScreen ? '-150px' : '-65px'
    }

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                gap: '10px'
            }}>
                <ConfettiExplosion />
                <img src={logo} alt="Potatoe Cloud" style={imageStyle}/>
                <div style={{fontFamily: "'Oswald', sans-serif", fontSize: '24px', color: '#554924'}}>{joke}</div>
            </div>
            <a style={{
                flexShrink: 0,
                width: '100%',
                textAlign: 'center',
                padding: '10px 0',
                fontSize: '10px',
                color: '#b8901d'
            }}
                href="https://buy.a.potato.for.this.latvianguy.com">buy.a.potato.for.this.latvianguy.com
            </a>
        </>
);
};

import ConfettiExplosion from "react-confetti-explosion";

export default Joke;