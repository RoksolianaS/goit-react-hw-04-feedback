import React from 'react';

const SectionTitle = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export { SectionTitle };