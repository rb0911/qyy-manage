import React from 'react'
import App from '../app'
import Picture  from '../view/picture'
import Poetry  from '../view/poetry'
import Video  from '../view/video'
import Home from '../view/home'

const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/home', component: Home },
      { path: '/poetry', component: Poetry },
      { path: '/video', component: Video },
      {
        path: '/picture',
        component: Picture,
        // childRoutes: [
        //   { path: '/messages/:id', component: Message },
        //   {
        //     path: 'messages/:id',
        //     onEnter: function (nextState, replaceState) {
        //       replaceState(null, '/messages/' + nextState.params.id)
        //     }
        //   }
        // ]
      }
    ]
  }
]

export default routeConfig
