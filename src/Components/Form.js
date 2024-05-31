import { Button, PasswordInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'

function Form() {
  const[name,setName]=useState('')
  const[phonenumber,setPhoneNumber]=useState('')
  const[Password,setPassword]=useState('')
const submitHandler=(e)=>{
  e.preventDeafult()
  console.log(name,phonenumber,Password)
}
const obj={
  name:name,
  phonenumber:phonenumber,
  Password:Password
}
console.log(obj)

  return (
    <div className='form-matine'>
      <form  onSubmit={submitHandler}>
      <TextInput placeholder='enter the name' type='name' label='Name Of User' variant='filled' value={name} onChange={(e)=>setName(e.target.value)}></TextInput>
    <TextInput placeholder='enter the phone number' label="User Phone Number" variant='filled' value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)}></TextInput>
    <PasswordInput label="Enter Correct Password" value={Password} onChange={(e)=>setPassword(e.target.value)}></PasswordInput>
   <Button>Submit</Button>
    </form>
    </div>
  )
}

export default Form
