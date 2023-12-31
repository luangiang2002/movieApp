
import { Col, Row } from 'react-bootstrap';
import './homepage.scss';
import Header from './header/Header';
import ToggleSideBar from './sidebar/ToggleSideBar';
import PageVideo from './PageVideo/PageVideo';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoByCategory } from '../redux/action/videoAction';
import { useEffect, useState } from 'react';
const keyword = [
  'Tất cả',
  'Âm nhạc',
  'trực tiếp',
  'Danh sách kết hợp',
  'Trò chơi',
  'Hoạt họa',
  'Hoạt hình',
  'Mới tải lên gần đây',
  'Thịnh hành',
  'Đề xuất mới'
]
function HomePage({ handleToggleSidebar, sidebar }) {
  const dispatch = useDispatch()
  const { video, loading } = useSelector(state => state.search)
  const [active, setActive] = useState('Tất cả')
  useEffect(() => {
    if (active === 'Tất cả') {
      dispatch(getVideoByCategory(active));
    }
  }, [active, dispatch]);

  const handleckick = (value) => {
    setActive(value)
    dispatch(getVideoByCategory(active));
  };
  const _video=video?.video
  return (
    <div className="homepage ">
      <Row>
        <Col><Header handleToggleSidebar={handleToggleSidebar} />
          <ToggleSideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        </Col>
      </Row>
      {/* <Row > */}
        <div className='homepage_category '>
          {
            keyword.map((value, i) => (
              <p className={active === value ? 'homepage_category_active' : 'homepage_category_content item'} key={i} onClick={() => handleckick(value)}>{value}</p>
              
            ))
          }
        </div>

        <div className=' homepage_homevideo '>

          {
            !loading && _video && _video.map((video, i) => <PageVideo video={video} key={i} />)
          }
        </div>
      {/* </Row> */}
    </div>
  );
}

export default HomePage;
