import React from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersionalWeb from './app'
import Poetry from './view/poetry'
import Video from './view/video'
import Home from './view/home'
import Login from './view/login'
import rePosition from './utils/compatible'
// import pcResponsive from './utils/pcResponsive'

const initFunc = () => {
  reactDOM.render(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path='/app' element={<PersionalWeb />}>
        {/* <Route path='/' element={<Home />} /> */}
          <Route index path='home' element={<Home />} />
          <Route path='poetry' element={<Poetry />} />
          <Route path='video' element={<Video />} />
        </Route>
        <Route path='home' element={<Home />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

initFunc()
rePosition()

// pcResponsive()
// (function (doc, win) {
//   var doc = doc.documentElement;
//   doc.addEventListener('DOMContentLoaded', Resize, false);
//   // 当DOM加载后执行
//   win.addEventListener('resize', Resize, false);
//   if (doc.clientWidth) {
//   Resize();
//   } else {
//   setTimeout(Resize, 100)
//   }
//   // 当屏幕发生变化时执行
//   function Resize() {
//   doc.style.fontSize = doc.clientWidth / 19.2 + 'px';
//   }
//   })(document, window)
