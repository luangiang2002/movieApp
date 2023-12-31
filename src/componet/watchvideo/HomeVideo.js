import React, { useEffect } from 'react'
import './homevideo.scss'
import { Col, Row } from 'react-bootstrap'
import Header from '../header/Header'
import ToggleSideBar from '../sidebar/ToggleSideBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoAction } from '../../redux/action/videoAction';
import Video from './Video/Video';
import NextVideo from './NextVideo/NextVideo';
const HomeVideo = ({ handleToggleSidebar, sidebar }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const {video,loading}=useSelector(state=>state.videowatch.video)
    const {videos}=useSelector(state=>state.videoDetail.videos)
    const videoID=video[0]?.id?.videoId
    useEffect(()=>{
        dispatch(getVideoAction(videoID))
    },[dispatch,videoID])
    
    return (
        <div className=' homevideo'>
            <Header handleToggleSidebar={handleToggleSidebar}></Header>
            <ToggleSideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
            <Row >
                <Col lg={8}>
                    {
                        !loading &&video ? <Video id={id} video={video} />
                            : <h6>Loading</h6>
                    }
                </Col>
                <Col lg={4}>
                    <div className='homevideo_nextvideo'>
                        {
                            !loading ?
                            videos?.map((videoItem,i) => (
                                <NextVideo key={i} videos={videoItem}/>
                            ))
                            : <h6>Loading</h6>
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HomeVideo;