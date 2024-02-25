import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import '../styles/Prompt.css';



const API_KEY = process.env.REACT_APP_API_KEY;


const Prompt = () => {
  const [generatedWords, setGeneratedWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);
  const [recordedWords, setRecordedWords] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState('');
  const [missedWords, setMissedWords] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [displayMissedWords, setDisplayMissedWords] = useState(false);
const [showMoreMissedWords, setShowMoreMissedWords] = useState(false);



  const handleInputChange = (event) => {
    let value = parseInt(event.target.value);
    value = isNaN(value) ? '' : Math.min(Math.max(value, 1), 100);
    setWordCount(value);
  };

  const generateWords = async () => {
    setIsGenerating(true);
    setIsLoading(true);
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
    try {
      if (wordCount) { 
        const prompt = `Donnez ${wordCount} noms distincts d'objet ou de phénomènes communs et courants (avec une minorité de la liste peu courante) en français, de manière totalement aléatoire et imprévisible. Numérotez chaque mot.`;
        const options = { reset: true };
        const result = await model.generateContent(prompt, options);
        const response = await result.response;
        const text = await response.text();
        const generatedWords = text.trim().split('\n').filter(Boolean);
        setGeneratedWords(generatedWords);
        setErrorMessage(null);
      } else {
        setErrorMessage("Veuillez entrer un nombre positif avant de générer les mots.");
      }
    } catch (error) {
      console.error('Error generating words:', error);
    } finally {
      setIsLoading(false);
      setIsGenerating(false);
    }
  };

  const handleReadyToRecite = () => {
    setRecordedWords([])
    setRecordedWords([...generatedWords]);
    setShowComparison(true);
  };

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleComparison = () => {
    const userInputWords = userInput.split(',').map((word, index) => `${index + 1}. ${word.trim()}`);
    const { correctCount} = calculateScore(recordedWords, userInputWords);
    setScore(`${correctCount }/${recordedWords.length}`);
  };

 // Fonction pour retirer les accents d'une chaîne de caractères
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};


const compareWords = (word1, word2) => {
  return removeAccents(word1.toLowerCase()) === removeAccents(word2.toLowerCase());
};

const calculateScore = (recordedWords, userInputWords) => {
  let correctWords = new Set();
  let missedWords = recordedWords.filter(word => !userInputWords.some(userWord => compareWords(word, userWord)));
  userInputWords.forEach(userWord => {
    if (recordedWords.some(recordedWord => compareWords(recordedWord, userWord)) && !correctWords.has(userWord)) {
      correctWords.add(userWord);
    }
  });
  setMissedWords([]);
  setMissedWords(missedWords);
  return { correctCount: correctWords.size };
};

  
  const handlerRestart = () => {
    window.location.reload();
  };

  const handlerDispMissedWords = () => {
    if (displayMissedWords) {
      setShowMoreMissedWords(false); 
    } else {
      setShowMoreMissedWords(true); 
    }
    setDisplayMissedWords(!displayMissedWords); 
  };

  return (
    <div className="prompt-container">
      {isGenerating && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      {!showComparison ? (
        <div >
          {!generatedWords.length  && (
              <div>
              <p className='indication'>Saisissez le nombre de mot à générer.</p>
              {errorMessage && <p className="error-message">{errorMessage}</p>} 
                <input
                  type="number"
                  value={wordCount}
                  onChange={handleInputChange}
                  min={1}
                  max={100}
                  className={`word-count-input ${errorMessage ? 'shake' : ''}`}
                />
                <button onClick={generateWords} disabled={isLoading}>
                  {isLoading ? 'Chargement...' : 'Générer'}
                </button>
                
              </div>
          )}
        
          {generatedWords.length > 0 && (
            <div className="challenge-info">
              <h4>Préparez-vous à relever le défi !</h4>
              <p className="p">Les mots sont votre clé pour la victoire ! Mémorisez-les et appuyez sur 'Prêt' pour commencer votre quête !</p>
             
            </div>
          )}
          <div className="word-boxes">
            {generatedWords.map((word, index) => (
              <div key={index} className="word-box">
                {word}
              </div>
            ))}
          </div>
          
          {generatedWords.length > 0 && (
            <div className='inside-container'>
              <button onClick={handleReadyToRecite} className="ready-button">Prêt</button>
            </div> )}
            {generatedWords.length > 0  && (
              <div >
              <p className='indication'>Regénérer</p>
              {errorMessage && <p className="error-message">{errorMessage}</p>} 
                <input
                  type="number"
                  value={wordCount}
                  onChange={handleInputChange}
                  min={1}
                  max={100}
                  className={`word-count-input ${errorMessage ? 'shake' : ''}`}
                />
                <button onClick={generateWords} disabled={isLoading} className='regenerate-button'>
                  {isLoading ? 'Chargement...' : 'Regénérer'}
                </button>
              </div>
          )}
        </div>
      ) : (
        <div className="comparison-container">
          <h3>Mettez votre mémoire à l'épreuve ! </h3>
          <h4>Etape 1</h4>
            <p className="p">Entrez les mots dans l'ordre exact pour révéler votre score ultime.</p>
          <h4>Etape 2</h4>
            <p className="p"> N'oubliez pas de les séparer par des virgules.</p>
          <h4>Etape 3</h4>
            <p className="p">Vous n'avez pas besoin d'inclure les numéros.</p>
            <textarea 
              type="text"
              value={userInput}
              onChange={handleUserInputChange}
              placeholder="Listez dans l'ordre, avec virgules, sans numéros."
              className="comparison-input"
            />
        <div className='result-button'>
        <button onClick={handleComparison} className="compare-button">Comparer</button>
        <button onClick={handlerRestart}  className="restart-button">Rejouer</button>
        </div>
        {score && <p className="score-info">Votre score est : {score}</p>}
        {score && (
          <div>
            {/* 
           mots MAJ si > 1
          */}
          <p className="score-info">
            Vous avez eu {score.split('/')[0]} mot{score.split('/')[0] > 1 ? 's' : ''} juste{score.split('/')[0] > 1 ? 's' : ''} sur {recordedWords.length}.
          </p>
           </div>
        )}
  
            {missedWords.length > 0 && (
              <div>
                <p className="score-info">
                  {showMoreMissedWords ? "Cliquez pour voir moins de mots manqués." : "Cliquez pour voir plus de mots manqués."}
                </p>
                <button onClick={handlerDispMissedWords} className="display-button">
                  {showMoreMissedWords ? "Voir moins" : "Voir plus..."}
                </button>
              </div>
            )}
            {displayMissedWords!==false && (
              <div>
                <p  className="score-info-missed" >Voici les mots que vous avez ratés :</p>
                <div className="word-boxes-missed">
                  {missedWords.map((word, index) => (
                    <div key={index} className="word-box">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default Prompt;
