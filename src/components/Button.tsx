import  { ReactNode } from 'react'
import * as React from 'react'
type PropsType={
  children: ReactNode,
  onClick?: ()=>void,
  color?: string
}
const Button = ({children,onClick,color}:PropsType) => {
  return (
    <button
        onClick={onClick}
        style={{
            padding: '8px',
            borderRadius:'10px',
            backgroundColor: color,
            color:'white',
            cursor:"pointer",
            border:"none",    
        }}
    >
        {children}
    </button>
  )
}

const ButtonDanger = ({children,onClick,color}:PropsType) => {
  return (
    <button
        onClick={onClick}
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

const ButtonSuccess = ({children,onClick,color}:PropsType) => {
  return (
    <button
        onClick={onClick}
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