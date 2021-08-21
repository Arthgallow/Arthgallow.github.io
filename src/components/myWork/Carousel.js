import {useState, useEffect} from 'react';
import {imageArray1, imageArray2} from "./imageArray.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised, faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import {faSpotify, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import './Carousel.css'

function Carousel() {

    const [currentAudifyPic, setCurrentAudifyPic] = useState(0);
    const [currentKumitePic, setCurrentKumitePic] = useState(0);
    console.log(imageArray1);

    return (
        <div className="carousel" >
            <div className="carousel-inner" style={{marginRight:"32vw"}} >
                <div className="carousel-inner-left">
                    <div className="carouselInfo">{imageArray1[currentAudifyPic].description}</div>
                </div>
                <div className="carousel-inner-right">
                    <div className="carouselPics" style={{backgroundImage:`url(${imageArray1[currentAudifyPic].image})`}}>
                        <div className="left" ><FontAwesomeIcon className="arrow" icon={faCaretSquareLeft} onClick={(e)=>{
                                                if(currentAudifyPic > 0){setCurrentAudifyPic(currentAudifyPic-1)}
                                                if(currentAudifyPic == 0){setCurrentAudifyPic(imageArray1.length-1)}
                                                // currentAudifyPic > 0  && setCurrentAudifyPic(currentAudifyPic-1)
                                                }}/> </div>
                        <div className="center">
                            <h1 style={{position:"relative", top:"195px", right:"-150px", fontSize:"1.5em", width:"fit-content",color:"white", backgroundColor:"rgba(0,0,0,0.5)"}}>{imageArray1[currentAudifyPic].title}</h1>
                            <p>{currentAudifyPic.description}</p>
                        </div>
                        <div className="right" ><FontAwesomeIcon className="arrow" icon={faCaretSquareRight} onClick={(e)=>{
                                                    if(currentAudifyPic < imageArray1.length-1){ setCurrentAudifyPic(currentAudifyPic+1)}
                                                    if(currentAudifyPic === imageArray1.length-1){setCurrentAudifyPic(0)}
                                                    // currentAudifyPic < imageArray1.length-1 && setCurrentAudifyPic(currentAudifyPic+1)
                                                    }}/> </div>
                    </div>
                </div>
                <div style={{display:"flex", flexFlow:"column", marginLeft:"10px" }}>
                    <a href="https://github.com/dmontoya1600/spotify-clone" role="button" ><FontAwesomeIcon className="githubBtn" icon={faGithubSquare} /></a>
                    <a href="https://audify-app.herokuapp.com/" role="button" ><FontAwesomeIcon  className="liveBtn" icon={faSpotify}/></a>
                </div>
            </div>
            <div className="carousel-inner" style={{marginLeft:"32vw"}} >
                <div style={{display:"flex", flexFlow:"column", marginRight:"10px" }}>
                    <a href="https://github.com/Arthgallow/kumite" role="button" ><FontAwesomeIcon className="githubBtn" icon={faGithubSquare} /></a>
                    <a href="https://the-kumite.herokuapp.com/" role="button" ><FontAwesomeIcon  className="liveBtn" style={{fontSize:"1.8em"}} icon={faFistRaised}/></a>
                </div>
                <div className="carousel-inner-right" >
                    <div className="carouselPics" style={{backgroundImage:`url(${imageArray2[currentKumitePic].image})`}}>
                        <div className="left" ><FontAwesomeIcon className="arrow" icon={faCaretSquareLeft} onClick={(e)=>{
                                                    if(currentKumitePic > 0){setCurrentKumitePic(currentKumitePic-1)}
                                                    if(currentKumitePic == 0){setCurrentKumitePic(imageArray2.length-1)}
                                                    }}/> </div>
                        <div className="center">
                        <h1 style={{position:"relative", top:"195px", right:"-150px", fontSize:"1.5em", width:"fit-content"}}>{imageArray2[currentKumitePic].title}</h1>
                        <p>{currentKumitePic.description}</p>
                        </div>
                        <div className="right" ><FontAwesomeIcon className="arrow" icon={faCaretSquareRight} onClick={(e)=>{
                                                    if(currentKumitePic < imageArray2.length-1){setCurrentKumitePic(currentKumitePic+1)}
                                                    if(currentKumitePic == imageArray2.length-1){setCurrentKumitePic(0)}
                                                    // currentKumitePic < imageArray2.length-1 && setCurrentKumitePic(currentKumitePic+1)
                                                    }}/> </div>
                    </div>
                </div>
                <div className="carousel-inner-left">
                    <div className="carouselInfo">{imageArray2[currentKumitePic].description}</div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
