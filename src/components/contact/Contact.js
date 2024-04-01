import { React } from 'react';

export default function Contact(props) {
    return (
        <div id='contact_div' className='mt-3'>
            <form action="/" method="GET">
                <p>Name</p> <input type="text" name="name" />
                <p>Email</p> <input type="text" name="email" />
                <p>Phone</p> <input type="text" name="phone" />

                <br />

                <p>Message</p><textarea name="message" rows="6" cols="25"></textarea><br />
                <input type="submit" value="Send" /><input type="reset" value="Clear" />
            </form>
        </div>
    );
}