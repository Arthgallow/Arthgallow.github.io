import "./ProfilePic.css"
import headShot from "./edited_img.jpg"
const ProfilePic = () => {
    return (
            <div className="profilePic">


                <div className="square_background"></div>
                <div style={{backgroundImage:`url(${headShot})`, backgroundSize:"cover ", backgroundRepeat:"no-repeat"}} className="octogon-2">
                {/* <div className="octogon-2"> */}

                    <div className="row_1-2">
                        <div className="rect_1-2"></div>
                        <div className="rect_2-2"></div>
                        <div className="rect_3-2"></div>
                    </div>
                    <div className="row_2-2">
                        <div className="rect_4-2"></div>
                        <div className="rect_5-2"></div>
                        <div className="rect_6-2"></div>
                    </div>
                    <div className="row_3-2">
                        <div className="rect_7-2"></div>
                        <div className="rect_8-2"></div>
                        <div className="rect_9-2"></div>
                    </div>
                </div>
                <div className="octogon">
                    <div className="row_1">
                        <div className="rect_1"></div>
                        <div className="rect_2"></div>
                        <div className="rect_3"></div>
                    </div>
                    <div className="row_2">
                        <div className="rect_4"></div>
                        <div className="rect_5"></div>
                        <div className="rect_6"></div>
                    </div>
                    <div className="row_3">
                        <div className="rect_7"></div>
                        <div className="rect_8"></div>
                        <div className="rect_9"></div>
                    </div>
                </div>

            </div>
    )
}

export default ProfilePic;
