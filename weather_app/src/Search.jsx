import React from 'react'
import './index.css'
import './App.css'
import { useState,useEffect } from 'react'
import { GalleryWithCarousel } from './GalleryWithCarousel'






function Search() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city,setCity]=useState("kelibia")
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  const apiKey = "85f059f27a1bb784785e5981c458775c";


  
  const handleSubmit = (event) => {
    
    event.preventDefault();
    setError(null); // Reset error state

    setIsLoading(true);
    fetchData();
  };
  const fetchData = async () => {

    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
      console.log("okeey");
     

    } catch (error) {
      console.log("erreuuur");
      setError(error.message);
    } finally {
      console.log("loading");
      
      setIsLoading(false);
    }
  };
  if (isLoading){
    return <div className="loader"></div>
  }

  if (error) {
    return <><div  className="loader"></div> <div>Error: {error}</div></>;
  }
  
  return (<>
    
<form className="flex items" onSubmit={handleSubmit}>   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}  id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
    </div>
    
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>



<div role="status" id='widget' >
  <div className='gallery'>
      <GalleryWithCarousel/>
      </div>
      <div className='cityName'>
  {data && (
    <h2 className="text-lg font-bold dark:text-white">
      City time: {new Date(new Date().getTime() + data.timezone * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false  })}
    </h2>
  )}
</div>


    <div className='cityName' >{data && <h2 className="text-lg font-bold dark:text-white">{data.name}</h2>}</div>
    <div >{data && <h2 className="text-lg font-bold dark:text-white">{data.weather[0].main} : {data.main['temp']}°C</h2>}</div>
    <div>
  {data && <h2 className="text-lg font-bold text-white">Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false  })}</h2>}
</div>
<div>
  {data && <h2 >Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false  })  }</h2>}
</div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="flex items-center mt-4">
       <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

    
  </>

)
}

export default Search
