import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center w-2/3 mx-auto items-center'>
                <Player
                    autoplay
                    loop
                    src='https://assets9.lottiefiles.com/packages/lf20_suhe7qtm.json'></Player>
                <Link to="/" className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2">Back TO HOME</Link>
            </div>
        </div>
    );
};

export default ErrorPage;