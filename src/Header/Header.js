import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";


export const LINKS = [
  {
    id: '1',
    to: 'posts',
    title: 'Posts'
  },
  {
    id: '2',
    to: 'auth',
    title: 'Auth'
  },
  {
    id: '3',
    to: 'main',
    title: 'Main'
  }
]

const Header = () => {
      const LogOut = () => {

  }

  return (
    <div className={classes.headerCont}>
       <ul className={classes.ul}>
           {/* {
             LINKS.map(link => {
              <li>
                  <NavLink className={({isActive}) => classNames(classes.link, {
                 [classes.active]: isActive
               })} 
                  to={link.to} 
                  >{link.title}</NavLink>
              </li>  
             })
           } */}
           <li>
               <NavLink className={({isActive}) => classNames(classes.link, {
                 [classes.active]: isActive
               })} to="posts" >Posts</NavLink>
           </li>
           <li>
               <NavLink className={({isActive}) => classNames(classes.link, {
                 [classes.active]: isActive
               })} to="auth" >Auth</NavLink>
           </li>
           <li>
               <NavLink className={({isActive}) => classNames(classes.link, {
                 [classes.active]: isActive
               })} to="main" >Main</NavLink>
           </li>
       </ul>
       <button className={classes.link} onClick={LogOut}>Log out</button>
    </div>
  );
}
export default Header;