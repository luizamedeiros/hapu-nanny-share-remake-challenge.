import './App.css';
import GlobalStyle from './globalStyles';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import SignUpForm from './Components/SignUpForm';
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
      <SignUpForm onFormSubmit={onFormSubmit}/>
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

function onFormSubmit(userData){
  const userName = userData.name;
  const userEmail = userData.email;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: userName, email: userEmail })
};
fetch('https://reqres.in/api/posts', requestOptions)
    .then(response => {
      console.log(response);
      let answer = response['status'].toString()
      if (answer.startsWith('2')){
        window.alert("Yay! You're one step closer to sharing!")
      }
      else{
        window.alert("Oh no! It seems like we're having trouble processing your request at this time. PLease try again later")
      }
    });
}