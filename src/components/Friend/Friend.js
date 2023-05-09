import React from 'react';
import "./Friend.css";

const Friend = ({friend}) => {
    const {name,email,username,id} = friend;
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <p>email: {email}</p>
            <p>UserName: {username}</p>
        </div>
    );
};

export default Friend;