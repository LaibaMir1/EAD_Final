import React,{useState} from 'react'

const TrafficLightSimulator = () => {
    //useState for saving state of ligt 
    const [currentLight, setLight] = useState('red'); 
  
  return (<>
    {/* //light containers  */}
    <div className="container">
      <div className="light-red" />
      <div className="light-yellow}" />
      <div className="light-green" />
    </div>
    </>
  )
}

export default TrafficLightSimulator
