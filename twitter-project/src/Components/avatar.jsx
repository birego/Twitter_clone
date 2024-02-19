import React from 'react';
import AvatarImage from '../assets/pro.png';

export default function Avatar(){
    return (
        <div>
            <img className="avatar" src={AvatarImage} alt=""/>
        </div>
    )
}
