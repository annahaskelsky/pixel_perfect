import React from 'react'
import { Switch, Route } from 'react-router'
import { HomePage } from './pages/home-page';
import { Navbar } from './cmps/navbar';

export const RootCmp = () => {
  return (
    <div className="main-container">
      <header>
        <Navbar />
      </header>
      <main className="app-main full">
        <Switch>
          <Route component={HomePage} path='/' />
        </Switch>
      </main>
    </div>
  )
}


