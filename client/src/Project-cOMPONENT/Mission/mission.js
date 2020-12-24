import React, { Component } from 'react';
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
class MissionMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainMission'>
                <section className='missionForNow'>
                <div className='missionNow'>
                    <div className='missionAbout'>
                        <div className='mission mtd'>
                            <h1> EVANGELISM AND MISSION</h1>
                        </div>
                        <hr/>
                    </div>
                    <div className='missionMsg'>
                        <div className='msgMission mtd'>
                            <p>Although watching our videos is a great way to learn more about Evangelism Mission: what we do, and where we've been; videos are only a small representation of all that we do. This webpage contains some playlists of a few of our YouTube videos. In order to see many more, please visit:</p>
                            <p>WE also have many videos and do live broadcast from our facebook page at: (EvangelismMission.com/facebook)</p>
                        </div>
                    </div>
                    <div className='missionVideo'>
                        <div className='videoMission'>
                           <div className='videosFor'>
                                <div className='videoMsg mtd'>
                                    <h1>SOME OF OUR VIDEOS</h1>
                                    <p>Coming Soon.................!</p>
                                </div>
                                <hr/>
                           </div>
                           {/* <div className='videosMissionNow'>
                               <div className='finalVideo'>
                                   <div className='videoMsg'>
                                    <p>Evangelism Mission at MAMEDO VOLTA<br/>Let Save Soul By Going To The Villages and Local Town Where They Dont Have The Word </p>
                                   </div>
                                   <div className='allMissionVideos'>
                                        <div className='VideMiss'>
                                            <video muted controls src={require('../../pic/VID_20200925_105730.mp4')}/>
                                        </div>
                                        <div className='VideMiss'>
                                            <video muted controls src={require('../../pic/VID_20200925_105533.mp4')}/>
                                        </div>
                                        <div className='VideMiss'>
                                            <video  controls src={require('../../pic/VID_20200926_083028.3gp')}/>
                                        </div>
                                        <div className='VideMiss'>
                                            <video controls src={require('../../pic/VID_20200926_124709.3gp')}/>
                                        </div>
                                        <div className='VideMiss'>
                                            <video  controls src={require('../../pic/VID_20200926_124556.mp4')}/>
                                        </div>
                                      
                                   </div>
                               </div>
                           </div> */}
                        </div>
                    </div>
                </div>
                </section>
            </div>
         );
    }
}
 
export default MissionMain;