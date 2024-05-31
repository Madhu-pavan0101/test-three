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

 //  Object
//  Object is collection of variables and Properties



const obj={
  name:"Madhu",
  phonenumber:"93485749",
  email:"madhu@gmail.com",
  id:1
}
console.log(obj)
  return (
    <div>
      
      <Table>
        <thead>
          <td>name</td>
          <td>phonenumber</td>
          <td>email</td>
          <td>id</td>
        </thead>
        <tbody>{obj.map(it=>(
          <tr key={it.id}>
            <td>{it.name}</td>
            <td>{it.phonenumber}</td>
          </tr>
        ))
          }

        </tbody>
      </Table>
      
    </div>
  )
}

export default Object
