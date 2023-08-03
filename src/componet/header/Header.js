import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import Avatar from '../AvatarLogin/Avatar';
import { useSelector } from 'react-redux';

const Header = ({ handleToggleSidebar,setDarkMode }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem('watch-user'));
  useEffect(() => {
    if (userInfo) {
      setIsLoggedIn(true);
    }
  }, [userInfo]);

  const handleHome = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  const handleImgClick = () => {
    if (isLoggedIn) {
      setShowAvatar(!showAvatar);
    } else {
      navigate('/login');
    }
  };
  const urlAvatar = useSelector((state) => state.imageAvatar);
  return (
    <div className=' header '>
      <div className="header_logo">
        <FaBars onClick={() => handleToggleSidebar()} />
        <img
          src="https://i.ibb.co/s9Qys2j/logo.png"
          alt=""
          onClick={handleHome}
        />
      </div>
      <div className="header_search">
        <input type="text" placeholder='Tìm kiếm' onChange={e => setInput(e.target.value)} className='input' />
        <button onClick={handleSearch} ><AiOutlineSearch /></button>
      </div>
      <div className='header_icon' >
        <IoIosNotificationsOutline />
        {urlAvatar?.urlAvatar ? (
          <img src={urlAvatar?.urlAvatar } alt='avater' onClick={handleImgClick} />
        ) : (
          <img
            src='https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&ga=GA1.1.614860776.1689582553&semt=sph'
            alt='default_avater'
            onClick={handleImgClick}
          />
        )}
      </div>
      {isLoggedIn && showAvatar && (
        <div className='avatar'>
          <Avatar userInfo={userInfo} setDarkMode={setDarkMode} />
        </div>
      )}
    </div>
  )
}

export default Header;
