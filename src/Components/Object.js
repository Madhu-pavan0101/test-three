import React, { useEffect, useState } from 'react'
import {Table} from '@mantine/core'
function Object() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch(obj).then(resp=>{
    console.log(resp.data)
    setData(resp.data)
    })
  
  },[])



const obj={
  name:"Madhu",
  phonenumber:"93485749",
  email:"madhu@gmail.com",
  id:1
}

console.log(obj)
  return (
    <div>
      
      <Table classNames={'demo'}>
        <thead>
          <tr>
          <td>name</td>
          <td>phonenumber</td>
          <td>email</td>
          <td>id</td>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>{obj.name}</td>
            <td>{obj.phonenumber}</td>
            <td>{obj.email}</td>
            <td>{obj.id}</td>
          </tr>
        </tbody>
      </Table>
      
    </div>
  )
}

export default Object
