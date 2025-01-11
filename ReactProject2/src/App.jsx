import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/Footer.jsx'
import MainContent from './component/Main.jsx'
import Header from './component/Navbar.jsx'




function App() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

export default App
