import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, email, username} = friend;
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>User Name: {username}</p>
        </div>
    );
};

export default FriendDetails;