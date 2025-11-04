import { Routes, Route } from "react-router-dom";
import './styles/globals.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import {Projects} from "./components/Projects.jsx";


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

