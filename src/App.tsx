import './App.css';
import SingleResponsibilityPrinciple from "./SingleResponsibilityPrinciple/index"
import { TitleWithButton } from './OpenClosedPrinciple';

function App() {
  return (
    <>
    { /*
      <SingleResponsibilityPrinciple />
  */}
      <TitleWithButton 
        title='Principios SolidReact'
        buttonText='Aloha'
        onClick={ () => {} }
      />
    </>
  );
}

export default App;
