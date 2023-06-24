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

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        gap: '10px'
    }}>
        <img src={logo} alt="Potatoe Cloud" style={{width: '35%', height: 'auto', marginTop: '-65px'}} />
        <div style={{fontFamily: "'Oswald', sans-serif", fontSize: '24px', color: '#554924'}}>{joke}</div>
    </div>;
};

export default Joke;