import React  from 'react'
import './search.scss'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Search = ({ video }) => {
    const navigate = useNavigate()
    const channeId = video?.snippet?.channelId
    const handleVideoClick = () => {
        navigate(`homevideo/${channeId}`)
    }
    const handleChannel = () => {
        navigate(`/channel/${channeId}`)

    }
        return (
        <div className=' search' >
        <div className="search_video" >
            <div className="search_video--duration" onClick={handleVideoClick}>
                <img src={video?.snippet?.thumbnails?.medium?.url} alt='' />
            </div>
            <div className="search_video--detail d-flex w-100">
                <div className="search_content">
                    <h4 className='search_title' onClick={handleVideoClick}>{video?.snippet?.title}</h4>
                    <p className="author" onClick={handleChannel}>{video?.snippet?.channelTitle}</p>
                    <p className="search_sub">{ moment(video?.snippet?.publishedAt).fromNow()} </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Search