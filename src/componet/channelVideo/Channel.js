import React, { useEffect } from 'react'
import './channel.scss'
import Header from '../header/Header'
import ToggleSideBar from '../sidebar/ToggleSideBar'
import { useParams, } from 'react-router-dom'
import Home from './category/home/Home'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { getVideoWatch } from '../../redux/action/videoAction'

const Channel = ({ handleToggleSidebar, sidebar }) => {
    const { id } = useParams()
    // console.log(id);
    const dispatch = useDispatch()
    const { video, loading } = useSelector(state => state.videowatch.video)
   
    useEffect(() => {
        dispatch(getVideoWatch(id))
    }, [dispatch, id])
    return (
        <div className='channel'>
            <Row>
                <Col><Header handleToggleSidebar={handleToggleSidebar} />
                    <ToggleSideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                </Col>
            </Row>
            <div className="channel_author">
                <div className='channel_author--title'>
                    {
                        !loading && video ?
                            <div className=''>
                                <h4>{video[0]?.snippet?.channelTitle}</h4>
                            </div> : <p>loadding</p>
                    }
                </div>
                <button>Đăng kí</button>
            </div>
            <div className="channel_category">
                {
                    !loading && video ? (
                        video.map((videoItem, i) => (
                            <Home video={videoItem} loading={loading} key={i} />
                        ))
                    ) : (
                        <p>load...</p>
                    )
                }


            </div>

        </div>
    )
}

export default Channel
