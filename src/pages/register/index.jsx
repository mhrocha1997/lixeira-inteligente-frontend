import React,{useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.jpg';
import {FiArrowRight} from 'react-icons/fi';
import { Link,useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Register(){
    const[nome,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            email,
            password
        };

        try{
            const response = await api.post('/create/user',data,{'content-type': 'application/json'});
            history.push('/')

        }catch (err){
            alert(err);
            
        }
    }
    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img className="logo" src={logoImg} alt="Lixeira Inteligente"/>
                    <h1> Lixeira Inteligente</h1>
                    <p> Faça seu cadastro, entre na plataforma e troque seu lixo por pontos!</p> 
                    
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome"
                        value={nome}
                        onChange={e =>setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value = {email}
                        onChange={e =>setEmail(e.target.value)}
                    />
                     <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                    <Link to="/" className="back-link">
                        Já tem cadastro? Faça Login
                        <FiArrowRight size={16} color="#36AE7C" />
                    </Link>
                </form>           
            </div>       
        </div>
    );
}