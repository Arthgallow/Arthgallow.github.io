import "./Skills.css"
import docker from "./images/docker.png"
import express from "./images/express.png";
import node from "./images/node.png"
import react from "./images/react.png"
import postgress from "./images/postgress.png";
const Skills = (props) => {
    return (
        <a id="skills">
        <div style={{height:"725px"}} className="mySkills">
            <h1 className="header"> Yeah, I've got Skills...</h1>
            <div className="list">
                <li>
                    <img className="html img" src="https://clipart.info/images/ccovers/1499794874html5-js-css3-logo-png.png" alt="html css javaScript"/>
                </li>
                <li>
                    <img className="npm img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="npm"/>
                </li>
                <li>
                    <img className="pug img" src="http://blog.ippon.fr/content/images/2018/06/pugjs.png" alt="pug img"/>
                </li>
                <li>
                    <img className="express img" src={express} alt="express"/>
                </li>
                <li>
                    <img className="node img" src={node} alt="node"/>
                </li>
                <li>
                    <img className="react img" src={react} alt="react"/>
                </li>
                <li>
                    <img className="redux img" src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux"/>
                </li>
                <li>
                    <img className="python img" src="https://gss-technology.com/wp-content/uploads/2020/07/python.png" alt="python" />
                </li>
                <li>
                    <img className="flask img" src="https://pythonforundergradengineers.com/posts/zappa/images/flask_icon.png" alt="flask"/>
                </li>
                <li>
                    <img className="docker img" src={docker} alt="docker"/>
                </li>
                <li>
                    <img className="postgress img" src={postgress} alt="postgress"/>
                </li>
                <li>
                    <img className="sqlalchemy img" src="https://flask-sqlalchemy.palletsprojects.com/en/2.x/_static/flask-sqlalchemy-logo.png" alt="sqlalchemy"/>
                </li>
            </div>
        </div>
        </a>
    );
};

export default Skills;
