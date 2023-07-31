import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
const Header = ({ handleToggleSidebar }) => {

  const navigate = useNavigate();
  const [input,setInput]=useState()
  const hadleImg = () => {
    navigate('/login')
  }
  const handleHome=()=>{
    navigate('/')
  }
  const handleSearch=(e)=>{
    e.preventDefault()
    navigate(`/search/${input}`)
  }
  return (
    <div className=' header '>
      <div className="header_logo">
        <FaBars onClick={() => handleToggleSidebar()} />
        <img src="https://img.freepik.com/premium-vector/youtube-logotype-youtube-is-videosharing-website_686498-397.jpg?size=626&ext=jpg&ga=GA1.2.614860776.1689582553&semt=sph" alt="" 
        onClick={handleHome}

        />
      </div>
      <div className="header_search">
        <input type="text" placeholder='Tìm kiếm' onChange={e=>setInput(e.target.value)}/>
        <button onClick={handleSearch} ><AiOutlineSearch /></button>
      </div>
      <div className='header_icon'>
        <IoIosNotificationsOutline />
        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&ga=GA1.1.614860776.1689582553&semt=sph" alt=""
          onClick={hadleImg}
        />
      </div>
    </div>
  )
}

export default Header