import React, { useState } from 'react'
import axios from 'axios';
import '../Style/Weather.scss'
import { MdArrowBackIosNew, MdLocationOn } from 'react-icons/md';
import { FaTint } from 'react-icons/fa';
import { IoMdThermometer } from 'react-icons/io';
import SpinnerSmall from '../Component/SpinnerSmall';
const WeatherPage = () => {
  const [searchCity, setSearchCity] = useState("")
  const [wrongCity, setWrongCity] = useState(false)
  const [show, setShow] = useState(false)
  const [iconImgsrc, setIconImgsrc] = useState("")
  //  給提示語
  const [loading, setLoading] = useState(false)
  // btn loading
  const [btnLoading, setBtnLoading] = useState(false)
  const [data, setData] = useState({})
  const [tempData, setTempData] = useState({})

  // URL
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=4245d3b0add44a38ccad25fd4f9f9869`

  async function getWeather(URL) {
    setWrongCity(false)
    setLoading(true)
    try {
      const response = await axios.get(URL);
      if (response.status === 200) {
        setWeatherIcon(response.data.weather[0].id)
        setData(response.data)
        setTempData(response.data.main)
        setShow(true)
        setSearchCity("")
      }
    } catch (error) {
      if (error.response.data.cod === '404') {
        setWrongCity(true)
      }
    } finally {
      setLoading(false)
      setBtnLoading(false)
    }
  }

  // 判斷要哪張圖
  const setWeatherIcon = (id) => {
    if (id === 800) {
      setIconImgsrc("/images/weather/clear.svg")
    } else if (id >= 200 && id <= 232) {
      setIconImgsrc("/images/weather/strom.svg")
    } else if (id >= 600 && id <= 622) {
      setIconImgsrc("/images/weather/snow.svg")
    } else if (id >= 701 && id <= 781) {
      setIconImgsrc("/images/weather/snow.svg")
    } else if (id >= 801 && id <= 804) {
      setIconImgsrc("/images/weather/snow.svg")
    } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
      setIconImgsrc("/images/weather/snow.svg")
    }
  };

  const getLocation = () => {
    setBtnLoading(true)
    var api
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=4245d3b0add44a38ccad25fd4f9f9869`
      if (latitude && longitude) {
        getWeather(api)
      }
    });
  }

  return (
    <div className="WeatherPage">
      <div className={show ? "wrapper active" : "wrapper"}>
        <header>
          {show &&
            <MdArrowBackIosNew
              onClick={() => {
                setShow(false)
              }}
            />
          }
          Weather App
        </header>
        {/* 輸入區 */}
        <section className="input-part">
          {/* Loading 提示語 */}
          {loading &&
            <p className="info-txt pending">
              取得天氣資訊...
            </p>
          }
          {wrongCity && !loading &&
            <p className="info-txt error">
              {searchCity}  不是一個城市名...
            </p>
          }
          <div className="inputWrap">
            <input
              type="text"
              placeholder="輸入城市名 (ex:Taipei)"
              spellCheck="false"
              disabled={loading}
              required
              value={searchCity}
              onChange={(e) => {
                console.log(e.key)
                setWrongCity(false)
                setSearchCity(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value !== "") {
                  console.log(e.target.value)
                  getWeather(weatherURL)
                }
              }}
            />
            <button>送出</button>
          </div>
          <div className="separator"></div>
          <button
            disabled={btnLoading}
            onClick={() => {
              getLocation()
            }}>
            {btnLoading ? <SpinnerSmall /> : " 目前位置天氣"}
          </button>
        </section>
        {/* 天氣圖 */}
        {show &&
          <section className="weather-part">
            <img src={iconImgsrc} alt="Wrather Icon" />
            {/* 氣溫 */}
            <div className="temp">
              {Math.floor(tempData.temp)}°C
            </div>
            <div className="weather">
              {data.weather[0].description}
            </div>
            <div className="location">
              <MdLocationOn />
              <span>{data.name} , {data.sys.country}</span>
            </div>
            {/* 體感溫度 */}
            <div className="bottom-details">
              <div className="column feels">
                <IoMdThermometer />
                <div className="details">
                  <div className="temp">
                    <span className="numb-2">
                      {Math.floor(tempData.feels_like)}
                    </span>
                    <span className="deg">°</span>C
                  </div>
                  <p>feels like</p>
                </div>
              </div>
              {/* 濕度 */}
              <div className="column humidity">
                <FaTint />
                <div className="details">
                  <span>
                    {tempData.humidity}%
                  </span>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </section>
        }
      </div>
    </div>
  )
}

export default WeatherPage