import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Card from '../components/Card.js';
import { HashLink as Link } from 'react-router-hash-link';
import appImage from '../assets/app.png';
import goalImage from '../assets/goal.png';
import mindImage from '../assets/mind.png';


const Home = () => {
  const [titleText, setTitleText] = useState("Memorize");

  useEffect(() => {
    const interval = setInterval(() => {
      const titleVariations = ["M3morize", "M3m0rize", "Mem0rize", "M3m0r1ze", "Mem0r1ze", "Mem0r1z3", "M3mor1ze", "M3mor1z3"];
      const randomIndex = Math.floor(Math.random() * titleVariations.length);
      setTitleText(titleVariations[randomIndex]);
    }, 800); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="title-container">
        <div><h1 className="home-title">{titleText}</h1></div>
      </div>
      <div className="content-container">
        <p className="app-description">Vous rêvez de devenir maître en mnémonique ?
        Notre application transforme l'apprentissage en un jeu addictif !
        Générez des listes de mots français à mémoriser dans un environnement ludique. 
        Votre voyage vers la maîtrise de la mémoire n'attend plus que vous !</p>
        <a href="/Générer" className="get-started-button">Commencer</a>
        <div className="cards-container">
          <Card
            image={goalImage}
            title="Quel est le but de l'application ?"
            description={<Link smooth to="/FAQ#but" className='card-link'>Voir la réponse</Link>}
          />
          <Card
            image={appImage}
            title="Comment utiliser l'application ?"
            description={<Link smooth to="/FAQ#utilisation" className='card-link'>Voir la réponse</Link>}
          />
          <Card
            image={mindImage}
            title="Qu'est-ce que la mnémonique ?"
            description={<Link smooth to="/FAQ#mnemonique" className='card-link'>Voir la réponse</Link>}
          />
        </div>
      </div>
  
    </div>
  );
}

export default Home;
