import React from 'react';
import './styles.css';

function DevItem({dev}) {
    return (
        <li key={dev._id} className="dev-item">
            <header>
                <img src={dev.avatar_url} alt="Gabriel Mendes"></img>
                <div className="user-info">
                    <strong className="user-info">{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
        </li>       
    )
}

export default DevItem;