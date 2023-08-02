import React from 'react'
import './toggleSidebar.scss'
import { AiFillHome } from 'react-icons/ai'
import { HiOutlineViewBoards, HiOutlineFolderAdd, HiOutlineCollection } from 'react-icons/hi'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const ToggleSideBar = ({ sidebar, handleToggleSidebar }) => {
    const navigate=useNavigate()
    const handleHome=()=>{
        navigate('/')
    }
    const handleSort=()=>{
        navigate('/sort')
    }
    return (
        <div className={sidebar?"toggle":'toggle close'} onClick={handleToggleSidebar}>
            <div className={sidebar ? 'toggle_toggleSidebar toggle_open' : 'toggle_toggleSidebar'}
                onClick={() => handleToggleSidebar(sidebar)}>
                <div className="toggle_toggleSidebar--logo" >
                    <FaBars onClick={() => handleToggleSidebar(sidebar)} />
                    <img src="https://png.pngtree.com/template/20191130/ourmid/pngtree-modern-online-movie-logo-template-online-video-logo-designs-vector-illustration-image_337356.jpg" alt="" />
                </div>
                <div className="toggle_toggleSidebar--home" onClick={handleHome} >
                    <AiFillHome  onClick={() => handleToggleSidebar(sidebar)}  />
                    <p  onClick={() => handleToggleSidebar(sidebar)} >Trang chủ</p>
                </div>
                <div className="toggle_toggleSidebar--short" onClick={handleSort}>
                    <HiOutlineViewBoards  onClick={() => handleToggleSidebar(sidebar)}  />
                    <p  onClick={() => handleToggleSidebar(sidebar)}  >Short</p>
                </div>
                <div className="toggle_toggleSidebar--register">
                    <HiOutlineFolderAdd  onClick={() => handleToggleSidebar(sidebar)}  />
                    <p  onClick={() => handleToggleSidebar(sidebar)}  >Kênh đăng kí</p>
                </div>
                <div className="toggle_toggleSidebar--library">
                    <HiOutlineCollection  onClick={() => handleToggleSidebar(sidebar)}  />
                    <p  onClick={() => handleToggleSidebar(sidebar)}  >Thư viện</p>
                </div>
            </div>
        </div>
    )
}

export default ToggleSideBar