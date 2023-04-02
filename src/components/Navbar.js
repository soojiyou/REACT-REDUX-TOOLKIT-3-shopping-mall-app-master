import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


/*
Navbar design:
    div1: login-logout button on the right corner
    div2: logo in middle of page
    div3: navbar button in middle of page and search bar on the right corner
 */

const Navbar = () => {
    const menuList = ['Women', 'Men', 'Divided', 'Baby', 'Kids', 'H&M HOME', 'Beauty', 'Sport', 'Sale', 'Sustainability'];
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }
    const search = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`)

        }
    }

    return (
        <div>
            <div>
                <div className='login-box' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='login'>Login</div>
                </div>

            </div>
            <div className='logo-box'>
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"></img>

            </div>
            <div className='nav-box'>
                <div className='menu-box'>
                    <ul className='nav-menu'>
                        {menuList.map(menu => <li>{menu}</li>)}
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