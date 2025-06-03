import React,{useState} from 'react'

const TrafficLightSimulator = () => {
    //useState for saving state of ligt 
    const [currentLight, setLight] = useState('red'); 
     
    useEffect(()=>{
        const cycle = ['red', 'yellow', 'green']; 
        const interval = setInterval(()=>{
            setLight(prev =>{
                const next = (cycle.indexOf(prev)+1)
                return cycle[next]; 
            })
        }, 3000)


      return () => clearInterval(interval);
    }, []);

  return (<>


    <div className="container">
      <div className="light-red" />
      <div className="light-yellow}" />
      <div className="light-green" />


    </div>
    </>
  )
}

export default TrafficLightSimulator
