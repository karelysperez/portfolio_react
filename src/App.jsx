import { Routes, Route } from "react-router-dom";
import './globals.css'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
import {Projects} from "./components/projectsPage/Projects.jsx";


export default function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/projects" element={<Projects />} />
                404: <Route path="*" element={<div>404</div>} />
            </Routes>
            <Footer />
        </>
    );

}

