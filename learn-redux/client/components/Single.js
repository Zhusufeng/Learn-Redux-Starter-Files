import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // get index of the post (get the url, which is passed down from params from react router)
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    
    // the index gets us the post
    const post = this.props.posts[i];
    
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments />
      </div>
    );
  }
});

export default Single;