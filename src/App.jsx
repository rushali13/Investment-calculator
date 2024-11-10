import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";
function App() {

  const [inputData, setInputData] = useState({
    "initialInvestment": 10000,
    "annualInvestment": 1200,
    "expectedReturn": 6,
    "duration": 10
  })

  function handleChange(event, inputLabel){
      setInputData((prevInputData)=>({
          ...prevInputData,
          [inputLabel]: +event.target.value
      }))
  }

  const inputIsValid = inputData.duration >= 1;

  return (
    <>
      <Header/>
      <UserInput inputData={inputData} handleChange={handleChange}/>
      {inputIsValid ? <ResultTable inputData={inputData}/> : <p className="center">Please enter a duration greater than zero </p>}
    </>
    
  )
}

export default App
