import React from 'react'
import './landingpage.css'

export const Button = () => {
  return (
        <button class="btn" type="button">
        <strong>Introduction</strong>
        <div id="container-stars">
            <div id="stars"></div>
        </div>

        <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
        </button>
  )
}
