import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FireBaseContext } from '../../store/Context';

function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FireBaseContext);

  useEffect(() => {
    if (postDetails) {
      const { userId } = postDetails;
      firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
    }
  }, [postDetails, firebase]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        {postDetails && postDetails.url && (
          <img src={postDetails.url} alt="" />
        )}
      </div>
      <div className="rightSection">
        <div className="productDetails">
          {postDetails && postDetails.price && (
            <p>&#x20B9; {postDetails.price}</p>
          )}
          {postDetails && postDetails.name && (
            <span>{postDetails.name}</span>
          )}
          {postDetails && postDetails.category && (
            <p>{postDetails.category}</p>
          )}
          {postDetails && postDetails.createdAt && (
            <span>{postDetails.createdAt}</span>
          )}
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
