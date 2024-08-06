import React from "react"
import linkedinIcon from "../images/linkedinIcon.png"
import mailIcon from "../images/MailIcon.png"
export default function Information() {
    return(
        <div className="information">
            <h1 className="name">Laura Smith</h1>
            <p className="career">Frontend Developer</p>
            <p>laurasmith.website</p>
            <a href="https://www.linkedin.com/in/nattanat-lertariyamaythee-7555b2311/" target="_blank">
                <button className="email">Email</button>
            </a>
            <a href="https://www.linkedin.com/in/nattanat-lertariyamaythee-7555b2311/" target="_blank">
                <button className="linkedin">Linkedin</button>
            </a>
        </div>
    )
}