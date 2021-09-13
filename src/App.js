import './App.css';
import GlobalStyle from './globalStyles';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import SignUpSection from './Components/SignUpSection';
import SectionDiv from './Components/SectionDiv';
import PaymentSection from './Components/PaymentSection';
import Framework from './Components/Framework';
import NannyDiary from './Components/NannyDiary';
import {validateEmail} from './models/SignUp.js';
import ValidateInput from './contexts/ValidateInput';
import BecomeANanny from './Components/BecomeANanny';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <FirstSection />
        <SecondSection />
        <SectionDiv/>
        <ValidateInput.Provider value = {validateEmail}>
          <SignUpSection/>
        </ValidateInput.Provider>
        <SectionDiv/>
        <PaymentSection/>
        <SectionDiv/>
        <Framework/>
        <SectionDiv/>
        <NannyDiary/>
        <BecomeANanny/>
        <Footer/>
    </div>
  );
}
export default App;