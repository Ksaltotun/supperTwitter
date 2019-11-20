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
    constructor () {
        super();
        this.newPostDialog = null 
    }
        
    renderBoard = () => {
        this.setState({
            board: true
        });
    }

    handlerRenderDialog = () => {
       this.newPostDialog = <NewPostDialog/>
       this.setState({
           showDialog: true
       })
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
            board: true
        })
    }

    showProfile = () => {
        if (this.state.showProfile) {return (
            <ProfileCard onHideProfileInfo = {this.handlerHideProfileInfo}/>
        )} else return null
    }

    showBoard = (newPostDialog) => {
        if (this.state.board) {return (
            <NewsBoard 
            newPostDialog={newPostDialog}
            />
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
            {this.showBoard (this.newPostDialog)}
            {this.showProfile ()}
            <Sidebar {...sidebarProps}/>
            <Footer/>
            </section>
        );
    }
}

export default App


