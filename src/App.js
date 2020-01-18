import React, { useEffect, useState } from 'react';
import './App.css';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

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

  async function handleAddDev(e) {
    e.preventDefault();

  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
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
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/20521378?s=460&v=4" alt="Gabriel Mendes"></img>
              <div className="user-info">
                <strong className="user-info">Gabriel Mendes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas mehlores tecnolodias de desenvolvimento web e mobile</p>
            <a href="https://github.com/gabrielmende17">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/20521378?s=460&v=4" alt="Gabriel Mendes"></img>
              <div className="user-info">
                <strong className="user-info">Gabriel Mendes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas mehlores tecnolodias de desenvolvimento web e mobile</p>
            <a href="https://github.com/gabrielmende17">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/20521378?s=460&v=4" alt="Gabriel Mendes"></img>
              <div className="user-info">
                <strong className="user-info">Gabriel Mendes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas mehlores tecnolodias de desenvolvimento web e mobile</p>
            <a href="https://github.com/gabrielmende17">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/20521378?s=460&v=4" alt="Gabriel Mendes"></img>
              <div className="user-info">
                <strong className="user-info">Gabriel Mendes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas mehlores tecnolodias de desenvolvimento web e mobile</p>
            <a href="https://github.com/gabrielmende17">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
