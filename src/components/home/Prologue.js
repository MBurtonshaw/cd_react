import { React } from 'react';

export default function Prologue(props) {
    return (
        <div id='main_text' className='my-5'>
            <img id='prologue_text' src='../img/prologue.png' />
            <p className='font-color-1 mt-5 big_text'>A cocktail lounge with a focus on hospitality and craft located next to Lincoln Park in the historic Tremont neighborhood of Cleveland.</p>
            <p className='font-color-2 smaller_text mt-5'>Tues - Sun <span className='font-color-1'>4pm - 11pm</span></p>
        </div>
    );
}
