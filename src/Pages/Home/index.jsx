import React from 'react'
import Card from '../../Components/Card'
import { useState } from 'react'
import { useEffect } from 'react';
import ProductDetail from '../../Components/ProductDetail';

function Home() {

  const [items, setItems] = useState (null);
  const apiUrl = 'https://fakestoreapi.com/products'

  useEffect( () => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => setItems(data))
  }, [] ) 

  console.log(items);

  return (

    <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
      {
        items?.map((item) => (
         <Card 
         key = {item.id}
         data = {item}
         />
        ))
      }
      <ProductDetail> </ProductDetail>
    </div>


  )
}

export default Home