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
        showProfile: false,
        refresher: null,
        board:null
    }
        
    renderBoard = () => {
        this.setState({
            board: true
        });
    }

    handlerRenderDialog = () => {
       
    }

    handlerRenderProfile = () => {
        this.setState({
            showProfile:true
        })
    }

    handlerHideProfileInfo = () => {
        this.setState({
            showProfile:null
        })
    }

    handHidePostDialog (){
        this.setState({
            newPost:null
        }) 
    }

    pushData (title, text, author = 'Anonimus'){
        const twitapi = new twitapiService();
        const data = {
            'title':title,
            'body':text,
            'author':author
        };
        twitapi.pushData('posts', data);
        this.hidePostDialog();
    }

    componentDidMount (){
        this.setState({
            board: <NewsBoard/>
        })
    }

    showProfile = () => {
        if (this.state.showProfile) {return (
            <ProfileCard onHideProfileInfo = {this.handlerHideProfileInfo}/>
        )} else return null
    }

    showBoard = () => {
        if (this.state.board) {return (
            <NewsBoard/>
        )} else return null
    }

    render() {
        const sidebarProps = {
            onRenderDialog:this.handlerRenderDialog,
            onRenderProfile:this.handlerRenderProfile,
        }
        return (
            <section className="app">
            <Header/>
            {this.showBoard ()}
            {this.showProfile ()}
            <Sidebar {...sidebarProps}/>
            <Footer/>
            </section>
        );
    }
}

export default App


