function InputField({label, id, value, type, onChange}){
    return(
        <div>
            <label for={id}>{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} required></input>
        </div>
    )
}

export default function UserInput({ inputData, handleChange}) {

  return (
    <div id="user-input" >
        <div className="input-group">
            <InputField  
                label="INITIAL INVESTMENT" 
                id="initial-investment" 
                type="number" 
                value={inputData.initialInvestment} 
                onChange={(event) => handleChange(event, "initialInvestment")}
            />
            <InputField  
                label="ANNUAL INVESTMENT" 
                id="annual-investment" 
                type="number" 
                value={inputData.annualInvestment} 
                onChange={(event) => handleChange(event, "annualInvestment")} 
            />
        </div>
        <div className="input-group">
            <InputField  
                label="EXPECTED RETURN" 
                id="Expected-return" 
                type="number" 
                value={inputData.expectedReturn} 
                onChange={(event) => handleChange(event, "expectedReturn")}
            />
            <InputField 
                label="DURATION" 
                id="duration" 
                type="number" 
                value={inputData.duration} 
                onChange={(event) => handleChange(event, "duration")}
            />
        </div>
        
    </div>
  )
}
