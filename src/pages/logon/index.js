import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function Logon(){
    return(
        <div>
            <Link to="/register" className="back-link">
                <FiArrowLeft size={16} color="#36AE7C" />
                Ainda não tenho cadastro
            </Link>
        </div>
    );
}