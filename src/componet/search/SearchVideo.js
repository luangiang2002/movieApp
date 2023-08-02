import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../header/Header';
import './search.scss'
import ToggleSideBar from '../sidebar/ToggleSideBar';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Search from './video/Search';
import { getVideoByCategory } from '../../redux/action/videoAction';
const SearchVideo = ({ handleToggleSidebar, sidebar }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { video, loading } = useSelector(state => state.search.video)
  useEffect(() => {
    dispatch(getVideoByCategory(id))
  }, [dispatch, id])
  return (
    <div className='search'>
      <Row>
        <Col><Header handleToggleSidebar={handleToggleSidebar} />
          <ToggleSideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="search_video">
            {!loading ?
              video?.map((video, i) => <Search video={video} key={i} />) : <p>Load...</p>
            }
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default SearchVideo