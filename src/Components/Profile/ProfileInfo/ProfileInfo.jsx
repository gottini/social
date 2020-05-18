import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imageBlock}>
                <img src='https://static9.depositphotos.com/1049184/1095/i/450/depositphotos_10951622-stock-photo-blue-background.jpg' />
            </div>
            <div className={s.discriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}



export default ProfileInfo;