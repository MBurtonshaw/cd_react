import { React } from 'react';
import Header from './Header';
import Carousel from './Carousel';

export default function Home(props) {
    return (
        <div id='home_div' className='mt-3'>
            <Header />
            <Carousel />
            <div>
                <h1 className='font-color-2'>Prologue</h1>
                <p className='font-color-1'>A cocktail lounge with a focus on hospitality and craft located next to Lincoln Park in the historic Tremont neightborhood of Cleveland.</p>
                <p className='font-color-1'>Tues - Sun <span className='font-color-2'>4pm - 11pm</span></p>
            </div>
        </div>
    );
}