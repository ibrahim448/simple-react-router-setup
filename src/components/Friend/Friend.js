import React from 'react';
import "./Friend.css";
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,email,username,id} = friend;
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <p>email: {email}</p>
            <p>UserName: <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;