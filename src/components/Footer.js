import { React } from 'react';

export default function Footer() {
    if (window.innerWidth < 1500) {
        if (window.innerWidth < 1200) {
            if (window.innerWidth < 900) {
                if (window.innerWidth < 768) {
                    if (window.innerWidth < 575) {
                        //smallest
                        return (
                            <div id='' className=''>
                                <div id="seven">
                                    <p id="seven_text">
                                        Sign up for our newsletter
                                    </p>
                                    <div id="seven_socials_div">
                                        <a id="seven_facebook_a" target="_blank" href="https://facebook.com/cloakanddaggercle">
                                            <img id="seven_facebook" className='socials_5' src="img/CD_Facebook.png" />
                                        </a>
                                        <a id="seven_instagram_a" target="_blank" href="https://instagram.com/cloakanddaggercle" >
                                            <img id="seven_instagram" className='socials_5' src="img/CD_Instagram.png" />
                                        </a>
                                    </div>
                                    <div className="klaviyo-form-RBSHP6"></div>
                                </div>
                            </div>
                        );
                    }
                    //smaller
                    return (
                        <div id='' className=''>
                            <div id="seven">
                                <p id="seven_text">
                                    Sign up for our newsletter
                                </p>
                                <div id="seven_socials_div">
                                    <a id="seven_facebook_a" target="_blank" href="https://facebook.com/cloakanddaggercle">
                                        <img id="seven_facebook" className='socials_4' src="img/CD_Facebook.png" />
                                    </a>
                                    <a id="seven_instagram_a" target="_blank" href="https://instagram.com/cloakanddaggercle" >
                                        <img id="seven_instagram" className='socials_4' src="img/CD_Instagram.png" />
                                    </a>
                                </div>
                                <div className="klaviyo-form-RBSHP6"></div>
                            </div>
                        </div>
                    );
                }
                //small
                return (
                    <div id='' className=''>
                        <div id="seven">
                            <p id="seven_text">
                                Sign up for our newsletter
                            </p>
                            <div id="seven_socials_div">
                                <a id="seven_facebook_a" target="_blank" href="https://facebook.com/cloakanddaggercle">
                                    <img id="seven_facebook" className='socials_3' src="img/CD_Facebook.png" />
                                </a>
                                <a id="seven_instagram_a" target="_blank" href="https://instagram.com/cloakanddaggercle" >
                                    <img id="seven_instagram" className='socials_3' src="img/CD_Instagram.png" />
                                </a>
                            </div>
                            <div className="klaviyo-form-RBSHP6"></div>
                        </div>
                    </div>
                );
            }
            //medium
            return (
                <div id='' className=''>
                    <div id="seven">
                        <p id="seven_text">
                            Sign up for our newsletter
                        </p>
                        <div id="seven_socials_div">
                            <a id="seven_facebook_a" target="_blank" href="https://facebook.com/cloakanddaggercle">
                                <img id="seven_facebook" className='socials_3' src="img/CD_Facebook.png" />
                            </a>
                            <a id="seven_instagram_a" target="_blank" href="https://instagram.com/cloakanddaggercle" >
                                <img id="seven_instagram" className='socials_3' src="img/CD_Instagram.png" />
                            </a>
                        </div>
                        <div className="klaviyo-form-RBSHP6"></div>
                    </div>
                </div>
            );
        }
        //large
        return (
            <div id='' className=''>
                <div id="seven">
                    <p id="seven_text">
                        Sign up for our newsletter
                    </p>
                    <div id="seven_socials_div">
                        <a id="seven_facebook_a" target="_blank" href="https://facebook.com/cloakanddaggercle">
                            <img id="seven_facebook" className='socials_2' src="img/CD_Facebook.png" />
                        </a>
                        <a id="seven_instagram_a" target="_blank" href="https://instagram.com/cloakanddaggercle" >
                            <img id="seven_instagram" className='socials_2' src="img/CD_Instagram.png" />
                        </a>
                    </div>
                    <div className="klaviyo-form-RBSHP6"></div>
                </div>
            </div>
        );
    }
    return (
        <div id='' className=''>
            <div id="seven">
                <p id="seven_text">
                    Sign up for our newsletter
                </p>
                <div id="seven_socials_div">
                    <a id="seven_facebook_a" target="_blank" href="https://facebook.com/cloakanddaggercle">
                        <img id="seven_facebook" className='socials_1' src="img/CD_Facebook.png" />
                    </a>
                    <a id="seven_instagram_a" target="_blank" href="https://instagram.com/cloakanddaggercle" >
                        <img id="seven_instagram" className='socials_1' src="img/CD_Instagram.png" />
                    </a>
                </div>
                <div className="klaviyo-form-RBSHP6"></div>
            </div>
        </div>
    );
}
