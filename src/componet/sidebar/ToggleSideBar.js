import React, { useState } from 'react'
import './toggleSidebar.scss'
import { AiFillHome } from 'react-icons/ai'
import { HiOutlineViewBoards, HiOutlineFolderAdd, HiOutlineCollection } from 'react-icons/hi'
import { FaBars } from 'react-icons/fa'
const ToggleSideBar = ({ sidebar, handleToggleSidebar }) => {
    return (
        <div className={sidebar?"toggle":'toggle close'} onClick={handleToggleSidebar}>
            <div className={sidebar ? 'toggle_toggleSidebar toggle_open' : 'toggle_toggleSidebar'}
                onClick={() => handleToggleSidebar(false)}>
                <div className="toggle_toggleSidebar--logo">
                    <FaBars onClick={() => handleToggleSidebar(sidebar)} />
                    <img src="https://png.pngtree.com/template/20191130/ourmid/pngtree-modern-online-movie-logo-template-online-video-logo-designs-vector-illustration-image_337356.jpg" alt="" />
                </div>
                <div className="toggle_toggleSidebar--home">
                    <AiFillHome />
                    <p>Trang chủ</p>
                </div>
                <div className="toggle_toggleSidebar--short">
                    <HiOutlineViewBoards />
                    <p>Short</p>
                </div>
                <div className="toggle_toggleSidebar--register">
                    <HiOutlineFolderAdd />
                    <p>Kênh đăng kí</p>
                </div>
                <div className="toggle_toggleSidebar--library">
                    <HiOutlineCollection />
                    <p>Thư viện</p>
                </div>
            </div>
        </div>
    )
}

export default ToggleSideBar