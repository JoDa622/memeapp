import React from 'react';
import Meme from './components/Meme';

const MemeList = ({ memes, onUpvote, onDownvote }) => {
  return (
    <div className="meme-list">
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} onUpvote={onUpvote} onDownvote={onDownvote} />
      ))}
    </div>
  );
};

export default MemeList;
