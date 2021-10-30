import React from 'react';

// Este é o elemento de repositório que aparece na tela home
function RepositoryListItem({
  repository,
  onClick,
}) {
  return (
    <div className="repo-wrapper" onClick={onClick}>
      <img src={`${repository.orgPicture || "https://i.pravatar.cc/300"}`} alt="avatar" className="repo-owner-image"/>
      <div className="repo-name-wrapper">
        <span className="repo-name">
          {repository.name}
        </span>
        <span className="repo-technologies">
          {repository.technologies.join(', ')}
        </span>
      </div>
    </div>
  );
}

export default RepositoryListItem;