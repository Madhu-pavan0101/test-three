import { Card, CardSection ,Image} from '@mantine/core'
import React, { useEffect, useState } from 'react'
import axios from "axios";
function CardsDemo() {
const url="https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
const[data,setData]=useState([])
useEffect(()=>{
  axios.get(url).then(resp=>(console.log(resp.data)))
},[])
console.log(data)

  return (
    <div>
      {
        data.map(it=>(
          <Card key={it.id}>
            <CardSection>{it.success}</CardSection>
            <CardSection>{it.total_photos}</CardSection>
            <CardSection>{it.message}</CardSection>
            <CardSection>{it.offset}</CardSection>
            <CardSection>{it.limit}</CardSection>
            <CardSection><Image src={it.photos}></Image></CardSection>
          </Card>
        ))
      }

    </div>
  )
}

export default CardsDemo
