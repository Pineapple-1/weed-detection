import React, { useEffect, useState } from 'react'
import Table from '../table/table'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import api from "../../api/index";

const RecommendPest = () => {
    const [product, setProduct] = useState('');

    useEffect(() => {
        async function fetchData() {
    
          const InsectisideRes = await api.get("/products/insectisides")
          console.log(InsectisideRes)
          setProduct(InsectisideRes.data.products)

        }
        fetchData();
    
    
      }, []);


  return (
<React.Fragment>
      <CssBaseline />

      <main>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <h2>Insecticide Product List</h2>

            {product?<Table name={"Insecticide"} data={product}/>:null}
        
        </Container>
      </main>
    </React.Fragment>


    )
}

export default RecommendPest