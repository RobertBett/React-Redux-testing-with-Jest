import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
    return (
      <div style={{margin:'50px'}}>
        <CommentBox></CommentBox>
      <CommentList></CommentList>
      </div>
    )
};