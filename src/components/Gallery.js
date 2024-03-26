import { React } from 'react';

export default function Gallery(props) {
    return (
        <div id='gallery_div' className='mt-3'>
            <h1>Gallery</h1>
            <div className='row align-items-start mt-5'>
                <a className='col' href='/about'>About</a>
                <a className='col' href='/contact'>Contact</a>
                <a className='col' href='/'>Home</a>
                <a className='col' href='/menu'>Menu</a>
            </div>
        </div>
    );
}