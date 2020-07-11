import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const weather = async () => {
    try {
      //GETメソッドを使用してAPIを取得
      const weatherApi = await axios.get( 'http://api.openweathermap.org/data/2.5/weather?lat=33.5900446&lon=130.3983283&APPID=c891e50413bec9cb664f40eeab5d13b1' );
      
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
  const [val, setVal] = useState('a');
  const handleClick = (e) => {
    setVal(e.target.value);
  }
  
  return (
    <>
    <div className='radio-box'>
      <input type='radio' value='a' onChange={ handleClick } checked={val == 'a'} />Tokyo
      <input type='radio' value='b' onChange={ handleClick } checked={val == 'b'} />Kyoto
      <input type='radio' value='c' onChange={ handleClick } checked={val == 'c'} />Fukuoka
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
