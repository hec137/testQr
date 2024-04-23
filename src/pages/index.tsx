import React from "react";
import Cookies from 'universal-cookie';
import Search from "../../components/search";

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
    <div style={{
      height:"100vh",
      width:"100vw",
      backgroundColor:"#1e1e1e",
      color:"#fff",
      position:"absolute",
      top:"0",
      left:"0"
    }}>
        <div style={{padding:"8px"}}>
          <Search />
          {value} 
          <br/>
          <button onClick={() => check()}>test</button>
        </div>
    </div>
  );
}

export default Home;