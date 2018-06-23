import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const {postId} = this.props.params;

    // get index of the post (get the url, which is passed down from params from react router)
    const i = this.props.posts.findIndex((post) => post.code === postId);
    
    // the index gets us the post
    const post = this.props.posts[i];
    
    // get comments
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
});

export default Single;