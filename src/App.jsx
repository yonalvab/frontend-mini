import { useState } from 'react'


import './index.css'
import { Login } from './components/Login'
import { MyProfile } from './components/MyProfile'
import { ChangeInfo } from './components/ChangeInfo'
import { Register } from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/myprofile' element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App
