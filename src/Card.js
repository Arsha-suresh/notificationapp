import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Card({ post }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="image" className="userImg"></img>
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="image" className="postImg"></img>
      <div className="interaction">
        {liked ? (
          <>
            <FavoriteIcon
              className="card_icons"
              sx={{ color: "red" }}
              onClick={()=>{setLiked(false)}}
            ></FavoriteIcon>
          </>
        ) : (
          <>
            <FavoriteBorderOutlinedIcon
              className="card_icons"
              onClick={()=>{setLiked(true)}}
            ></FavoriteBorderOutlinedIcon>
          </>
        )}
        <CommentIcon className="card_icons"></CommentIcon>
        <ShareIcon className="card_icons"></ShareIcon>
        <InfoIcon className="card_icons"></InfoIcon>
      </div>
    </div>
  );
}

export default Card;
