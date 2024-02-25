import React from 'react';
import '../styles/FAQ.css';

function FAQPage() {
  return (
    <div className="faq-container">
      <h1 id="but">FAQ - Foire Aux Questions</h1>

      <div className="faq-section" >
        <div className="faq-question">
          <h2 >Quel est le but de l'application ?</h2>
          <p id="utilisation">
          Le but de l'application <b>Mem0rize</b> est d'aider les utilisateurs à mémoriser des mots français en utilisant des techniques de mnémotechnique.
          L'application génère des mots aléatoires que les utilisateurs peuvent ensuite mémoriser en utilisant différentes méthodes mnémoniques pour faciliter l'apprentissage.
          </p>
        </div>
      </div>
      <div className="faq-section" >
        <div className="faq-question">
          <h2>Comment utiliser l'application pour générer des mots français aléatoires ?</h2>
          <p id="mnemonique">
          Pour utiliser l'application et générer des mots français aléatoires, commencez par accéder au menu principal où vous trouverez un bouton intitulé 'Commencer'. 
          Une fois sur la page de génération, entrez le nombre de mots aléatoires que vous souhaitez générer (1 à 100), puis cliquez sur le bouton 'Générer' pour obtenir les mots souhaités.
          Une fois les mots générés, le joueur devrait mémoriser la liste fournie. 
          Ensuite, il peut cliquer sur le bouton "Prêt" pour indiquer qu'il est prêt à passer à l'étape suivante.
           Après cela, il doit inscrire dans l'ordre les mots mémorisés, en les séparant par des virgules et sans inclure les numéros correspondants. 
          Une fois les mots inscrits, il peut cliquer sur le bouton "Comparer" pour voir son score ou sur "Recommencer" pour recommencer le processus.
          </p>
        </div>
      </div>
      <div className="faq-section" >
        <div className="faq-question">
          <h2>Qu'est-ce que la mnémonique ?</h2>
          <p>
          La mnémonique est une technique utilisée pour faciliter la mémorisation en associant des informations à des images, des histoires, des acronymes ou d'autres moyens mnémotechniques.
          Dans le contexte de l'application, les utilisateurs peuvent utiliser des techniques mnémoniques pour associer les mots français à mémoriser à des images ou des scénarios familiers afin de les retenir plus facilement.
          </p>
        </div>
      </div>
      <div className="faq-section">
        <div className="faq-question">
          <h2>Quelles sont les différentes techniques de mémorisation recommandées ?</h2>
          <p>
            Il existe plusieurs techniques de mémorisation efficaces, telles que la méthode des lieux, la répétition espacée, les mnémoniques, la visualisation, etc. 
            Chaque personne peut trouver celle qui lui convient le mieux en fonction de son style d'apprentissage.</p>
        </div>
        <div className="faq-question">
          <h2>Comment puis-je utiliser la méthode des lieux pour mémoriser les mots ?</h2>
          <p>
            La méthode des lieux consiste à associer chaque mot à mémoriser à un endroit familier, comme votre maison ou votre trajet quotidien. 
            Vous pouvez ensuite imaginer chaque mot placé à des endroits spécifiques dans cet espace pour faciliter sa mémorisation.
            </p>
        </div>
        <div className="faq-question">
          <h2>Existe-t-il des exercices pratiques pour améliorer ma mémoire ?</h2>
          <p>
            Oui, il existe de nombreux exercices pratiques pour améliorer la mémoire, tels que les jeux de mémoire, les puzzles, les quiz, les fiches de révision, etc. 
            L'important est de pratiquer régulièrement pour renforcer votre capacité de mémorisation.
            vous pouvez trouver une variété de ressources supplémentaires pour cela, telles que des livres, des applications, des cours en ligne, des podcasts, des vidéos YouTube, des flashcards, etc. 
            Explorez différentes options pour trouver celles qui correspondent le mieux à vos besoins.
            </p>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-question">
          <h2>Comment contacter le support technique en cas de problème avec l'application ?</h2>
          <p>
            Si vous rencontrez un problème avec l'application, vous pouvez contacter notre responsable technique en envoyant un e-mail à <u>contact.tiantsoa@gmail.com</u>.
            Nous nous efforcerons de résoudre votre problème dans les plus brefs délais.
         </p>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
