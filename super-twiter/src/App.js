import React from 'react';
import './App.css';
import Head from './components/head';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Footer from './components/footer';

const App = () => { 
  return (
    <section className="mainBox">
      <Head/>
      <Sidebar/>
      <Content/>
      <Footer/>
    </section>
  )
}

export default App