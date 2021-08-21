import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import Footer from "../footer"
import "./Contact.css"


const Contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    return (
        <div id="my-contact">
            <form className="myContact" action="https://formsubmit.co/kirkumchris@gmail.com" method="POST">
                <h2>Feel free to drop me a line.</h2>
                <input type="hidden" name="_autoresponse" value="Thank you for the email.  I will be in touche ASAP! "></input>
                <input
                    type="hidden"
                    name="_subject"
                    value={`Thank you ${name}. I look forward to being in contact with you.`}
                    />
                <input
                    className="myContactInput name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    className="myContactInput email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <textarea
                    className="myContactInput message"
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required

                    />
                <button className="btn" type="submit">Send</button>
            </form>
            <Footer />
        </div>
    )
}

export default Contact
