import { React } from 'react';

export default function Header(props) {
    return (
        <div id='header_div'>
            <div className='row align-items-start my-2'>
                <div className='col'>
                    <img className='nav_img' src='../img/CD_Logo_Horizontal.png' />
                </div>
                <div className='col'>
                    <div className='d-flex justify-content-around nav_bar'>
                        <a className='mx-auto nav_item nonchalant font-color-1' href='/menu'>MENU</a>
                        <a className='mx-auto nav_item nonchalant font-color-1' href='/videos'>VIDEOS</a>
                        <a className='mx-auto nav_item nonchalant font-color-1' href='/gallery'>GALLERY</a>
                        <a className='mx-auto nav_item nonchalant font-color-1' href='/contact'>CONTACT</a>
                        <a className='mx-auto nav_item nonchalant font-color-1' href='/takeout'>TAKEOUT</a>
                    </div>
                </div>
            </div>
            <div className='address_bar'>
                <p className='nav_text'>
                    2399 W. 11TH ST. CLEVELAND, OH 44113 ·
                    (216) 795-5657
                </p>
            </div>
        </div>
    );
}