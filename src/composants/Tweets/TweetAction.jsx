import React, { useState } from 'react';
import './TweetAction.css'; // Importez le fichier CSS pour les styles

export default function TweetAction(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`tweet-action ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)} // Définir isHovered sur true lors du survol
      onMouseLeave={() => setIsHovered(false)} // Définir isHovered sur false lorsque le curseur quitte le composant
    >
      <img src={props.image} alt={props.action} />
      <span>{isHovered ? 'Hovered!' : props.action}</span> {/* Afficher 'Hovered!' lors du survol, sinon props.action */}
    </div>
  );
}
