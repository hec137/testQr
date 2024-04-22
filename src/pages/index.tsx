import React from "react";
import Cookies from 'universal-cookie';

const Home = () => {

  const cookies = new Cookies();
  const [value,setValue] = React.useState<string>("red");

  
  React.useEffect(() => {
    setInterval(() => {
      console.log(new Date(cookies.get("timestamp")));
      if(cookies.get("timestamp") == undefined || new Date().getTime() - 30000 > cookies.get("timestamp")){
        setValue("red");
      }
      else{
        setValue("green");
      }
    }, 1000);
  }, [])

  const check = () => {
    fetch("/api/setCookie");
  }

  return (
    <div>
      {value}
      <button onClick={() => check()}>test</button>
    </div>
  );
}

export default Home;