import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.jpg';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <form>
                <h1>Lixeira Inteligente</h1>
                    <h2>Faça seu Login</h2>
                    <input 
                        placeholder="E-mail"
                    />
                    <input 
                        placeholder="Senha"
                    />
                    <button className="button" type ="submit">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiArrowLeft size={16} color="#36AE7C" />
                        Ainda não tenho cadastro
                     </Link>
                </form>

            </section>

            <img src={logoImg} />
            
        </div>
    );
}