import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {

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

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
          });
    setTechs('');
    setGithubUsername('');
  }

    return (
        <form onSubmit={handleSubmit}>
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
    )
}

export default DevForm;