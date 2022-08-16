import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from "./Layout"
import Home from "./pages/Home"
import Channel from "./pages/Channel"

import "./App.sass"


const percentage = 15
const billAmount = 0
let people = 0

people = people < 1 ?? 1

const getPrice = val => val.toFixed(2)

const tip = billAmount * (percentage/100)/people
const total = getPrice(billAmount/people)

// const getTip = (props.billAmount && props.people > 0) ? (props.billAmount * (props.percentage/100)/props.people).toFixed(2) : "0.00"
// const getTotal = (props.billAmount && props.people > 0) ? (props.billAmount * (1 + props.percentage/100)/props.people).toFixed(2) : "0.00"

// const getTip = getPrice(billAmount * (percentage/100)/people)
// const getTotal = getPrice(billAmount * (1 + percentage/100)/people)

const getTip = getPrice(tip)
const getTotal = total

function Output ({ percentage, billAmount, people }, ...props) {


}



class App extends Component
{

  render () {
      return (
            <Router>
                <Layout>
                    <div>tip: {getTip}</div>
                    <div>total: {getTotal}</div>
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