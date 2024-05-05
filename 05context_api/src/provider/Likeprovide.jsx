import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount( likeCount + 1);
  };

  return (
    <div>
      <span className='flex felx-row gap-1'>
      <img src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" alt=" "
        className="w-4 mt-1"  onClick={toggleLike} />
        <h5>{likeCount}</h5>
        </span>
    </div>
  );
}
export default LikeButton;
