import ProfilePic from '../profilePic'
import LaptopScreen from '../laptopScreen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookReader, faDiceD20,faDumbbell, faGuitar,faUserNinja, faDungeon, faChild, faMale, faFemale}from '@fortawesome/free-solid-svg-icons'
import {faGamepad, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faAngellist, faCriticalRole} from '@fortawesome/free-brands-svg-icons'
// import {faGithub} from '@fortawesome/free-brands-svg-icons'
import './AboutMe.css'



const AboutMe = (props) => {

    const growChild = () => {
        document.querySelector(".faChild").classList.add("faChild-grow")
        console.log(document.querySelector(".faChild"))
    }

    return(
        <>
        <div id="aboutMe" />

        <div  className="about-me-box">
            <div   className="about-me-left">


                <div className="about-me-pic" >
                    <ProfilePic className="aboutMe-pic"/>
                </div>

                <div className="aboutMe-info">
                    <div className="my-personal-info">
                        <h2 className="my-name">Christopher Kirkum</h2>
                        <h3 className="my-title">Full Stack Software Engineer</h3>
                        <h4 className="my-location">Portland, Oregon</h4>
                    </div>
                    <div className="my-contact-info">
                        <div className="my-contact-info-inner">
                            <div style={{textDecoration:"none"}} href="https://github.com/Arthgallow" className="my-gitHub myLink">
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <div style={{textDecoration:"none"}} href="https://www.linkedin.com/in/christopher-kirkum-27010a203/" className="my-linkedIn myLink">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                            <div style={{textDecoration:"none"}} href="https://angel.co/u/christopher-r-kirkum" className="my-angelList myLink">
                                <FontAwesomeIcon icon={faAngellist} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="about-me-right">
                <div className="about-me-right-inner">
                    <div className="bio-title">
                        <h1>Self Portrait</h1>
                    </div>
                    <div className="bio-content">
                      <div>
                        <FontAwesomeIcon className="faChild" icon={faChild} onClick={growChild} /> {"=>"} <FontAwesomeIcon className="faBookReader" icon={faBookReader} /> {"=>"} <FontAwesomeIcon className="faDumbbell" icon={faDumbbell} /> {"=>"}  <FontAwesomeIcon className="faUserNinja" icon={faUserNinja} /> {"=>"} <FontAwesomeIcon className="faDiceD20" icon={faDiceD20} /> {"=>"}
                        <FontAwesomeIcon className="faGamepad" icon={faGamepad} /> {"=>"} <FontAwesomeIcon className="faMale" icon={faMale} /> {"=>"} <FontAwesomeIcon className="faLaptopCode" icon={faLaptopCode}/> <div className="faLaptop-screen"><LaptopScreen/></div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

    export default AboutMe;
