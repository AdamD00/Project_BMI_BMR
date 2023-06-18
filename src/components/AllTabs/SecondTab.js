import React, {useState}from "react";
const SecondTab = () => {
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmr, setBmr] = useState(0)
  const [gender, setGender] = useState('')
  function calcBmr (event){
    
    event.preventDefault()
    
    if(weight === 0 || height === 0)
    {
      alert('Wprowadz prawidłową wage i wzrost')
    }else {
      let bmr = 0;
      if(gender === 'man')
    {
      
        bmr= (66+((13.7)*weight)+(5*height)-((6.8)*age))
    }else
    {
      
        bmr = (655+(9.6*weight)+(1.8*height)-(4.7*age))
    }
    setBmr(bmr.toFixed(2));
    }
 }
 let reload = ()=>{
  window.location.reload()
 }
  return (
    <div className="SecondTab outlet-secTab">
      <div label="BMI" className='container'>
      <h2 className='center'>BMR Calculator</h2>
      <form onSubmit = {calcBmr}>
        <div className="inputContainer item">
        <div>
        <label for="gender">Płeć</label>
          <select name="gender" id="gender"onChange={(e)=>setGender(e.target.value)}>
            <option value='man' >
              Man
            </option>
            <option value='woman'selected>
              Woman
            </option>
          </select>
        </div>
        <div>
          <label>Wiek</label>
          <input value={age} onChange={(e)=> setAge(e.target.value)}/>
        </div>
        <div>
        <label>Waga (kg)</label>
          <input value={weight} onChange={(e)=> setWeight(e.target.value)}/>
        </div>
          <div>
            <label>Wzrost (cm)</label>
            <input value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          
        </div>
        <div>
          <button className = 'btn' type='submit'>Submit</button>
          <button className = 'btn btn-online' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
      <div className='center'>
      <h3>Twoje BMR wynosi: {bmr} kcal</h3>
      </div>
     </div>
      
    </div>
  );
};
export default SecondTab;