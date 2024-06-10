import { useState } from "react";

function Home() {
  const [count,setCount] = useState(0);
  
  const hanldeIncrease = ()=>{
    setCount(count+1)
  }

  return (
  <>
  <button onClick={hanldeIncrease}>{count}</button>
  <h1>Home Page</h1>
  </>
  );
}

export default Home;
