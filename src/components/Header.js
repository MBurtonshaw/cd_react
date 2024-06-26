import { React } from 'react';

export default function Header(props) {
    function color_coded() {
        if (window.location.pathname === '/menu') {
            return (
                <div className='d-flex justify-content-end nav_bar'>
                    <a className='px-2 nav_item nonchalant font-color-2' href='/menu'>MENU</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/videos'>VIDEOS</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/gallery'>GALLERY</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/contact'>CONTACT</a>
                    <a className='px-2 nav_item nonchalant font-color-1' target='_blank' href='https://app.upserve.com/s/cloak-and-dagger-cocktail-lounge-lakewood'>TAKEOUT</a>
                </div>
            );
        }
        if (window.location.pathname === '/videos') {
            return (
                <div className='d-flex justify-content-end nav_bar'>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/menu'>MENU</a>
                    <a className='px-2 nav_item nonchalant font-color-2' href='/videos'>VIDEOS</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/gallery'>GALLERY</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/contact'>CONTACT</a>
                    <a className='px-2 nav_item nonchalant font-color-1' target='_blank' href='https://app.upserve.com/s/cloak-and-dagger-cocktail-lounge-lakewood'>TAKEOUT</a>
                </div>
            )
        }
        if (window.location.pathname === '/gallery') {
            return (
                <div className='d-flex justify-content-end nav_bar'>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/menu'>MENU</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/videos'>VIDEOS</a>
                    <a className='px-2 nav_item nonchalant font-color-2' href='/gallery'>GALLERY</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/contact'>CONTACT</a>
                    <a className='px-2 nav_item nonchalant font-color-1' target='_blank' href='https://app.upserve.com/s/cloak-and-dagger-cocktail-lounge-lakewood'>TAKEOUT</a>
                </div>
            )
        }
        if (window.location.pathname === '/contact') {
            return (
                <div className='d-flex justify-content-end nav_bar'>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/menu'>MENU</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/videos'>VIDEOS</a>
                    <a className='px-2 nav_item nonchalant font-color-1' href='/gallery'>GALLERY</a>
                    <a className='px-2 nav_item nonchalant font-color-2' href='/contact'>CONTACT</a>
                    <a className='px-2 nav_item nonchalant font-color-1' target='_blank' href='https://app.upserve.com/s/cloak-and-dagger-cocktail-lounge-lakewood'>TAKEOUT</a>
                </div>
            )
        }
        return (
            <div className='d-flex justify-content-end nav_bar'>
                <a className='px-2 nav_item nonchalant font-color-1' href='/menu'>MENU</a>
                <a className='px-2 nav_item nonchalant font-color-1' href='/videos'>VIDEOS</a>
                <a className='px-2 nav_item nonchalant font-color-1' href='/gallery'>GALLERY</a>
                <a className='px-2 nav_item nonchalant font-color-1' href='/contact'>CONTACT</a>
                <a className='px-2 nav_item nonchalant font-color-1' target='_blank' href='https://app.upserve.com/s/cloak-and-dagger-cocktail-lounge-lakewood'>TAKEOUT</a>
            </div>
        )
    }
    if (window.innerWidth < 992) {
        return (
            <div id='header_div'>
                <div className='row my-3'>
                    <div className='col-7 my-1 mx-3'>
                        <a href='/'><img className='' width='100%' src='../img/CD_Logo_Horizontal.png' /></a>
                    </div>
                    <div className='col-4'>
                        <div className="dropdown">

                            <img width='50%' height='50%' className='m-auto dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false" src='../img/mobile_menu_icon.png' />

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='/menu'>Menu</a></li>
                                <li><a className="dropdown-item" href='/videos'>Videos</a></li>
                                <li><a className="dropdown-item" href='/gallery'>Gallery</a></li>
                                <li><a className="dropdown-item" href='/contact'>Contact</a></li>
                                <li><a className="dropdown-item" href='https://app.upserve.com/s/cloak-and-dagger-cocktail-lounge-lakewood'>Takeout</a></li>
                            </ul>

                        </div>


                    </div>
                </div>
                <div className='address_bar'>
                    <p className='w-75 m-auto px-3'>
                        2399 W. 11TH ST. CLEVELAND, OH 44113 ·
                        (216) 795-5657
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div id='header_div'>
            <div className='row my-2 w-100 mx-auto'>
                <div className='col'>
                    <a className='' href='/'><img className='nav_img p-1' src='../img/CD_Logo_Horizontal.png' /></a>
                </div>
                <div className='col'>
                    {color_coded()}
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