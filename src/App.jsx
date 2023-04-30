import { useState } from 'react';
import { getRamdomNumber } from './utils/getRamdom';
import phrases from './assets/phrases.json';
import Phrase from './components/phrase/phrase';
import Button from './components/Button/button';
import fortune1 from './img/fortuna-2/fortune1.jpg'
import fortune2 from './img/fortuna-2/fortune2.jpg'
import fortune3 from './img/fortuna-2/fortune3.jpg'
import fortune4 from './img/fortuna-2/fortune3.jpg'
import './App.css'

const backgrounds = [fortune1, fortune2, fortune3, fortune4];

function App() {
  const getRandomPhrase = () => phrases[getRamdomNumber(phrases.length - 1)];
  const getRandomBackground = () => 
  backgrounds[getRamdomNumber(backgrounds.length - 1)];

  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground());

  const changePhrase = () => {
    let newPhrase = getRandomPhrase();
    let newBackground = getRandomBackground();

    while (newPhrase === phraseObject.phrase) {
      newPhrase = getRandomPhrase();
    }

    while (newBackground === background) {
      newBackground = getRandomBackground();
    }

    setPhraseObject(newPhrase);
    setBackground(newBackground);
   
  };
    return (
    <div className="container_app" style={{backgroundImage: `url("${background}")`}}>
      <h1 className="titulo">Fortune Phrases</h1>
    <Phrase phrase={phraseObject.phrase}/>
    <p className="author">
      Autor: <mark>{phraseObject.author}</mark>
    </p>
    <div className="btn_container">
      <Button handlerClick={changePhrase}/>
    </div>
    </div>
    );
}

export default App;