import { React } from 'react';

export default function Carousel(props) {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className='trans_logo_div'>
                <img className='trans_logo' src='../img/CD_Icon_trans.png' />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../img/slideshow_1.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="../img/slideshow_2.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="../img/slideshow_3.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="../img/slideshow_4.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="../img/slideshow_5.png" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}