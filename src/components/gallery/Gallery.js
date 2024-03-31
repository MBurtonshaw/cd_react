import { React, useState, useEffect } from 'react';
import Loading from '../Loading';

export default function Gallery(props) {
    let [photos, setPhotos] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let gallery_array = [];

    async function getData() {
        let img_1_thumb = '../img/gallery_10-26_1_thumbnail.png';
        let img_2_thumb = '../img/gallery_10-26_2_thumbnail.png';
        let img_3_thumb = '../img/gallery_10-26_3_thumbnail.png';
        let img_4_thumb = '../img/gallery_10-26_4_thumbnail.png';
        let img_5_thumb = '../img/gallery_10-26_5_thumbnail.png';
        let img_6_thumb = '../img/gallery_10-26_6_thumbnail.png';
        let img_7_thumb = '../img/gallery_10-26_7_thumbnail.png';
        let img_8_thumb = '../img/gallery_10-26_8_thumbnail.png';
        let img_9_thumb = '../img/gallery_10-26_9_thumbnail.png';
        let img_10_thumb = '../img/gallery_10-26_10_thumbnail.png';
        let img_11_thumb = '../img/gallery_10-26_11_thumbnail.png';
        let img_12_thumb = '../img/gallery_10-26_12_thumbnail.png';
        let img_13_thumb = '../img/gallery_10-26_13_thumbnail.png';
        let img_14_thumb = '../img/gallery_10-26_14_thumbnail.png';
         
        gallery_array.push(img_1_thumb);
        gallery_array.push(img_2_thumb);
        gallery_array.push(img_3_thumb);
        gallery_array.push(img_4_thumb);
        gallery_array.push(img_5_thumb);
        gallery_array.push(img_6_thumb);
        gallery_array.push(img_7_thumb);
        gallery_array.push(img_8_thumb);
        gallery_array.push(img_9_thumb);
        gallery_array.push(img_10_thumb);
        gallery_array.push(img_11_thumb);
        gallery_array.push(img_12_thumb);
        gallery_array.push(img_13_thumb);
        gallery_array.push(img_14_thumb);
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
            <Loading />
        );
    } else {

        return (
            <div id='gallery_container' className='d-flex'>
                <div id='img_container'>
                    {
                        photos.map(
                            (photo, i) => {
                                return (
                                    <a key={i} href={`/img/gallery_10-26_${i+1}.png`}>
                                        <img className='p-3' height='275' src={photo} />
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