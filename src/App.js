import './App.css';
import GlobalStyle from './globalStyles';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import SignUpSection from './Components/SignUpSection';
import SectionDiv from './Components/SectionDiv';
import PaymentSection from './Components/PaymentSection';
import Framework from './Components/Framework';
import NannyDiary from './Components/NannyDiary';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FirstSection />
      <SecondSection />
      <SectionDiv/>
      <SignUpSection/>
      <SectionDiv/>
      <PaymentSection/>
      <SectionDiv/>
      <Framework/>
      <SectionDiv/>
      <NannyDiary/>
      <SectionDiv/>
    </div>
  );
}
export default App;