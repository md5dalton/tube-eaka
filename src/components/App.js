import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from "./Layout"
import Home from "./pages/Home"
import Channel from "./pages/Channel"

import "./App.sass"

class App extends Component
{

  render () {
      return (
            <Router>
                <Layout>
                    <Routes>
                        {/* <Route path="/" element={<Home />} />
                        <Route path="/channel" element={<Channel />} /> */}
                    </Routes>              
                </Layout>
            </Router>
      )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)