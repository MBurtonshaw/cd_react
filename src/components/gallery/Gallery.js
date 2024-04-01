import { React, useState, useEffect } from 'react';
import Loading from '../Loading';

export default function Gallery(props) {
    let [photos, setPhotos] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let gallery_array = [];

    async function getData() {
        let img_1 = '../img/gallery_10-26_1';
        let img_2 = '../img/gallery_10-26_2';
        let img_3 = '../img/gallery_10-26_3';
        let img_4 = '../img/gallery_10-26_4';
        let img_5 = '../img/gallery_10-26_5';
        let img_6 = '../img/gallery_10-26_6';
        let img_7 = '../img/gallery_10-26_7';
        let img_8 = '../img/gallery_10-26_8';
        let img_9 = '../img/gallery_10-26_9';
        let img_10 = '../img/gallery_10-26_10';
        let img_11 = '../img/gallery_10-26_11';
        let img_12 = '../img/gallery_10-26_12';
        let img_13 = '../img/gallery_10-26_13';
        let img_14 = '../img/gallery_10-26_14';

        gallery_array.push(img_1);
        gallery_array.push(img_2);
        gallery_array.push(img_3);
        gallery_array.push(img_4);
        gallery_array.push(img_5);
        gallery_array.push(img_6);
        gallery_array.push(img_7);
        gallery_array.push(img_8);
        gallery_array.push(img_9);
        gallery_array.push(img_10);
        gallery_array.push(img_11);
        gallery_array.push(img_12);
        gallery_array.push(img_13);
        gallery_array.push(img_14);
        setPhotos(removeDuplicates(gallery_array));
        setIsLoading(false);
    }

    useEffect(() => { getData() }, [setPhotos]);

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    if (isLoading === true) {
        return (
            <div className='color_div'>
                <Loading />
            </div>
        );
    } else {
        if (window.innerWidth < 1200) {
            return (
                <div id='gallery_container' className='w-75 m-auto d-flex'>
                    <div id='img_container'>
                        {
                            photos.map(
                                (photo, i) => {
                                    return (
                                        <a key={i} href={`/img/gallery_10-26_${i + 1}.png`}>
                                            <img className='p-3' height='275' src={`${photo}_square.png`} />
                                        </a>
                                    );
                                }
                            )
                        }
                    </div>
                </div>
            );
        }
        return (
            <div id='gallery_container' className='d-flex'>
                <div id='img_container'>
                    {
                        photos.map(
                            (photo, i) => {
                                return (
                                    <a key={i} href={`/img/gallery_10-26_${i + 1}.png`}>
                                        <img className='p-3' height='275' src={`${photo}_thumbnail.png`} />
                                    </a>
                                );
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}