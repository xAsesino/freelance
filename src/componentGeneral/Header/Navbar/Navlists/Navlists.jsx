import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../../../../Assets/Context/LangChanger';
import Navlistsdata from '../../../../Assets/Data/Header/Navlists.json';
import Planet from '../../../../Assets/Images/world.png';
import '../../../../Styles/Header/Navlists.css';

function Navlists({ lang }) {

    const { toggleLang } = useLang();
    const listData = lang === "fr" ? Navlistsdata.en : Navlistsdata.fr;

    return (
        <>

            <div className="navbar-links">

                <ul>

                    <li>

                        <NavLink to="/">

                            {listData.home}

                        </NavLink>

                    </li>

                    <li>
                        <NavLink to="/about">
                            {listData.about}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/project">
                            {listData.project}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact">
                            {listData.contact}
                        </NavLink>
                    </li>

                    <li>
                        <img src={Planet} alt="planet" className="langChange" onClick={toggleLang} title="langChanger" />
                    </li>

                </ul>

            </div>

        </>
    )
}

export default Navlists;