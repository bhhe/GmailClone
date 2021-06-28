import React from "react"
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "./features/userSlice";
import {auth} from './Firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        });
    };
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/g_nyLm8AT_WA7a79K-EhRZV0sE0=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"/>
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar className="header__photo" src={user?.photoURL} onClick={signOut}/>
            </div>
        </div>
    )
}
export default Header;