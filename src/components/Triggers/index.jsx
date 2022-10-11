import React from 'react'
import s from './index.module.css'

export default function Triggers({ change_eng, change_rus }) {
  return (
    <div className={s.triggers_container}>
      <button onClick={change_eng}>Eng</button>
      <button onClick={change_rus}>Rus</button>
    </div>
  )
}