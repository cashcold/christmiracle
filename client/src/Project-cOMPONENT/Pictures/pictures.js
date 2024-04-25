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

       

       
        return ( 
            <div className='mainPictures'>
               
                <section className='pictureNow'>
                 <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION LOGBA GHANA</h1>
                 <h1>FIRST 1Q/2022</h1>
                 {/* <Gallery photos={photos} direction={"column"} />;
                 <h1>It's end here</h1> */}
                



                    <div className='picture'>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_093359.jpg?alt=media&token=d102137f-14f1-4b54-883b-85628f16c154'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_093359.jpg?alt=media&token=d102137f-14f1-4b54-883b-85628f16c154' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_093359.jpg?alt=media&token=d102137f-14f1-4b54-883b-85628f16c154'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_093359.jpg?alt=media&token=d102137f-14f1-4b54-883b-85628f16c154' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_102112.jpg?alt=media&token=ad6bc953-8c43-4883-a838-c0e95e67be7b'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_102112.jpg?alt=media&token=ad6bc953-8c43-4883-a838-c0e95e67be7b' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_095842.jpg?alt=media&token=b0f68e5d-c09f-45bf-97b4-d5faab273086'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_095842.jpg?alt=media&token=b0f68e5d-c09f-45bf-97b4-d5faab273086' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_104041.jpg?alt=media&token=9fd9d43f-a5ab-4567-bebc-9ed1e96e03f7'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_104041.jpg?alt=media&token=9fd9d43f-a5ab-4567-bebc-9ed1e96e03f7' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_100612.jpg?alt=media&token=4025a4cb-75d9-45fc-8d7a-aceb3b440b3b'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_100612.jpg?alt=media&token=4025a4cb-75d9-45fc-8d7a-aceb3b440b3b' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_095854.jpg?alt=media&token=c1f9a9a0-5ff8-44fc-8d8e-d374ad36247c'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_095854.jpg?alt=media&token=c1f9a9a0-5ff8-44fc-8d8e-d374ad36247c' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_101144.jpg?alt=media&token=26a07712-44b4-4a7e-b34c-a508574270ce'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_101144.jpg?alt=media&token=26a07712-44b4-4a7e-b34c-a508574270ce' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_092433.jpg?alt=media&token=2b497cc3-a166-4105-9f38-474741b50153'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_092433.jpg?alt=media&token=2b497cc3-a166-4105-9f38-474741b50153' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_091648.jpg?alt=media&token=efaa7200-69ec-4c6a-aa39-77d52bfa4ad2'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_091648.jpg?alt=media&token=efaa7200-69ec-4c6a-aa39-77d52bfa4ad2' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_102638.jpg?alt=media&token=3a369522-c78a-4240-b538-d45f766c541b'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220130_102638.jpg?alt=media&token=3a369522-c78a-4240-b538-d45f766c541b' alt='pic'/></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220129_120916.jpg?alt=media&token=05cc3424-8182-4a36-bff9-2cbfec620fcb'><img  src='https://firebasestorage.googleapis.com/v0/b/the-christ.appspot.com/o/Logba%2F20220129_120916.jpg?alt=media&token=05cc3424-8182-4a36-bff9-2cbfec620fcb' alt='pic'/></a>
                    </div>
                </section>
                <section className='pictureNow'>
                 <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION  AKATSI ANYIHEME GHANA</h1>
                 <h1>FIRST 3Q/2021</h1>


                    <div className='picture'>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210730_091050.jpg?alt=media&token=e9f48395-dd65-4895-a904-054e5fad522f'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210730_091050.jpg?alt=media&token=e9f48395-dd65-4895-a904-054e5fad522f' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210730_091145.jpg?alt=media&token=3d5a2c7e-7f6c-4e21-bbe7-229d3450d333'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210730_091145.jpg?alt=media&token=3d5a2c7e-7f6c-4e21-bbe7-229d3450d333' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210730_091153.jpg?alt=media&token=e4cb2e1d-f579-4cad-904e-d606eb13370b'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210730_091153.jpg?alt=media&token=e4cb2e1d-f579-4cad-904e-d606eb13370b' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210731_113347875.jpg?alt=media&token=34a8b621-b868-466a-9faf-17d8d24a9ff8'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210731_113347875.jpg?alt=media&token=34a8b621-b868-466a-9faf-17d8d24a9ff8' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210731_113341841.jpg?alt=media&token=87784fc8-9711-41f7-8651-ee9fc53c8fe9'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210731_113341841.jpg?alt=media&token=87784fc8-9711-41f7-8651-ee9fc53c8fe9' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210731_110108860.jpg?alt=media&token=db1e1d6d-cc9d-4db5-b484-770f3fbeb984'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210731_110108860.jpg?alt=media&token=db1e1d6d-cc9d-4db5-b484-770f3fbeb984' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210731_113231984.jpg?alt=media&token=acdd2058-0162-4f1e-b282-4c4659c2f374'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210731_113231984.jpg?alt=media&token=acdd2058-0162-4f1e-b282-4c4659c2f374' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_091725.jpg?alt=media&token=264510ae-c03e-4b3f-8dd4-188cba3c9a39'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_091725.jpg?alt=media&token=264510ae-c03e-4b3f-8dd4-188cba3c9a39' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092127.jpg?alt=media&token=32087bd2-36a2-48b2-b32f-1fe0a88afc2d'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092127.jpg?alt=media&token=32087bd2-36a2-48b2-b32f-1fe0a88afc2d' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092136.jpg?alt=media&token=f17f9c23-eeab-4d10-ad41-31c19e76d886'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092136.jpg?alt=media&token=f17f9c23-eeab-4d10-ad41-31c19e76d886' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092143.jpg?alt=media&token=f1179edb-7c39-43ea-8bfc-445cb5d7d90e'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092143.jpg?alt=media&token=f1179edb-7c39-43ea-8bfc-445cb5d7d90e' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092159.jpg?alt=media&token=4c5d3ed8-0aa6-454c-8d7c-8a7eabf2ed00'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092159.jpg?alt=media&token=4c5d3ed8-0aa6-454c-8d7c-8a7eabf2ed00' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092325.jpg?alt=media&token=f2e00683-7b8e-4151-87af-1467763826b8'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092325.jpg?alt=media&token=f2e00683-7b8e-4151-87af-1467763826b8' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092421.jpg?alt=media&token=9183ca74-8c38-4e3d-a4f6-43430bcfc0d2'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092421.jpg?alt=media&token=9183ca74-8c38-4e3d-a4f6-43430bcfc0d2' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092426.jpg?alt=media&token=e979fd13-e545-4a54-b431-70876ce3abc3'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092426.jpg?alt=media&token=e979fd13-e545-4a54-b431-70876ce3abc3' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092444.jpg?alt=media&token=6f85c54a-cc90-4649-a8f1-60380ab03f4c'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092444.jpg?alt=media&token=6f85c54a-cc90-4649-a8f1-60380ab03f4c' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092519.jpg?alt=media&token=f9291e3a-9731-48ff-8fd1-851c80299894'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092519.jpg?alt=media&token=f9291e3a-9731-48ff-8fd1-851c80299894' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092525.jpg?alt=media&token=6b4e5002-9359-4daa-8031-142e10b30eb3'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092525.jpg?alt=media&token=6b4e5002-9359-4daa-8031-142e10b30eb3' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_093245042.jpg?alt=media&token=5023298a-91aa-4991-afe7-75b891b7fa39'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_093245042.jpg?alt=media&token=5023298a-91aa-4991-afe7-75b891b7fa39' alt='pic'/></a>
                    <a href='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_091855683.jpg?alt=media&token=ad04b99f-7fbf-43b5-8bb1-f3d324407b52'><img  src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_091855683.jpg?alt=media&token=ad04b99f-7fbf-43b5-8bb1-f3d324407b52' alt='pic'/></a>
                    <a href=''><img  src='' alt='pic'/></a>
                    <a href=''><img  src='' alt='pic'/></a>
                    
                    </div>
                </section>
                <section className='pictureNow'>
                 {/* <h1 className='outReach1'> hard EVANGELISM AND MISSION AT VOLTA REGION  AKATSI ANYIHEME GHANA</h1>
                 <h1>FIRST 3Q/2021</h1> */}


                    <div className='picture'>
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210730_091050.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210730_091145.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210730_091153.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (3)/IMG_20210731_113347875.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (3)/IMG_20210731_113341841.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (3)/IMG_20210731_110108860.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (3)/IMG_20210731_113231984.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_091725.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092127.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092136.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092143.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092159.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092325.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092421.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092426.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092444.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092519.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (2)/IMG_20210801_092525.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (3)/IMG_20210801_093245042.jpg')} alt='pic'/> */}
                        {/* <img  src={require('../../pic/New folder (3)/IMG_20210801_091855683.jpg')} alt='pic'/> */}
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
                        <img  src={require('../../pic/Restored/IMG_20210328_115943265.jpg')} alt='pic'/>
                    </div>
                </section>
                <section className='pictureNow'>
                    <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION MAMEDO GHANA</h1>
                    <h1>FIRST 3Q/2020</h1>
                    <div className='picture'>
                        <img src={require('../../pic/IMG_20200926_091117.jpg')} alt='pic'/>
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