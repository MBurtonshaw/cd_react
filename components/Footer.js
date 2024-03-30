import { React } from 'react';

export default function Footer(props) {
    return (
        <div id='footer_div' className='w-100 py-2 row'>
            <div className='col'>
                <img width='60' className='little_right mx-4 my-3' src='../img/CD_Facebook.png' />
                <img width='60' className='little_right mx-4 my-3' src='../img/CD_Instagram.png' />
            </div>
            <div id='footer_two' className='col-9 mt-5'>
                <div className='inner-footer row'>
                <p className='font-color-1 newsletter_text col'>sign up for our newsletter</p>
                <input className='newsletter_input col' placeholder='Sign up for our newsletter'></input>
                <button className='newsletter_button col-1' type='button'>Join</button>
                </div>
                
            </div>
        </div>
    );
}