import React from 'react';

const PortfolioLink = () => {
  return (
    <div className="p-4 text-center flex flex-col justify-center h-[80vh]">
    <p className="text-text text-lg">
      For more such works of mine, check out my portfolio
    </p>
    <a
      href="https://www.hrushispace.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-secondary font-bold text-4xl mt-5 hover:underline"
    >
      hrushispace.com
    </a>
  </div>
  );
};

export default PortfolioLink;
