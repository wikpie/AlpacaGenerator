import './App.css';
import background from './alpaca-generator-assets/alpaca/backgrounds/blue50.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='app-title'><h1>Alpaca Generator</h1></div>
      </header>
      <div className='container'>
      <div className='image-generator'>
        <img src={background} alt="Background" />
      </div>
      <div className='right-side'>
      <div className='customize-text'><h2>Customize</h2></div>
      <div className='button-container button-customize'>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      </div>
      <div className='style-text'><h2>Style</h2></div>
      <div className='button-container button-style'>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      <button >Dupa</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
