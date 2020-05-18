import React from 'react';
import s from './Friends.module.css';


const Friends = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src={props.photo}/>
                {props.name}
            </div>
        </div>
    )
}


export default Friends;