import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "./Friends/Friends";


const Navbar = (props) => {
    let friendsElements = props.state.friends.map(f => <Friends name={f.name} photo={f.photo}/>);
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}> Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}> News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}> Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}> Settings</NavLink>
                </div>
            </nav>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    )
}


export default Navbar;