 
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import './App.css'
import {Signup} from './pages/Signup'

import {Signin} from './pages/Signin'

import {Blog} from './pages/Blog'
 
import {Bloggg} from './pages/OneBlog'

import { Publish } from './pages/Publish'

function App() {
  

  return (
    <>
  
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Signin />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/blog/:id" element={<Bloggg />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
