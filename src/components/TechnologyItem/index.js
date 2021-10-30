import React from 'react';

function TechnologyItem({
  value,
  isTechSelected,
  onClick
}) {
  return (
    <span class="checkbox-wrapper" onClick={onClick}>
      <input 
        type="checkbox"
        id={value}
        name={value} 
        value={value}
        checked={isTechSelected}
        readOnly
      />
      <span class="checkbox-label">
        {value}
      </span>
    </span>
  );
}

export default TechnologyItem;