import { NavLink, Outlet } from "react-router-dom";
import React from 'react'
const Profile=()=>{
    return (
    <div>
        <h1>Profile</h1>
        <ul>
            <li>
                <NavLink to="/profile/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/profile/courses">Courses</NavLink>
            </li>
        </ul>
        <Outlet></Outlet>
    </div>
    );
};
const Courses =()=>{
    return (<h1>Courses</h1>)
};
const About = ()=>{
    return (<h1>About</h1>)
};
export {About,Courses};
export default Profile;