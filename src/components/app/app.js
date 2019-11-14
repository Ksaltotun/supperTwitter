import React, {Component} from 'react';
import Header from '../header'
import NewsBoard from '../content/news-board';
import Sidebar from '../side-bar';
import Footer from '../footer';
import NewPostDialog from '../content/new-post-dialog';

import './app.css';
class App extends Component {
    state {
        vievBox: null
    }
    render() {
        
        return (
            <section className="app">
            <Header/>
            <NewsBoard/>
            {}
            <Sidebar/>
            <Footer/>
            </section>
        );
    }
}

export default App
