import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';


/*
Navbar design:
    div1: login-logout button on the right corner
    div2: logo in middle of page
    div3: navbar button in middle of page and search bar on the right corner
 */

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['Women', 'Men', 'Divided', 'Baby', 'Kids', 'H&M HOME', 'Beauty', 'Sport', 'Sale', 'Sustainability'];
    let [width, setWidth] = useState(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const search = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`)

        }
    }

    function logout() {
        setAuthenticate(false);
        dispatch(authenticateAction.logout(authenticate));
    }


    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className="login-box">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>
                {authenticate ? (
                    <div onClick={logout}>
                        <FontAwesomeIcon icon={faUser} />
                        <span className='login'>Logout</span>
                    </div>
                ) : (
                    <div onClick={() => navigate("/login")}>
                        <FontAwesomeIcon icon={faUser} />
                        <span className='login'>Login</span>
                    </div>
                )}
            </div>


            <Link to="/">
                <div className='logo-box'>
                    <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" />

                </div>
            </Link>
            <div className='nav-box'>
                <div className='menu-box'>
                    <ul className='nav-menu'>
                        {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
                    </ul>
                </div>

                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='input-bar' type="text" onKeyDown={(e) => search(e)}></input>

                </div>
            </div>


        </div>

    )
}

export default Navbar