import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [cityWeatherApi,setCityWeatherApi] = useState('http://api.openweathermap.org/data/2.5/weather?lat=35.5040531&lon=138.6485793&APPID=c891e50413bec9cb664f40eeab5d13b1');

  const weather = async () => {
    try {
      //GETメソッドを使用してAPIを取得
      const weatherApi = await axios.get( cityWeatherApi );
      
      //'result'に取得したAPIの中の「今日の天気データ」を代入
      const result = weatherApi["data"]["weather"][0]["main"];

      todayWeather(result);

    } catch (error) {
      //リクエストに失敗した時の処理
      alert("error!!");
    }
  }

  //'weatherImage(stateの初期値)'に画像データを挿入
  const weatherImage = null;

  //stateの箱の名前を'todaysWeather'、setStateを呼び出す名前を'setTodaysWeather'に設定
  const [todaysWeather,setTodaysWeather] = useState(weatherImage);

  //今日の天気によって表示される天気図が変わる関数
  const todayWeather = (results) => {
    switch (results) {
      case 'Clouds':
      setTodaysWeather('http://openweathermap.org/img/w/04d.png')
      break;

      case 'Snow':
      setTodaysWeather( 'http://openweathermap.org/img/w/13d.png' );
      break;

      case 'Rain':
      setTodaysWeather( 'http://openweathermap.org/img/w/09d.png' );
      break;

      case 'Clear':
      setTodaysWeather( 'http://openweathermap.org/img/w/01d.png' );
      break;

      case 'Fog':
      setTodaysWeather( 'http://openweathermap.org/img/w/50d.png' );
      break;

      case 'Mist':
      setTodaysWeather( 'http://openweathermap.org/img/w/50n.png' );
      break;

      case 'Haze':
      setTodaysWeather( 'http://openweathermap.org/img/w/50d.png' );
      break;

      default:
      setTodaysWeather( 'http://openweathermap.org/img/w/01n.png' );
    } 
  }

  //ラジオボタンの切り替えをするためのstate, 関数
  const [radio, setRadio] = useState( 'Tokyo' );

  //ラジオボタンの切り替えをによって取得するAPIを変更する関数
  const handleClick = (e) => {
    setRadio(e.target.value);
    switch (e.target.value) {
      case 'Tokyo':
      setCityWeatherApi('http://api.openweathermap.org/data/2.5/weather?lat=35.5040531&lon=138.6485793&APPID=c891e50413bec9cb664f40eeab5d13b1');
      break;
    
      case 'U.S.A':
      setCityWeatherApi('http://api.openweathermap.org/data/2.5/weather?lat=34.05&lon=-118.24&APPID=c891e50413bec9cb664f40eeab5d13b1');
      break;

      case 'Fukuoka':
      setCityWeatherApi('http://api.openweathermap.org/data/2.5/weather?lat=33.5900446&lon=130.3983283&APPID=c891e50413bec9cb664f40eeab5d13b1');
      break;
    }
  }
  
  return (
    <>
      <div className='radio-box'>
        <input type='radio' value='Tokyo' onChange={ handleClick } checked={radio == 'Tokyo'} />Tokyo
        <input type='radio' value='U.S.A' onChange={ handleClick } checked={radio == 'U.S.A'} />U.S.A
        <input type='radio' value='Fukuoka' onChange={ handleClick } checked={radio == 'Fukuoka'} />Fukuoka
      </div>
      <button onClick={ () => weather() }>天気を確認する</button>
      <div className='result-box'>
        <h1>今日の天気は？？</h1>
        <img src= { todaysWeather }/>
      </div>
    </>
  );
}

export default App;