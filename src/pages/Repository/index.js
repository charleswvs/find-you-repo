import React, { useState } from 'react';
import { useHistory } from 'react-router';
import TechnologyItem from '../../components/TechnologyItem';
import { deleteRepo, saveRepo } from '../../services/storage';


const initialRepo = {
  orgPicture: '',
  name: '',
  technologies: []
}

const technologies = [
  'Javascript',
  'Skala',
  'Java',
  'Ruby',
  'CSS',
  'MySQL',
  'Postgres',
  'Kotlin',
  'C',
  'Objective-C',
  'C++',
  'Go',
  'Typescript',
  'Less'
]


function Repository() {
  const history = useHistory();
  const [repository, setRepository] = useState(history.location.state?.repo || initialRepo);

  const hasTech = (tech) => repository.technologies.some(t => t === tech);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepository((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSelectTech = (tech) => {
    const technologies = repository.technologies;
    const idx = technologies.findIndex(t => t === tech)

    if(idx >= 0) {
      technologies.splice(idx, 1);
    } else {
      technologies.push(tech);
    }

    setRepository(current => ({
      ...current,
      technologies
    }))
  }

  const handleSave = () => {
    saveRepo(repository);
    history.push('/')
  }

  const handleDelete = () => {
    deleteRepo(repository)
    history.push('/')
  }

  return (
    <div className="main-container main-container__high" >
      <h1 className="h1">
        {repository.id ? 'Editar Repositório' : "Novo repositório"}
      </h1>
      <div id="repo-list" className="results-list">
        <input 
          class="search-box" 
          placeholder="Link da imagem" 
          type="text" 
          name="orgPicture"
          value={repository.orgPicture}
          onChange={handleChange}
        />
        <div style={{height: 15}} />
        <input 
          class="search-box" 
          placeholder="Nome" 
          type="text" 
          name="name"
          value={repository.name}
          onChange={handleChange}
        />
        <div style={{height: 15}} />

        {technologies.map(tech => 
          <TechnologyItem
            key={tech}
            isTechSelected={hasTech(tech)}
            value={tech}
            onClick={() => handleSelectTech(tech)}
          />  
        )}
      </div>
      <button className="button" type="button" onClick={handleSave} >
        Salvar
      </button>
      {
        !!repository.id &&
        <span
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 10,
            color: "red",
            textDecoration: "underline"
          }}
          onClick={handleDelete}
        >
          Excluir
        </span>
      }
      
    </div>
  );
}

export default Repository;