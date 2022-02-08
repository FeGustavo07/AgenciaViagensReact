import React, { useRef } from "react";
import './styles.css'
import AreaInformacoes from './AreaInformacoes'
import Footer from "../Footer";
import undraw from '../../assets/undraw.svg'


export default () => {
    const commentSection = useRef()

    const goToCommentSection = () => window.scrollTo({
        top: commentSection.current.offsetTop,
        behavior: "smooth"
    })

    return (
        <div className="body-home">
            <div className="banner-area">
                <section className="titles">
                    <h1 className="sem-animacao">Bem vindo à Dream Trip!</h1>
                    <h1 className="typing-animation animado">Faça sua viagem dos sonhos</h1>
                </section>
                    <img src={undraw} className="undraw"/>
                <button onClick={goToCommentSection} className="hvr-sweep-to-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
            <span ref={commentSection}></span>
            <AreaInformacoes />
            <Footer />
        </div>
    )
}