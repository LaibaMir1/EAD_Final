import React,{useState, useEffect} from 'react'

const TrafficLightSimulator = () => {
    
    const [currentLight , setLight] = useState('red'); 

    useEffect(()=>{
        const cycle = ['red', 'yellow','green']; 
        
        setLight(prev =>{
            const next = (cycle.prev+1)
            return cycle[next]; 
        }

        ), 3000}
    return () => clearInterval(interval); 
    }, []); 


  return (<>
   <style>{`
        .traffic-light {
          width: 50px;
          background: #333;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px; 
        }

        .light {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: black;
          transition: background 0.5s, box-shadow 0.5s;
        }

        .light.red.active {
          background: red;
          box-shadow: 0 0 15px red;
        }

        .light.yellow.active {
          background: yellow;
          box-shadow: 0 0 15px yellow;
        }

        .light.green.active {
          background: limegreen;
          box-shadow: 0 0 15px limegreen;
        }
      `}
      </style>

  {/* Traffic light */}
    <div className="traffic-light">
      <div className={`light red ${currentLight === 'red' ? 'active' : ''}`} />
      <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`} />
      <div className={`light green ${currentLight === 'green' ? 'active' : ''}`} />
    </div>

    </>
  ); 
}

export default TrafficLightSimulator;


