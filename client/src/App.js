import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import HomePage from 'components/HomePage'
import Login from 'components/Login'
import ProfilePage from 'components/ProfilePage'
import Signup from 'components/Signup'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ThemeProvider> */}
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={<HomePage /> }
            />
            <Route
              path="/profile/:userId"
              element={ <ProfilePage /> }
            />
          </Routes>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  )
}

export default App
