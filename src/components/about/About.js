import { React } from 'react';

export default function About(props) {
    return (
        <div id='about_div' className='mt-3'>
            <h1>About</h1>
            <div className='row align-items-start mt-5'>
            <a className='col' href='/'>Home</a>
            <a className='col' href='/contact'>Contact</a>
            <a className='col' href='/gallery'>Gallery</a>
            <a className='col' href='/menu'>Menu</a>
            </div>
        </div>
    );
}