import React from 'react'
import GaugeChart from 'react-gauge-chart'

const Guage = ({data}) => {
    const setPercentage = ()=>{
                if(data === 0)
                {
                    return 0.05
                }
                else if (data >1 && data<3)
                {
                    return 0.5
                }else 
                {
                    return 0.90
                }
    }
  return (
<>
<GaugeChart
          id={"gauge-chart6"}
          nrOfLevels={3}
          percent={setPercentage()}
          hideText
          colors={["#4dabf5", "#FFBB28","#ff784e"]}
          style={{ width:"350px"}}
        />
</>
  )
}

export default Guage