import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Volunteer from './Pages/Volunteer'
import Event from './Pages/Event'
import Donate from './Pages/Donate'
import Contact from './Pages/Contact'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PostJob from './Pages/PostJob'
import Portal from './Pages/Portal'
import ChatBox from './Pages/ChatBox'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'
import Example from './Pages/Example'





const router =createBrowserRouter(
 
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/volunteer" element={<Volunteer/>}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/portal" element={<Portal/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/postjob" element={<PostJob/>}/>
      <Route path="/chatbox" element={<ChatBox/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path="/termsandcondition" element={<TermsAndConditions/>}/>
      <Route path="/example" element={<Example/>}/>

    </Route>
      
  )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
