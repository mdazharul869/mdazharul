/* eslint-disable no-unused-vars */
import React from 'react';
import { FcManager } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Header.scss";

export function Header ()  {
  return (
      <section>
        <header className='' id='root--header'>
            <div className='headerPart'>
                <div className='container'>
                    <div className='haeadersection'>
                        <div className='paddingcontainer'>

                            <div className='headercontainner overflow-hidden'>
                                
                                <div className='headerConatnt display-flexs'>
                                    
                                    <div className='HeaderFastSection'>
                                        <div className='HeaderLogoSection'>
                                            <div className='Headerlogo'>
                                               <Link> <h3>Md<span> Azharul</span></h3></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='HeaderMiddleSection'>
                                        <div className='HeaderMiddleConatiner'>
                                            <div className='HeaderMiddleConatnt'>
                                                <div className='HeaderMidddleItem'>
                                                    <ul>
                                                        <li><Link>Home</Link></li>
                                                        <li><Link>Course</Link></li>
                                                        <li><Link>Class</Link></li>
                                                        <li><Link>About US</Link></li>
                                                        <li><Link>Conatct</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='HeaderEndSection'>
                                        <div className='HeaderEndContainer'>
                                            <div className='HeaderEndConatnt'>
                                                <span className=''><FcManager />           <p>ম্যানু</p></span>
                                     
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
      </section>
   
  )
}

