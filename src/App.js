import React, { useEffect, useState } from 'react';
import api from './services/api';
import './App.css';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [devs, setDevs] = useState([]);
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords; 
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(latitude, longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 3000,
      }
    )
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
      console.log(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    console.log('handleAddDev');
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });
    setTechs('');
    setGithubUsername('');

    setDevs([...devs, response.data])
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="">Usuário do Github</label>
            <input 
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Técnologias</label>
            <input 
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">latitude</label>
              <input 
                type="number"
                name="latitude"
                id="latitute"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label type="number" htmlFor="longitude">Longitude</label>
              <input 
                type="number"
                name="longitute" 
                id="longitude" 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
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
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
