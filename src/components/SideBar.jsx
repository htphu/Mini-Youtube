import './SideBar.scss'
import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const SideBar = () => {
    return (
        <div className="sideBar">

            <div className="sideBar-group">
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <HomeIcon />
                    </div>
                    <span>Trang chủ</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <ExploreIcon />
                    </div>
                    <span>Khám phá</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <AppShortcutIcon />
                    </div>
                    <span>Shorts</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <VideoSettingsIcon />
                    </div>
                    <span>Kênh đăng ký</span>
                </div>
            </div>

            <div className="sideBar-group">
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <VideoLibraryIcon />
                    </div>
                    <span>Thư viện</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <AccessTimeIcon />
                    </div>
                    <span>Video đã xem</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <OndemandVideoIcon />
                    </div>
                    <span>Video của bạn</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <TimelapseIcon />
                    </div>
                    <span>Xem sau</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <ThumbUpOffAltIcon />
                    </div>
                    <span>Video đã thích</span>
                </div>
                
            </div>

            <div className="sideBar-group">
                <div className="sideBar-title">
                    KÊNH ĐĂNG KÝ
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <AccountCircleIcon />
                    </div>
                    <span>Name Channel</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <AccountCircleIcon />
                    </div>
                    <span>Name Channel</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <AccountCircleIcon />
                    </div>
                    <span>Name Channel</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <AccountCircleIcon />
                    </div>
                    <span>Name Channel</span>
                </div>
                <div className="sideBar-item">
                    <div className="icon-yt">
                        <AccountCircleIcon />
                    </div>
                    <span>Name Channel</span>
                </div>
                
            </div>
        </div>
    )
}

export default SideBar