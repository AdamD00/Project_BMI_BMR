import React, {useState} from "react";
const FirstTab = () => {
    const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 


 function calcBmi (event){
    //zapobieganie submiting
    event.preventDefault()
    if(weight === 0 || height === 0)
    {
      alert('Wprowadz prawidłową wage i wzrost')
    }else {
      let heightInM = height/100
      let bmi = ((weight)/(heightInM*heightInM))
      setBmi(bmi.toFixed(1))

      if(bmi < 25){
        setMessage ('You are underweight')
      }else if(bmi >=25 && bmi <30)
      {
        setMessage ('You are a health weight')
      }else{
        setMessage('You are overweight')
      }
    }
 }
 let reload = ()=>{
  window.location.reload()
 }
  return (
    <div className="FirstTab outlet-firTab">
      <div label="BMI" className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit = {calcBmi}>
        <div>
          <label>Waga (kg)</label>
          <input value={weight} onChange={(e)=> setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Wzrost (cm)</label>
          <input value={height} onChange={(e)=> setHeight(e.target.value)}/>
        </div>
        <div>
          <button className = 'btn' type='submit'>Submit</button>
          <button className = 'btn btn-online' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
      <div className='center'>
      <h3>Twoje BMI wynosi: {bmi}</h3>
      <p>{message}</p>
      </div>
     </div>
    </div>
  );
};
export default FirstTab;