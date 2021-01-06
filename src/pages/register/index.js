import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.jpg';
import {FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img className="logo" src={logoImg} alt="Lixeira Inteligente"/>
                    <h1> Lixeira Inteligente</h1>
                    <p> Faça seu cadastro, entre na plataforma e troque seu lixo por pontos!</p> 
                    
                </section>

                <form>
                    <input
                        placeholder="Nome"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        placeholder="Celular"
                    />
                     <input
                        placeholder="Senha"
                    />
                    <button className="button" type="submit">Cadastrar</button>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#36AE7C" />
                        Já tem cadastro? Faça Login
                    </Link>
                </form>           
            </div>       
        </div>
    );
}