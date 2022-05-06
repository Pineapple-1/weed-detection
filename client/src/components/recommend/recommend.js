import React, { useEffect, useState } from 'react'
import Table from '../table/table'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import api from "../../api/index";

const Recommend = () => {
    const [herb, setHerb] = useState('');

    useEffect(() => {
        async function fetchData() {
    
          const HerbisideRes = await api.get("/products/herbisides")
          console.log(HerbisideRes)
          setHerb(HerbisideRes.data.products)
        }
        fetchData();
    
    
      }, []);


  return (
<React.Fragment>
      <CssBaseline />

      <main>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <h2>Herbiside Product List</h2>

            {herb?<Table name={"Herbiside"} data={herb}/>:null}
        
        </Container>
      </main>
    </React.Fragment>


    )
}

export default Recommend