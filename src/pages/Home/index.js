import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import RepositoryListItem from '../../components/RepositoryListItem';
import { getRepos } from '../../services/storage';

function Home() {
  const history = useHistory();
  const repos = getRepos();
  const [searchValue, setSearchValue] = useState("");
  const [filteredRepos, setFilteredRepos] = useState(repos);

  useEffect(() => {
    if(searchValue.length){
      const filtered = repos.filter(r => r.name.includes(searchValue));
      setFilteredRepos(filtered);
    } else{
      setFilteredRepos(repos)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  return (
    <div className="main-container main-container__high" >
      <h1 className="h1">
        Meus Repositórios
      </h1>
      <input 
        className="search-box" 
        placeholder="Buscar repositório" 
        type="text" 
        value={searchValue}
        onChange={(ev) => setSearchValue(ev.target.value)}
      />
      <div className="results-list">
        {filteredRepos.map(repo => 
          <RepositoryListItem 
            key={repo.id} 
            repository={repo} 
            onClick={() => history.push({
              pathname: "/repository",
              state: {
                repo
              }
            })}  
          /> 
        )}
      </div>
      <button className="button" type="button" onClick={() => history.push("/repository")}>
        Adicionar novo
      </button>
    </div>
  );
}

export default Home;