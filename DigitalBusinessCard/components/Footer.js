import React from "react"
import TwitterIcon from "../images/TwitterIcon.png"
import FacebookIcon from "../images/FacebookIcon.png"
import Instagram from "../images/InstagramIcon.png"
import GitHubIcon from "../images/GitHubIcon.png"

export default function Footer() {
    return(
        <div className="footer">
            <a className="twitter" href="" target="_blank"><img src={TwitterIcon} /></a>
            <a href="https://www.facebook.com/nattanat.lerdariyamaythee" target="_blank"><img src={FacebookIcon} /></a>
            <a href="https://www.instagram.com/aomsub102/" target="_blank"><img src={Instagram} /></a>
            <a href="https://github.com/Aomsub101" target="_blank"><img src={GitHubIcon} /></a>
        </div>
    )
}