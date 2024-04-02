import { React, useState, useEffect } from 'react';

export default function Menu(props) {
    let [count, setCount] = useState(0);
    let [menu, setMenu] = useState([]);

    async function getData() {
        setMenu([
            "../img/menu_png/CD_Menu_Spreads_1-11-1.png",
            "../img/menu_png/CD_Menu_Spreads_1-11-2.png",
            "../img/menu_png/CD_Menu_Spreads_1-11-3.png",
            "../img/menu_png/CD_Menu_Spreads_1-11-4.png",
            "../img/menu_png/CD_Menu_Spreads_1-11-5.png",
            "../img/menu_png/CD_Menu_Spreads_1-11-6.png",
            "../img/menu_png/CD_Menu_Spreads_1-11-7.png"
        ]);
    }

    useEffect(() => { getData() }, [setMenu]);

    function returner() {
        if (count === 0 || count === 6) {
            if (window.innerWidth < 992) {
                return (
                    <a href={menu[count]}><img className='menu_page_mobile' src={menu[count]} /></a>
                );
            }
            return (
                <a href={menu[count]}><img className='menu_page_bookend' src={menu[count]} /></a>
            );
        } else {
            if (window.innerWidth < 992) {
                return (
                    <a href={menu[count]}><img className='menu_page_mobile' src={menu[count]} /></a>
                );
            }
            return (
                <a href={menu[count]}><img className='menu_page' src={menu[count]} /></a>
            );
        }
        
    }

    if (count === -1) {
        setCount(6);
    }

    if (count === 7) {
        setCount(0);
    }

    if (window.innerWidth < 992) {
        return (
            <div className='w-100 m-auto'>
                <div className='p-2'>
                    <img onClick={() => setCount(count - 1)} src='../img/menu_chevron_left.png'></img>
                    {returner()}
                    <img onClick={() => setCount(count + 1)} src='../img/menu_chevron_right.png'></img>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className='p-2'>
                <img onClick={() => setCount(count - 1)} src='../img/menu_chevron_left.png'></img>
                {returner()}
                <img onClick={() => setCount(count + 1)} src='../img/menu_chevron_right.png'></img>
            </div>
        </div>
    );
}