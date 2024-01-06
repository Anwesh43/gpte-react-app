import React from 'react';

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

// Functional component for Card
const Card: React.FC<CardProps> = ({ image, title, subtitle }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;