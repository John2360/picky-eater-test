import React, { useState } from 'react';
import './App.css';

function App() {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();
  };
  
  return (
    <div className="App">
        <div className={submit ? "modal open" : "modal"}>
          <div className='modal-container'>
            <h1 style={{textAlign: 'center'}}>Results</h1>
            <p>The results from the test indicate that the user is <b>100% a picky eater</b>. Thanks for using JF testing services.</p>
          </div>
          </div>
        <div className="banner">
          <h1>How picky of an eater is Olivia?</h1>
        </div>
        <p>Select the items you will not eat and them click submit to check your eating status.</p>
        <form onSubmit={handleSubmit}>
        <div class="line">
          <input type="checkbox" class="my-checkbox" value="1" />
          Uni
        </div>
        <div class="line">
          <input type="checkbox" class="my-checkbox" value="1" />
          Olives
        </div>
        <div class="line">
          <input type="checkbox" class="my-checkbox" value="1" />
          Sliced Bread
        </div>
        <button className='button' onClick={() => {setSubmit(true);}}>
          Submit
        </button>
        </form>
    </div>
  );
}

export default App;
