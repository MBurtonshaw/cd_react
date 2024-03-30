import { React } from 'react';

export default function Body(props) {
    return (
        <div id='body_div' className='w-100'>
            <div className='row my-4'>
                <div id='body_paragraphs' className='col'>
                    <img width='265' height='auto' src='../img/eat_drink.png' />
                    <p className='body_text'>A journey through the Tales of Life & Death; our debut menu.</p>
                    <div className='w-100 mt-4'>
                        <div className='button_div'>
                            <a className='nonchalant black_link' href='/menu'><h4 className='button_h4'>VIEW MENU BOOK</h4></a>
                        </div>
                    </div>
                </div>
                <a href='/menu' className='col'>
                    <img width='100%' src='../img/MenuImage_1.png' />
                </a>
            </div>
            <div className='row my-4'>
                <a className='col' width='auto' href='/gallery'>
                    <img width='100%' src='../img/GalleryImage_1.png' />
                </a>
                <div id='body_paragraphs' className='col'>
                    <img width='300' src='../img/gallery.png' />
                    <p className='body_text'>A look inside Cloak & Dagger. All videos and photos captured by Josh Dobay.</p>
                    <div className='w-100 mt-4'>
                        <div className='button_div'>
                            <a className='nonchalant black_link' href='/gallery'><h4 className='button_h4'>VIEW GALLERY</h4></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}