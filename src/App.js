import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const weather = async () => {
    try {

      //GETメソッドを使用してAPIを取得
      const weatherApi = await axios.get( 'http://api.openweathermap.org/data/2.5/weather?lat=33.5900446&lon=130.3983283&APPID=c891e50413bec9cb664f40eeab5d13b1' );
      const result = weatherApi["data"]["weather"][0]["main"];
      todayWeather(result);
    } catch (error) {

      //リクエストに失敗した時の処理
      alert("error!!");
    }
  }

  const todayWeather = (results) => {
    console.log(results);
    if (results == 'Clouds') {
      console.log(results); 
      return <img src='http://openweathermap.org/img/w/04d.png' />
    } else {
      console.log('donmai');
    }
  }
  
  return (
    <>
      <button onClick={ () => weather() }>aaaaa</button>
      {/* <>{ todayWeather }</> */}
    </>
  );
}

export default App;
