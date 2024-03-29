import { React } from 'react';

export default function Contact(props) {
    return (
        <div id='contact_div' className='mt-3'>
            <h1>Contact</h1>
            <div className='row align-items-start mt-5'>
                <a className='col' href='/about'>About</a>
                <a className='col' href='/'>Home</a>
                <a className='col' href='/gallery'>Gallery</a>
                <a className='col' href='/menu'>Menu</a>
            </div>
        </div>
    );
}