import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './style.css'
class Pictures extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            photoIndex: 0,
            isOpen: false,
         }
    }
    render() { 

        let photos = [
            
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_093359.jpg?alt=media&token=d102137f-14f1-4b54-883b-85628f16c154',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_102112.jpg?alt=media&token=ad6bc953-8c43-4883-a838-c0e95e67be7b',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_095842.jpg?alt=media&token=b0f68e5d-c09f-45bf-97b4-d5faab273086',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_104041.jpg?alt=media&token=9fd9d43f-a5ab-4567-bebc-9ed1e96e03f7',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_100612.jpg?alt=media&token=4025a4cb-75d9-45fc-8d7a-aceb3b440b3b',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_095854.jpg?alt=media&token=c1f9a9a0-5ff8-44fc-8d8e-d374ad36247c',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_101144.jpg?alt=media&token=26a07712-44b4-4a7e-b34c-a508574270ce',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_092433.jpg?alt=media&token=2b497cc3-a166-4105-9f38-474741b50153',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_091648.jpg?alt=media&token=efaa7200-69ec-4c6a-aa39-77d52bfa4ad2',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_102638.jpg?alt=media&token=3a369522-c78a-4240-b538-d45f766c541b',
        width: 1,
        height: 1},
            {  src: 'https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220129_120916.jpg?alt=media&token=05cc3424-8182-4a36-bff9-2cbfec620fcb',
        width: 1,
        height: 1},
        ]

       
        return ( 
            <div className='mainPictures'>
               
                <section className='pictureNow'>
                 <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION LOGBA GHANA</h1>
                 <h1>FIRST 1Q/2022</h1>
                 <Gallery photos={photos} direction={"column"} />;
                 <h1>It's end here</h1>
                



                    <div className='picture'>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_093359.jpg?alt=media&token=d102137f-14f1-4b54-883b-85628f16c154' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_102112.jpg?alt=media&token=ad6bc953-8c43-4883-a838-c0e95e67be7b' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_095842.jpg?alt=media&token=b0f68e5d-c09f-45bf-97b4-d5faab273086' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_104041.jpg?alt=media&token=9fd9d43f-a5ab-4567-bebc-9ed1e96e03f7' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_100612.jpg?alt=media&token=4025a4cb-75d9-45fc-8d7a-aceb3b440b3b' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_095854.jpg?alt=media&token=c1f9a9a0-5ff8-44fc-8d8e-d374ad36247c' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_101144.jpg?alt=media&token=26a07712-44b4-4a7e-b34c-a508574270ce' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_092433.jpg?alt=media&token=2b497cc3-a166-4105-9f38-474741b50153' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_091648.jpg?alt=media&token=efaa7200-69ec-4c6a-aa39-77d52bfa4ad2' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_102638.jpg?alt=media&token=3a369522-c78a-4240-b538-d45f766c541b' alt='pic'/>
                        <img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220129_120916.jpg?alt=media&token=05cc3424-8182-4a36-bff9-2cbfec620fcb' alt='pic'/>
                    </div>
                </section>
                <section className='pictureNow'>
                 <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION  AKATSI ANYIHEME GHANA</h1>
                 <h1>FIRST 3Q/2021</h1>


                    <div className='picture'>
                        
                        <img  src={require('../../pic/New folder (2)/IMG_20210730_091050.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210730_091145.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210730_091153.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (3)/IMG_20210731_113347875.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (3)/IMG_20210731_113341841.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (3)/IMG_20210731_110108860.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (3)/IMG_20210731_113231984.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_091725.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092127.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092136.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092143.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092159.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092325.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092421.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092426.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092444.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092519.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (2)/IMG_20210801_092525.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (3)/IMG_20210801_093245042.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder (3)/IMG_20210801_091855683.jpg')} alt='pic'/>
                    </div>
                </section>
                <section className='pictureNow'>
                    <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION AGBOZUME GHANA</h1>
                    <h1>FIRST 1Q/2021</h1>
                    <div className='picture'>
                        <img  src={require('../../pic/Restored/IMG_20210328_115911141.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_115927765.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_115933123.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_115940035.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_123949127.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_085248569.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_123555134.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_123853217.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_133515586.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_115943265.jpg')} alt='pic'/>
                    </div>
                </section>
                <section className='pictureNow'>
                    <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION MAMEDO GHANA</h1>
                    <h1>FIRST 3Q/2020</h1>
                    <div className='picture'>
                        <img  src={require('../../pic/IMG_20200926_091117.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_091201.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_124853.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_124850.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_092306.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_092147.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_083105.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_091010.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_092327.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_092336.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_091016.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_124849.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_083111.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200927_151946.jpg')} alt='pic'/>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Pictures;