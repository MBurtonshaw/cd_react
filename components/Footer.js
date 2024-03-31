import { React } from 'react';
import Newsletter from '../components/Newsletter';

export default function Footer(props) {
    return (
        <div id='' className=''>
            <div id="seven">
                <p id="seven_text">
                    Sign up for our newsletter
                </p>
                <div id="seven_socials_div">
                    <a
                        id="seven_facebook_a"
                        target="_blank"
                        href="https://facebook.com/cloakanddaggercle"
                    >
                        <img id="seven_facebook" src="img/CD_Facebook.png" />
                    </a>

                    <a
                        id="seven_instagram_a"
                        target="_blank"
                        href="https://instagram.com/cloakanddaggercle"
                    >
                        <img id="seven_instagram" src="img/CD_Instagram.png" />
                    </a>
                </div>
                <div className="klaviyo-form-RBSHP6"></div>
            </div>
  </div>
    );
}
