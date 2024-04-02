import { React } from 'react';

export default function Contact(props) {
    if (window.innerWidth < 1200) {
        if (window.innerWidth < 768) {
            return (
                <div id='contact_div' className='w-100'>
                    <h1 className='contact_h1'>Contact Us</h1>
                    <form action="/" method="GET">
                        <p>Name</p> <input className='w-75 m-auto' type="text" name="name" />
                        <p>Email</p> <input className='w-75 m-auto' type="text" name="email" />
                        <p>Phone</p> <input className='w-75 m-auto' type="text" name="phone" />

                        <br />

                        <p>Message</p><textarea name="message" rows="6" cols="45"></textarea><br />
                        <input type="submit" value="Send" /><input type="reset" value="Clear" />
                    </form>
                </div>
            );
        }
        return (
            <div id='contact_div' className='mt-3 w-75'>
                <h1 className='contact_h1'>Contact Us</h1>
                <form action="/" method="GET">
                    <p>Name</p> <input className='w-50 m-auto' type="text" name="name" />
                    <p>Email</p> <input className='w-50 m-auto' type="text" name="email" />
                    <p>Phone</p> <input className='w-50 m-auto' type="text" name="phone" />

                    <br />

                    <p>Message</p><textarea name="message" rows="6" cols="80"></textarea><br />
                    <input type="submit" value="Send" /><input type="reset" value="Clear" />
                </form>
            </div>
        );
    }
    return (
        <div id='contact_div' className='mt-3 w-50'>
            <h1 className='contact_h1'>Contact Us</h1>
            <form action="/" method="GET">
                <p>Name</p> <input className='w-50 m-auto' type="text" name="name" />
                <p>Email</p> <input className='w-50 m-auto' type="text" name="email" />
                <p>Phone</p> <input className='w-50 m-auto' type="text" name="phone" />

                <br />

                <p>Message</p><textarea name="message" rows="6" cols="100"></textarea><br />
                <input type="submit" value="Send" /><input type="reset" value="Clear" />
            </form>
        </div>
    );
}