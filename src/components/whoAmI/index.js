import { useEffect, useState } from 'react';
import me1 from "./pics/inTheSun.jpg"
import me2 from "./pics/classA.png"
import me3 from "./pics/atHome.jpg"
import me4 from "./pics/family.jpg"
import me5 from "./pics/meAndLabeouf.jpg"
import me6 from "./pics/welding.jpg"
import me7 from "./pics/workinOut.jpg"

import "./WhoAmI.css"

const WhoAmI = () => {
    const [currentPic, setCurrentPic] = useState(0);


    return(
        <a id="who-am-i">
            <div  className="whoAmI">
                <h1>Who am I?</h1>
                <div className="my-pics" >
                    <div className="t-l pic" style={{backgroundImage:`url(${me7})`}}></div>
                    <div className="t-m pic">
                        <div className="words">
                            The military taught me a lot about my self.
                            I am a self starter. I am a effective communicator. I am a good leader and I am a great team player... Yes that is Shia Labeouf.
                    </div>
                    </div>
                    <div className="t-r pic" style={{backgroundImage:`url(${me5})`, backgroundPosition:" right 35% bottom 75%"}}></div>
                    <div className="c-l pic">
                        <div className="words">
                            Through spending as much time with my family as I can I have learned a lot of different skills.
                            The biggest skill I have learned is how to be empathetic and sympathetic.
                        </div>
                    </div>
                    <div className="c-m pic" style={{backgroundImage:`url(${me4})`}}></div>
                    <div className="c-r pic">
                        <div className="words">
                            As a parent, I have learned that hypocrisy is not an acceptable example.
                            So, I teach my children that if something is worth doing, then it should be worth doing to the best of your ability.
                            I start all my projects by deciding if my skill set is enough to meet the desired outcome.
                            </div>
                        </div>
                    <div className="b-l pic" style={{backgroundImage:`url(${me1})`, backgroundPosition:" right 35% bottom 70%"}} ></div>
                    <div className="b-m pic">
                        <div className="words">
                            Having spent years working in manufacturing, I realized those skills are directly translatable to software development.
                            Checking for bugs, debugging, and testing is the same as function testing and fixing the flaws.

                        </div>
                    </div>
                    <div className="b-r pic" style={{backgroundImage:`url(${me6})`, backgroundPosition:" right 35% bottom 50%"}}></div>
                </div>
            </div>
        </a>
    )
}

export default WhoAmI
