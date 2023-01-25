import './App.css';

import React, { useEffect, useState } from 'react';

import Title from './components/Title';
import Countdown from './components/Countdown';
import ProgressBar from "./components/ProgressBar";
import Description from "./components/Description";
import Uptime from "./components/Uptime";

export default function App() {
  const [data, setData] = useState({
    name: 'unknown',
    uptime: 'unknown',
    description: 'unknown',
    fullDesc: 'unknown',
    launchDate: {
      year: 2023,
      month: 1,
      day: 1,
    },
  })

  // const [data] = await Promise.all([cmsData])
  useEffect(() => {
    console.log("env", process.env)

    const fetchData = async () => {
      if (process.env.REACT_APP_SOON_CMS !== undefined && process.env.REACT_APP_SOON_PROJECT !== undefined) {
       await fetch(process.env.REACT_APP_SOON_CMS + process.env.REACT_APP_SOON_PROJECT)
         .then(response => {
           if (response.ok) {
             return response.json()
           }
           throw response
         }).then(data => {
           setData(data)
         }).catch(error => {
            console.error('Error fetching data: ', error)
         })
      }
    }

    fetchData().catch(console.error)
  }, [])

  document.title = data.name;

  return (
    <div id="gradient">
      <img src="../public/images/background.jpg" alt="gradient" className="hidden" />
      <div id="main_page">
        <Title siteName={data.name} />
        <div id="content">
          <Countdown year={data.launchDate.year} month={data.launchDate.month} day={data.launchDate.day} />
          <ProgressBar progress={data.progress} />
          <Description description={data.description} fullDesc={data.fullDesc} />
        </div>
        <Uptime status={data.uptime} />
      </div>
    </div>
  );
}
