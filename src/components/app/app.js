import React, {Component} from "react";
import Header from "../header";
import NewsBoard from "../content/news-board";
import Sidebar from "../side-bar";
import Footer from "../footer";
import NewPostDialog from "../content/new-post-dialog";
import ProfileCard from "../../components/content/profile-card";
import twitapiService from "../../containers/twitapi";

import "./app.css";
class App extends Component {
  state = {
    newComment: null,
    showDialog: null,
    showProfile: false,
    refresher: null,
    board: null,
  };
  constructor() {
    super();
    this.newPostDialog = null;
  }

  renderBoard = () => {
    this.setState({
      board: true,
    });
  };

  handleShowProfile = () => {
    this.newPostDialog = (
      <NewPostDialog
        onPushData={this.handlerPushData}
        onHidePostDialog={this.handlerHidePostDialog}
      />
    );
    this.setState({
      showDialog: true,
    });
  };

  handlerRenderProfile = () => {
    this.setState({
      showProfile: true,
    });
  };

  handlerHideProfileInfo = () => {
    this.setState({
      showProfile: null,
    });
  };

  handlerHidePostDialog = () => {
    this.setState({
      newPost: null,
    });
    this.newPostDialog = null;
  };

  handlerPushData = async (title, text, author = "Anonimus") => {
    const twitapi = new twitapiService();
    const data = {
      title: title,
      body: text,
      author: author,
    };
    await twitapi.pushData("posts", data);
    this.handlerHidePostDialog();
    this.setState({
      refresher: new Date(),
    });
  };

  componentDidMount() {
    this.setState({
      board: true,
    });
  }

  renderProfile = () => {
    if (this.state.showProfile) {
      return <ProfileCard onHideProfileInfo={this.handlerHideProfileInfo} />;
    } else return null;
  };

  showBoard = () => {
    if (this.state.board) {
      return <NewsBoard refresher={this.state.refresher} />;
    } else return null;
  };

  render() {
    const sidebarProps = {
      onRenderDialog: this.handleShowProfile,
      onRenderProfile: this.handlerRenderProfile,
    };
    return (
      <section className="app">
        <Header />
        {this.newPostDialog}
        {this.renderBoard()}
        {this.renderProfile()}
        <Sidebar {...sidebarProps} />
        <Footer />
      </section>
    );
  }
}

export default App;
