import './NavBar.css'
const NavBar = (props) => {
    // const header = document.getElementById('NavBar')
    

    const handleActive = (e, stuff) => {
        e.preventDefault()
        const data = document.getElementsByClassName("navBtn");
        console.log(e.target)
        let btns =[...data]
        btns.forEach(btn => {
            btn.classList.remove("active")
        })
        e.target.classList.add("active")
        e.target.scrollIntoView(true)
        console.log(stuff)
        let el = document.querySelector(`${stuff}`)
        console.log("log", el)
        el.scrollIntoView(true);
    }

    return(
//   <nav className="contact">
            <nav id="NavBar" >
                {/* <div className="box_0">
                        <ProfilePic />
                    </div> */}
                <div className="navBar_container">
                    <div className="navBar_box_2">
                        <div onClick={(e)=>{handleActive(e,"#aboutMe")}} className="navBtn navBar_about-me">
                            Home
                        </div>
                    </div>
                    <div className="navBar_box_3">
                        <div onClick={(e)=>{handleActive(e,"#who-am-i")}} className="navBtn navBar_who-am-i">
                            Me?
                        </div>
                    </div>
                    <div className="navBar_box_4">
                        <div onClick={(e)=>{handleActive(e,"#skills")}} className="navBtn navBar_skills">
                            Skills
                        </div>
                    </div>
                    <div className="navBar_box_5">
                        <div onClick={(e)=>{handleActive(e,"#my-work")}} className="navBtn navBar_my-work">
                            My Work
                        </div>
                    </div>

                </div>
            </nav>
    )
}

export default NavBar;
