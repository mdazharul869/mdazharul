/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { FcManager } from "react-icons/fc";
import { GiBookshelf } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";
import { Link } from "react-router-dom";
import './MainFoterMoabilMenu.scss';

const MainFoterMoabilMenu = () => {
  return (
    <section id='root--mobailLaptobMenu'>
        <div className='MoabailMenuSection'>
            <div className='container'>
                <div className='MobailMenupart'>
                    <div className='paddingcontainer'>

                        <div className='MobailMenuConatnt'>
                            
                            <div className='MobailMenuItems'>
                                <div className='ItemsMobailMenu'>
                                    <ul>

                                    <Link to={"/"} className='HomeLeftMenu'> <li className=''>  <span className=''><AiOutlineHome /> <p>Home</p></span></li></Link>

                                    <Link to={"/courses"} className='HomeLeftMenu'> <li className=''>  <span className=''><TbUsersGroup /> <p>Class</p></span></li></Link>

                                    <Link className='HomeLeftMenu'> <li className=''>  <span className=''><GiBookshelf /> <p>Course</p></span></li></Link>

                                        <Link className='SpicialMenu'> <li className=''>  <span className=''><i className='StatusActive'></i> <FcManager /> <p>ম্যানু</p></span></li></Link>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainFoterMoabilMenu
