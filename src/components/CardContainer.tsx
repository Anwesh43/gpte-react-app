import React from 'react';
import Card from './Card';

export interface CardData {
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface CardContainerProps {
  cards: CardData[];
}

// Functional component for CardContainer
const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cards.map((card, index) => (
        <Card key={index} image={card.imageUrl} title={card.title} subtitle={card.subtitle} />
      ))}
    </div>
  );
};

export default CardContainer;