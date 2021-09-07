import './App.css';
import GlobalStyle from './globalStyles';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
