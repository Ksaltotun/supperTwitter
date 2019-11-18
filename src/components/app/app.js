import React, {Component} from 'react';
import Header from '../header'
import NewsBoard from '../content/news-board';
import Sidebar from '../side-bar';
import Footer from '../footer';
import NewPostDialog from '../content/new-post-dialog';
import ProfileCard from '../../components/content/profile-card';
import twitapiService from '../../containers/twitapi';

import './app.css';
class App extends Component {
    state = {
        newComment:null,
        showDialog: null,
        showProfile: null,
        refresher: null,
        board:null
    }
        
    renderBoard = () => {
        this.setState({
            board:<NewsBoard props={this.state.refresher}/>
        });
    }

    renderDialog = () => {
        this.setState({
            showDialog:<NewPostDialog props={[this.pushData, this.hidePostDialog]}/>
        })
    }

    renderProfile = () => {
        this.setState({
            showProfile:<ProfileCard props={this.hideProfileInfo}/>
        })
    }

    hideProfileInfo = () => {
        this.setState({
            showProfile:null
        })
    }

    hidePostDialog = () => {
        this.setState({
            showDialog:null
        }) 
    }

    pushData = (title, text, author = 'Anonimus') => {
        const twitapi = new twitapiService();
        const data = {
            'title':title,
            'body':text,
            'author':author
        };
        twitapi.pushData('posts', data);
        this.hidePostDialog();
        this.renderBoard();
    }

    componentDidMount (){
        this.renderBoard();
    }

    render() {
        
        const {showDialog, showProfile, board} = this.state;
        return (
            <section className="app">
            <Header/>
            {board}
            {showDialog}
            {showProfile}
            <Sidebar props={[this.renderDialog, this.renderProfile]}/>
            <Footer/>
            </section>
        );
    }
}

export default App


