import  { ReactNode } from 'react'
import * as React from 'react'
type PropsType={
  children: ReactNode,
  onClick?: ()=>void
}
const Button = ({children,onClick}:PropsType) => {
  return (
    <button
        onClick={onClick}
        style={{
            padding: '2px',
            borderRadius:'5px',
            backgroundColor:'blue',
            color:'white',
            cursor:"pointer",
            border:"none",    
        }}
    >
        {children}
    </button>
  )
}

const ButtonDanger = ({children}:PropsType) => {
  return (
    <button
        style={{
            padding: '2px',
            borderRadius:'5px',
            backgroundColor:'red',
            color:'white',
            cursor:"pointer",
            border:"none",    
        }}
    >
        {children}
    </button>
  )
}

const ButtonSuccess = ({children}:PropsType) => {
  return (
    <button
        style={{
            padding: '2px',
            borderRadius:'5px',
            backgroundColor:'green',
            color:'white',
            cursor:"pointer",
            border:"none",    
        }}
    >
        {children}
    </button>
  )
}

export {Button, ButtonDanger, ButtonSuccess}