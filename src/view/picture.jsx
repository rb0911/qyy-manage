import React from 'react'
import { Route, Link } from 'react-router-dom'
import Poetry from './poetry'
import Video from './video'

const Picture = () => {
  return (
    <div className='picture' style={{'color': '#ccc'}}>
     <ul>
          <li>
            <Link to='picture/poetry'>poetry</Link>
          </li>
          <li>
            <Link to='picture/video'>video</Link>
          </li>
        </ul>
      <div className='font-size-12'>
      {/* <Route path='/video'>
           <Video />
         </Route>
         <Route path='/poetry'>
           <Poetry />
         </Route> */}
      </div>
    </div>
  )
}

export default Picture