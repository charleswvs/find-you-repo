import { uniqueId } from 'lodash'

// Salva ou atualiza um repositório
export const saveRepo = (repo) => {
  const repositories = JSON.parse(localStorage.getItem("repositories") || "[]");

  if(repo.id){
    const foundIndex = repositories.findIndex(r => r.id === repo.id);
    repositories[foundIndex] = repo;
  } else {
    repo.id = uniqueId();
    repositories.push(repo);
  }

  localStorage.setItem("repositories", JSON.stringify(repositories));
} 

// Traz a lista de repositórios salvos
export const getRepos = () => {
  return JSON.parse(localStorage.getItem("repositories") || "[]");
}

// Deleta um repositório
export const deleteRepo = (repo) => {
  const repositories = JSON.parse(localStorage.getItem("repositories") || "[]");

  if(repo.id){
    const foundIndex = repositories.findIndex(r => r.id === repo.id);
    repositories.splice(foundIndex, 1);
    localStorage.setItem("repositories", JSON.stringify(repositories));
  }
}