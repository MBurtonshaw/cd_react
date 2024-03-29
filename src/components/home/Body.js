import { React } from 'react';

export default function Body(props) {
    return (
        <div id='body_div' className='w-100'>
            <div className='row my-4'>
            <div id='eat_drink' className='col'>
                <img width='265' height='auto' src='../img/eat_drink.png' />
                <div className='w-100 mt-4'>
                <button className=' row px-5 mx-auto' type='button'><a className='nonchalant' href='/menu'>View Menu Book</a></button>
                </div>
            </div>
                <img className='col' width='750' height='500' src='../img/MenuImage_1.png' />
            </div>
            <div className='row my-4'>
                <img className='col' width='750' height='500' src='../img/GalleryImage_1.png' />
                <div id='body_gallery' className='col'>
                    <img width='300' src='../img/gallery.png' />
                    <div className='w-100 mt-4'>
                    <button className='row px-5 mx-auto' type='button'><a className='nonchalant' href='/gallery'>View Gallery</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}