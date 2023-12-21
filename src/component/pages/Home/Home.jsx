/* eslint-disable no-redeclare */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Home.scss"
import Projects from './Projects'
import aboutAzharul from "./image/profile-pic (10).png"


const Home = () => {


 

    const [skillopen , setSkilopen] = useState(true)
    const [skillopen2 , setSkilopen2] = useState(false)
    const [skillopen3 , setSkilopen3] = useState(false)

    const skillbtn1 = () =>{
        setSkilopen(!skillopen)
        setSkilopen2(false)
        setSkilopen3(false)
    }
    const skillbtn2 = () =>{
        setSkilopen2(!skillopen2)
        setSkilopen(false)
        setSkilopen3(false)

    }
    const skillbtn3 = () =>{
        setSkilopen3(!skillopen3)
        setSkilopen2(false)
        setSkilopen(false)



    }

    const  btnClick = () => {
    const e = document.querySelector('.box-animation')
      console.log(e.clientTop)
    }



    let arryIndex = 1 ;
    let myArray = ["Md Azharul", "Web Dvoloper",  "Youtuber" ];
    function textReprace() {
       setInterval(timer, 5000);

       function timer () {
        const typingText = document.querySelector('.word');
           if(arryIndex < myArray.length){
               typingText.innerHTML = myArray[arryIndex];
               arryIndex = arryIndex + 1;
           }else {
            arryIndex = 0 ;
            typingText.innerHTML = myArray[arryIndex];
            arryIndex = arryIndex + 1;

           }
   
       }
   
    }
       
    function myFuntion () {
        textReprace() ;
       // console.log(typingText)
    }


    // const handleKeyDown = (event) => {
    //     console.log( `${event} : presss` , event.key);
    //   };
    
    //   React.useEffect(() => {
    //     window.addEventListener('keydown', handleKeyDown);
    
    //     // cleanup this component
    //     return () => {
    //       window.removeEventListener('keydown', handleKeyDown);
    //     };
    //   }, []);
    React.useEffect(()=>{
        window.addEventListener("load", myFuntion())
        //window.addEventListener("load", textChage())
   
    })
  
 


  return (
    <div>
        <main className='main'>
        {/* <!--==================== HOME ====================--> */}
         <section className="home section" id="home">

            <div className="home__container container " id="home-conatiner">
                <div className="home__contant">
                    <div className="home_data">
                        <h3 className="home__subtitle">Hello, <span>I’m</span></h3>
                    <div className="chang_text">
                        <h1 className="home__title word"> Md Azharul</h1>

                    </div>
                    
                        <h3 className="home__education">Programmer, Trainer & Public Speaker</h3>
                        <p className="home__description">
                            With knowledge in web development and 
                            design, I offer the best projects resulting 
                            in quality work.
                        </p>
                        <Link href="#contact" className="button">{`Let's Talk`}</Link>
                    </div>
                    <div className="home__social">
                        <Link href="https://github.com/" target="_blank" className="home__social__icons">
                            <i className="ri-github-fill"></i>
                        </Link>
                        <Link href="https://dribbble.com/" target="_blank" className="home__social__icons">
                            <i className="ri-dribbble-line"></i>
                        </Link>
                        <Link href="https://www.linkedin.com/" target="_blank" className="home__social__icons">
                            <i className="ri-linkedin-box-fill"></i>
                        </Link>
                    </div>
                </div>
                <div className="home__image">
                    <div className='Model-of-azhar'>
                        <div className='Model-earth-azharul-fast-container'>
                            <div className='model-contants-all'>
                                <div className='model-fast-contant1-item1'>

                                    <div className='model-fast-contant1-item1-container'>
                                        <div className="model-fast-contant1-item1-container-canvas">
                                            <div className='canvas-1-item'></div>
                                        </div>

                                    <div className='model-secend-conatnt-2-item-2'>
                                        <div className='model-secend-conatnt-2-item-2-conatiner'>

                                            <div className='model-secend-conatnt-2-item-2-conatiner-canvas'>

                                                <div className='canvas-2-earth-border'>
                                      
                                                        <div className='canvas-earth-main-imag-container'>
                                                        <div className='border-nth-1-container'>
                                                            <div className='border-nth-1'>
                                                                
                                                            </div>
                                                        </div>
                                                            <div className='canvas-erath-img'>

                                                                <img src='https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png' />
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>

                                            <div className='model-secend-conatnt-3-item-3'>

                                                <div className='model-secend-conatnt-3-item-3-container'>
                                                    <div className='model-secend-conatnt-3-item-3-container-canvas'>
                                                    <div className='dim-3-parrt-model'></div>
                                                    </div>
                                               


                                                    <div className='model-secend-conatnt-4-item-4'>
                                                        <div className='ImageDev-model'>
                                                            <img src={"https://raw.githubusercontent.com/mdazharul869/all-img/main/Full%20Stack%20Web%20Developer_Full%20Stack%20Developer_front%20end%20developer_reac.js_node.js_developer_html_css_express.js_md%20azharul-%20web%20devoloper%20-%20font%20end%20devoloper%20-%20web%20aplication%20-%20html%20-%20css%20-%20java%20-%20e-commarce%20.png"} alt='' />
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         {/* <!-- ==================Brand Part ================== --> */}

         {/* <!--==================== ABOUT ====================--> */}
         <section className="about section" id="about">
            <div className="about__container container grid" id="about-container">
                <div className="about__data">
                    <h3 className="section__subtitle">
                        My <span>Intro</span>
                    </h3>

                    <h2 className="Who-is">
                        Who Is <span className='who-is-azharul'>Azharul<p>?</p> </span>
                    </h2>

                    <p className="about__description">
                        Md Azharul, Well known as Freelancer Azharul on social media networks like Facebook, YouTube, LinkedIn, Instagram and Twitter etc. He is a most popular Freelancer & a consultant of Freelancing Career in Bangladesh. Moreover, He is the Founder & CEO of a popular software development company and IT based training institute named Gurdiance It & Institute. Azharul is a rising star of the country & already has got huge attention from the media and government for his non-profit tasks. He won the heart of the millions of people providing lessons & consultants online.

                        Ultimately, He started forming his own software development company (Gurdiance It & Institute) in 2018. Finally the company was launched in 2021. Nowadays Gurdiance It is a top web design agency and software development company with a large pool of software developers available for dedicated and fixed time/cost projects.
                    </p>

                    <a href="about.html" target="_blank" className="button" id="button">
                        About More
                    </a>
                </div>

                <div className="about__image">
                    <div className='iamge-dev-svg-canvas-container'>
                        <div className='image-svg-canvas-contant'>
                            <div className='image-svg-canvas-items'>
                                <div className='image-svg-canvas'>
                                    <img src={aboutAzharul} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>
         </section>
         {/* <!--==================== ABOUT ====================--> */}

         {/* <!--==================== SKILLS ====================--> */}
         <section className="skills section">
            <div className="skill__container  container grid" id="skill__container">
                <div className="skill__data">
                    <h3 className="section__subtitle">
                        Favorite <span>Skills</span>
                    </h3>

                    <h2 className="section__title">
                        My Skills
                    </h2>

                    <p className="skill__description">
                        See fully what skills I have and perform, 
                        to develop the projects for you.
                    </p>

                    <a href="#projects"  target="_blank" className="button" id="button">
                        See Projects
                    </a>
                </div>
                <div className="skill__contant">
                    <ol className="skill_group">
                        <li className="skill__iteam">HTML & CSS</li>
                        <li className="skill__iteam">JavaScript</li>
                        <li className="skill__iteam">Bootstrap</li>
                        <li className="skill__iteam">React</li>
                    </ol>

                    <ol className="skill_group" start="5">
                        <li className="skill__iteam">Git & GitHub</li>
                        <li className="skill__iteam">Figma</li>
                        <li className="skill__iteam">Php</li>
                    </ol>
                </div>
            </div>

            {/* <!-- ===Skill % DAta Show ============ --> */}
            <div className="skill-container skill_per container grid">
          
              
                            <div className="skill___contant ">
                            <div onClick={skillbtn1} className="skill___header">
                                <i className="ri-braces-line skill_header_icon "></i>
                                <div className="skill_cursor">
                                    <h3 className="skill_title">Fontant Devoloper</h3>
        
                                    <span className="skill_subtitle">More Than 4 Years Old</span>
                                </div>
        
                                <i className="ri-arrow-drop-down-line skill_header_icon skill_header_arrow"></i>
                            </div>
        
        {
            skillopen && (
        
                            <div className="skill_list grid">
                                <div className="skill_data">
                                    <div className="skill_titles">
                                        <h3 className="skill_name">HTML</h3>
        
                                        <span className="skill_number ">
                                            90%
                                        </span>
                                    </div>
                                    <div className="skill_bar">
                                       <span className="skill_parcentice skill_html">
        
                                       </span>
                                    </div>
                                </div>
        
                                <div className="skill_data">
                                    <div className="skill_titles">
                                        <h3 className="skill_name">Css</h3>
        
                                        <span className="skill_number ">
                                            65%
                                        </span>
                                    </div>
                                    <div className="skill_bar">
                                       <span className="skill_parcentice skill_css">
        
                                       </span>
                                    </div>
                                </div>
                                <div className="skill_data">
                                    <div className="skill_titles">
                                        <h3 className="skill_name">Java Script</h3>
        
                                        <span className="skill_number ">
                                            80%
                                        </span>
                                    </div>
                                    <div className="skill_bar">
                                       <span className="skill_parcentice skill_java">
        
                                       </span>
                                    </div>
                                </div>
        
                                <div className="skill_data">
                                    <div className="skill_titles">
                                        <h3 className="skill_name">React</h3>
        
                                        <span className="skill_number ">
                                            90%
                                        </span>
                                    </div>
                                    <div className="skill_bar">
                                       <span className="skill_parcentice skill_rec">
        
                                       </span>
                                    </div>
                                </div>
        
                            </div>
            )
            }
                        </div>
                

                {/* <!-- ===skill======2=== --> */}
                <div className="skill___contant ">
                    <div onClick={skillbtn2} className="skill___header">
                        <i className="ri-braces-line skill_header_icon " ></i>
                        <div className="skill_cursor">
                            <h3 className="skill_title">End Devoloper</h3>

                            <span className="skill_subtitle">More Than 4 Years Old</span>
                        </div>

                        <i className="ri-arrow-drop-down-line skill_header_icon skill_header_arrow"></i>
                    </div>

                    {
                        skillopen2 && (
            

                    <div className="skill_list grid">
                        <div className="skill_data">
                            <div className="skill_titles">
                                <h3 className="skill_name">Node.Js</h3>

                                <span className="skill_number ">
                                    85%
                                </span>
                            </div>
                            <div className="skill_bar">
                               <span className="skill_parcentice skill_fire">

                               </span>
                            </div>
                        </div>

                        <div className="skill_data">
                            <div className="skill_titles">
                                <h3 className="skill_name">Fire Base</h3>

                                <span className="skill_number ">
                                    65%
                                </span>
                            </div>
                            <div className="skill_bar">
                               <span className="skill_parcentice skill_sql">

                               </span>
                            </div>
                        </div>
                        <div className="skill_data">
                            <div className="skill_titles">
                                <h3 className="skill_name">Php</h3>

                                <span className="skill_number ">
                                    90%
                                </span>
                            </div>
                            <div className="skill_bar">
                               <span className="skill_parcentice skill_php">

                               </span>
                            </div>
                        </div>

                        <div className="skill_data">
                            <div className="skill_titles">
                                <h3 className="skill_name">Paython</h3>

                                <span className="skill_number ">
                                    40%
                                </span>
                            </div>
                            <div className="skill_bar">
                               <span className="skill_parcentice skill_pay">

                               </span>
                            </div>
                        </div>

                    </div>

                        )
                        }
                </div>



                {/* <!-- ==============skill======33333333 --> */}
                <div className="skill___contant ">
                    <div onClick={skillbtn3} className="skill___header">
                        <i className="ri-braces-line skill_header_icon "></i>
                        <div className="skill_cursor">
                            <h3 className="skill_title">Designer</h3>

                            <span className="skill_subtitle">More Than 4 Years Old</span>
                        </div>

                        <i className="ri-arrow-drop-down-line skill_header_icon skill_header_arrow"></i>
                    </div>

{
    skillopen3 &&(


                    <div className="skill_list grid">
                        <div className="skill_data">
                            <div className="skill_titles">
                                <h3 className="skill_name">PhotoShop</h3>

                                <span className="skill_number ">
                                    88%
                                </span>
                            </div>
                            <div className="skill_bar">
                               <span className="skill_parcentice skill_pho">
                                   
                               </span>
                            </div>
                        </div>

                        <div className="skill_data">
                            <div className="skill_titles">
                                <h3 className="skill_name">Figma</h3>

                                <span className="skill_number ">
                                    53%
                                </span>
                            </div>
                            <div className="skill_bar">
                               <span className="skill_parcentice skill_fig">

                               </span>
                            </div>
                        </div>
                        <div className="skill_data">
                            <div className="skill_titles">
                                <h3 className="skill_name">Ui/UIX</h3>

                                <span className="skill_number ">
                                    78%
                                </span>
                            </div>
                            <div className="skill_bar">
                               <span className="skill_parcentice skill_ui">

                               </span>
                            </div>
                        </div>

                        <div className="skill_data">
                            <div className="skill_titles">
                                <h3 className="skill_name">Canva</h3>

                                <span className="skill_number ">
                                    95%
                                </span>
                            </div>
                            <div className="skill_bar">
                               <span className="skill_parcentice skill_can">

                               </span>
                            </div>
                        </div>

                    </div>
    )
     }
                </div>


               {/* <!-- container=============== --> */}
            </div>
         </section>
         {/* <!--==================== SKILLS ====================--> */}

         {/* <!--==================== SERVICES ====================--> */}
         <section className="services section" id="services">
            <h3 className="section__subtitle">
                My <span>Services</span>
            </h3>

            <h2 className="section__title">
              
                What I Do
            </h2>
            <div className="services__conatienr container grid">
                <article className="services__card">
                    <i className="ri-layout-3-line service__icon"></i>
                    <h2 className="services__title">Web Developer</h2>

                    <p className="services__description">
                        Development of custom web pages. 
                        Using current technologies and 
                        libraries of the labor field.
                    </p>
                </article>

                <article className="services__card">
                    <i className="ri-layout-3-line service__icon"></i>
                    <h2 className="services__title">Full Stack Devoloper</h2>

                    <p className="services__description">
                        Development of custom web pages. 
                        Using current technologies and 
                        libraries of the labor field.
                    </p>
                </article>
                <article className="services__card">
                    <i className="ri-layout-3-line service__icon"></i>
                    <h2 className="services__title">Cyber Secuirety</h2>

                    <p className="services__description">
                       I give your website Best secuire.
                    </p>
                </article>
                <article className="services__card">
                    <i className="ri-pantone-line service__icon"></i>
                    <h2 className="services__title">UI/UX Designer </h2>

                    <p className="services__description">
                        I offer design of web interfaces and 
                        mobile applications, design made in 
                        figma, adobe xd and sketch.
                    </p>
                </article>
                <article className="services__card">
                    <i className="ri-pen-nib-line service__icon"></i>
                    <h2 className="services__title">Graphic Design</h2>

                    <p className="services__description">
                       {` I make designs at the client's request, 
                        banner design, posters, digital 
                        designs among others.`}
                    </p>
                </article>
            </div>
         </section>
   {/* <!--==================== SERVICES ====================--> */}


   {/* <!--==================== PROJECTS ====================--> */}
            <Projects />

         </main>
        
    </div>

  )
}

export default Home
