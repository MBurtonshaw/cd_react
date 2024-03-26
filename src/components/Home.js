import { React } from 'react';

export default function Home(props) {
    return (
        <div id='home_div' className='mt-3'>
            <h1>Home</h1>
            <div className='row align-items-start mt-5'>
                <a className='col' href='/about'>About</a>
                <a className='col' href='/contact'>Contact</a>
                <a className='col' href='/gallery'>Gallery</a>
                <a className='col' href='/menu'>Menu</a>
            </div>
        </div>
    );
}