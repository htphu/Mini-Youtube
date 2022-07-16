import React from 'react'
import './Nav.scss'
import { useNavigate } from 'react-router';
import InputSearch from './InputSearch';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Tooltip from '@mui/material/Tooltip';


function Nav() {
    const navigate = useNavigate();
    
    return (
        <div className="nav">
            <div className="nav-left" onClick={()=>{navigate('/Mini-Youtube')}}>
                <div className="icon-yt">
                    <MenuIcon />
                </div>
                <div className="nav-logo">

                    <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'inline', height: '20px', width: '30px' }}><g viewBox="0 0 30 20" preserveAspectRatio="xMidYMid meet" className="style-scope yt-icon"><g className="style-scope yt-icon"><path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" className="" /><path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" className="" /></g></g></svg>

                    <span>Mini Youtube</span>
                </div>
            </div>
            <div className="nav-center">
                <InputSearch/>
            </div>
            <div className="nav-right">
                <Tooltip title="Tải lên">
                    <div className="icon-yt">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'inline', width: '24px', height: '24px' }}><g className="style-scope yt-icon"><path d="M17,18v1H6V18ZM6.49,9l.71.71L11,5.91V16h1V5.91l3.8,3.81L16.51,9l-5-5Z" fill="#FFF" className="style-scope yt-icon" /></g></svg>
                    </div>
                </Tooltip>
                <Tooltip title="Các ứng dụng Youtube">
                    <div className="icon-yt">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'inline', width: '24px', height: '24px' }}><g className="style-scope yt-icon"><path d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z" fill="#FFF" className="style-scope yt-icon" /></g></svg>
                    </div>
                </Tooltip>
                <Tooltip title="Thông báo">
                    <div className="icon-yt">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'inline', width: '24px', height: '24px' }}><g className="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" fill="#FFF" className="style-scope yt-icon" /></g></svg>
                    </div>
                </Tooltip>
                <div className="icon-yt">
                    <AccountCircleIcon style={{ cursor: 'pointer' }} />

                </div>
            </div>
        </div>
    )
}

export default Nav
