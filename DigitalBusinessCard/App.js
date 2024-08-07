import React from "react"

import Profile from "./components/Profile"
import Information from "./components/Information"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App(){
    return (
        <div>
            <Profile />
            <Information />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
