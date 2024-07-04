import React, { useEffect, useState } from 'react';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('https://api.cartola.globo.com/clubes');
        const data = await response.json();
        setClubs(Object.values(data));
      } catch (error) {
        console.error('Erro ao buscar os clubes:', error);
      }
    };

    fetchClubs();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredClubs = clubs.filter(club =>
    club.nome.toLowerCase().includes(search.toLowerCase()) ||
    club.apelido.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Clubs">
        <header>
            <img className='senailogo' src='./senaiii.png'></img> 
            <h3>Guilherme Morales Rigo - 3C</h3>
        </header>
      <h1>Clubes</h1>
      <input 
        type="text" 
        placeholder="Pesquisar clubes" 
        value={search} 
        onChange={handleSearchChange} 
      />
       <div className="Clubs-list">
        {filteredClubs.map(club => (
          <div key={club.id} className="Clubs-item">
            <p></p>
            <img src={club.escudos['60x60']} alt={club.nome} />
            <div className="Clubs-info">
              <h2>{club.nome}</h2>
              <p>{club.apelido}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
