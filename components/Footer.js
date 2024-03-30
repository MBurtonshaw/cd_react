import { React } from 'react';
import Newsletter from '../components/Newsletter';

export default function Footer(props) {
    return (
        <div id='footer_div' className='w-100 mx-auto py-1 row'>
            <div className='col m-auto'>
                <img width='60' className='little_right mx-4 my-3' src='../img/CD_Facebook.png' />
                <img width='60' className='little_right mx-4 my-3' src='../img/CD_Instagram.png' />
            </div>

            <div className='col'>
            <Newsletter />
            </div>
  </div>
    );
}
