import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { useUserInfo } from "../contexts/UserProvider";
import classes from "./Header.module.css";
import { LINKS } from "../helpers/constants"
import { useDispatch } from "react-redux";
import { setUserLogout } from "../components/Profile/ReduxUser/userSlice";


const Header = () => {

  const { user, setUser } = useUserInfo()
  const dispatch = useDispatch()

  dispatch(setUserLogout(user))


  const LogOut = () => {

    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className={classes.headerCont}>


      <ul className={classes.ul}>
        {
          LINKS.map(link => {
            if (link.title === "Auth" && user) {
              return null
            }
            return (
              <li>
                <NavLink key={link.id} className={({ isActive }) => classNames(classes.link, {
                  [classes.active]: isActive
                })}
                  to={link.to}
                >{link.title}</NavLink>
              </li>
            )

          })
        }
      </ul>
      {
        user && (
          <div className={classes.headerInfo}>
            <div className={classes.Logo}>{user}</div>
            <button className={classes.link} onClick={LogOut}>Log out</button>
          </div>
        )
      }

    </div>
  );
}
export default Header