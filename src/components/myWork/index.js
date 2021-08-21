import Carousel from "./Carousel";
import "./MyWork.css"
const MyWork = (props) => {

    return(
        <div id="my-work" style={{marginBottom:'20px'}}>
            <div style={{height:"725px"}} className="myWork">
                <h1>My Work</h1>
                <Carousel />
            </div>


        </div>
    )
}

export default MyWork;
