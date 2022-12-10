import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./GalleryNavigation.css";

const GalleryNavigation = ({galleries: {records}}) => {
    console.log(records);
    return (
        <>
        <h1> Galleries</h1>
        <ul>
        {records.map((record, i)=> (
            <>
                    <nav>
                        <li key={i} ><NavLink to={`/galleries/:${record.id}`} > {record.name} </NavLink></li>
                    </nav>
            </>
        ))}
        </ul >
        <li><NavLink exact to='/'> Home Page </NavLink></li>
        </>
        )
      // {/* galleries.records.map(record =>{
//
//<NavLink to={`/gallery/${record.id}`} > Gallery link </NavLink>

    // <NavLink to='/gallery/:"{galleries.records.id} '> {galleries.records.name} </NavLink>
    //   to = {`/galleries/${record.id}`
}


export default GalleryNavigation
