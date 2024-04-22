import React from "react";
import Cookies from 'universal-cookie';

const Home = () => {

  const cookies = new Cookies();

  React.useEffect(() => {
    call();
  }, [])

  const call = async() => {
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
    await fetch('/api/setCookie');
  }

  return (
    <div>test app</div>
  );
}

export default Home;