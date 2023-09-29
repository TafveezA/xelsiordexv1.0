import React from 'react'
import MiddleSection from '../Components/MiddleSection'
import Header from "../Components/Header"
import Bottom from '../Components/Bottom'
import Footer from '../Components/Footer'
import Modal from '../Components/Modal'
import QR_Xumm from '../Components/QR_Xumm'
import "../Css/Style.css"

export default function LandingPage() {
    return (
        <>
            <main className=' overflow-hidden  '>

                <Header />
                <MiddleSection />
                <Bottom />
                <Footer />
            </main>
        </>
    )

}