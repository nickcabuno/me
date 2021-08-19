import './App.css';
import construction from './assets/underconstructionwebsite.gif'

function App() {
  return (
    <div className="App">
        <p>
          hi im typically really good with this kind of thing but i've just been a little busy
        </p>
        <div>
          <img alt="construction" src={construction}/>
        </div>
        <p className="bottom">
          since you're here, you are probably someone i'm trying to impress
        </p> 
        <p className="bottom">
          so instead of showing you an unfinished, underwhelming site i will simply show you this stupid gif
        </p>
        <p className="bottom">if you'd like to see some actual work i've done: <a href="https://github.com/nickcabuno">GitHub</a>
        </p>
        <p className="bottom">
          if you'd like to ask me about why this still isn't finished yet: <a href="https://www.linkedin.com/in/nick-cabuno/">LinkedIn</a>
        </p>
    </div>
  );
}

export default App;
