import React from 'react';
import './style.css';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.jpg';
import api from '../../services/api';

import {useState} from 'react';


export default function Login(){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    
    async function handleLogin(e){
        e.preventDefault();
        const data = {
            email,
            password
        }

        console.log(data)
        try{
            const response = await api.post('/login/user',data,{'content-type': 'application/json'});

            history.push('/register');
        }catch(err){
            alert("falha no login, tente novamente");
            console.log('Erro',err);
        }
    }
    
    
    return(
        <div className="login-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                <h1>Lixeira Inteligente</h1>
                    <h2>Faça seu Login</h2>
                    <input 
                        placeholder="E-mail"
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Senha"
                        onChange={e=>setPassword(e.target.value)}
                        type="password"
                    />
                    <button className="button" type = "submit">Entrar</button>
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