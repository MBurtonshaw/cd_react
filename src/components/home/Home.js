import { React } from 'react';

import Carousel from './Carousel';
import Prologue from './Prologue';
import Body from './Body';

export default function Home(props) {

    return (
        <div id='home_div' className=''>
          
            <Carousel />
            <Prologue />
            <Body />
        </div>
    );
}