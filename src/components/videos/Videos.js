import { React } from 'react';

export default function Videos(props) {
    if (window.innerWidth < 768) {
        return (
            <div id='' className='mt-3'>
                <div className=''>
                    <div className='my-3'>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/462777172?h=778ec72531" width='100%' height='294' allowFullScreen></iframe>
                    </div>
                    <div className='my-3'>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/462771903?h=f8575b391b" width='100%' height='294' allowFullScreen></iframe>
                    </div>
                    <div className='my-3'>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/465080849?h=fa9075e57b" width='100%' height='294' allowFullScreen></iframe>
                    </div>
    
                    <div className='my-3'>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/478987668?h=993fe77c05" width='100%' height='294' allowFullScreen></iframe>
                    </div>
                    <div className='my-3'>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/502836662?h=2526d003a8" width='100%' height='294' allowFullScreen></iframe>
                    </div>
                    <div className='my-3'>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/502835398?h=7f5c04ecb7" width='100%' height='294' allowFullScreen></iframe>
                    </div>
                    <div className='my-3'>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/502834045?h=8299326bfa" width='100%' height='294' allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id='videos_div' className='mt-3'>
            <div className='row align-items-start m-5'>
                <div className='col my-3'>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/462777172?h=778ec72531" width='525' height='294' allowFullScreen></iframe>
                </div>
                <div className='col my-3'>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/462771903?h=f8575b391b" width='525' height='294' allowFullScreen></iframe>
                </div>
                <div className='col my-3'>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/465080849?h=fa9075e57b" width='525' height='294' allowFullScreen></iframe>
                </div>

                <div className='col my-3'>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/478987668?h=993fe77c05" width='525' height='294' allowFullScreen></iframe>
                </div>
                <div className='col my-3'>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/502836662?h=2526d003a8" width='525' height='294' allowFullScreen></iframe>
                </div>
                <div className='col my-3'>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/502835398?h=7f5c04ecb7" width='525' height='294' allowFullScreen></iframe>
                </div>
                <div className='col my-3'>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/502834045?h=8299326bfa" width='525' height='294' allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}