import React, {Component} from "react";
import twitapiService from "../../../containers/twitapi";
import CommentDialog from "../new-comment-dialog";
import NewsCard from "../news-card";

import "./news-board.css";

export default class NewsBoard extends Component {
  twitapi = new twitapiService();
  state = {
    postsRendered: null,
    selectedPostId: null,
    refresher: null,
  };
  constructor() {
    super();

    this.postsList = [];
  }
  //title, author, body, deleteFunc, showCommentDialog, hideCommentDialog
  async renderPosts() {
    const resp = await this.twitapi.getPosts();
    const posts = await resp.map(post => {
      return (
        <NewsCard
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          body={post.body}
          onDeleteFunc={this.handlerDeletePost}
          onShowCommentDialog={this.handlerShowCommentDialog}
        />
      );
    });
    this.postsList = [...posts];
    this.setState({
      postsRendered: this.postsList.length,
    });
  }

  handlerDeletePost = postId => {
    const buffArray = this.postsList.filter(post => {
      return post.key.toString() !== postId.toString();
    });

    this.postsList = [...buffArray];
    this.twitapi.deleteData(postId);
    this.setState({
      postsRendered: this.state.postsRendered - 1,
    });
  };

  handlerShowCommentDialog = postId => {
    this.setState({
      selectedPostId: postId,
    });
  };

  handlerHideCommentDialog = () => {
    this.setState({
      selectedPostId: null,
    });
  };

  handlerPushComment = async (postId, text) => {
    await this.twitapi.addComment(postId, text);
    this.handlerHideCommentDialog();
  };

  componentDidMount() {
    this.renderPosts();
  }

  componentDidUpdate() {
    if (this.state.refresher !== this.props.refresher) {
      this.setState({
        refresher: this.props.refresher,
      });
      this.renderPosts();
    }
  }

  render() {
    const {selectedPostId, postsRendered} = this.state;

    return (
      <section className="newsBoard ">
        {postsRendered === null ? null : this.postsList}
        {selectedPostId === null ? null : (
          <CommentDialog
            onHideCommentDialog={this.handlerHideCommentDialog}
            onPushComment={this.handlerPushComment}
            idForComment={selectedPostId}
          />
        )}
      </section>
    );
  }
}
