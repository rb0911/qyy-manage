import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { Button } from '@mui/material'
import HeaderComponent from './components/header'
import Footer from './components/footer'
import WelCome from './components/welcome'
import Picture from './view/picture'
import Poetry from './view/poetry'
import Video from './view/video'
import Home from './view/home'

import './css/common.scss'
import './css/animation.css'
import './css/light-text.css'

export default function PersionalWeb() {
  return (
    <div className='per-container container'>
      <HeaderComponent />
      <ul style={{'marginTop': '100px'}}>
          <li><Link to="/app/home">About</Link></li>
          <li><Link to="/app/poetry">Inbox</Link></li>
        </ul>
      <div className='content-container'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
