import React from 'react';
import './Style.css';
import {useState} from 'react';
import image1 from '../Assests/images/3d-minimal-weather-forecast-concept-partly-cloudy-in-the-morning-weather-icon-3d-illustration-png.webp';
// import wind from 'https://cdn.iconscout.com/icon/premium/png-512-thumb/wind-336-974466.png?f=webp&w=256'
import axios from 'axios';


function Temperature(){

const [inputvalue, setInput] = useState("");
const [weather, setwether] = useState({data:{},error:false});

const Search = (e)=>{
if (e.key === 'Enter'){
setInput("")
setwether({...weather})
e.preventDefault();
const url = 'https://api.openweathermap.org/data/2.5/weather';
const API_key = "557ad8ceaafb328973c2564cabe6fbe1";

axios.get(url,{params:{
    q:inputvalue,
    units:'metric',
    appid:API_key}
    
    
}).then((response)=>{
    console.log(response)
    setwether({data:response.data,error:false})
}).catch((error)=>{
    console.log(error)
    setwether({...weather,data:{},error:true})
})


}
}
    return(
        <div className="siteImage">
            <h3>Weather Monitoring App</h3>
            <div className='inputcontainer'>
                <input type='text' 
                placeholder='Enter city name..'
                value={inputvalue}
                onChange={(e)=>(setInput(e.target.value))}
                onKeyPress={Search}
                ></input>  
            </div>

            <div>
                {weather.error &&(<p>Something went to Wrong,Kindly Enter Valid City name..</p>)}
                
            </div>

            {weather && weather.data && weather.data.main &&( <div className='containerPane'>
                <h4>Weather App</h4>

                <div className='imagebox'>
                    <img src={image1} alt='sun'/>

                 </div>

                <div className='resultvalue'>
                   {Math.round(weather.data.main.temp)}
                   <span>°C | °F</span> 
                    <h3>{weather.data.name}, {weather.data.sys.country}</h3>
                </div>
            <div className='row'>
                <div className='col'>
                    <p>Wind Speed</p>
                    <h5>{weather.data.wind.speed} km/h</h5>
                </div>

                <div className='col'>
                    <p>Humidity</p>
                    <h5>{weather.data.main.humidity} %</h5>
                </div>

                <div className='col'>
                    <p>Atmosphere</p>
                    <h5>{weather.data.main.pressure} Pa</h5>
                </div>
            </div >
                <div className='dev_name'> 
                <small>Web Designed by Tamilselvan</small>
                </div>
        </div>)}
        
           
    </div>           
       
    )
}

export default Temperature;