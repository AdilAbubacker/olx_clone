import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { FireBaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import {useHistory} from 'react-router-dom'


function Posts() {

  const{firebase} = useContext(FireBaseContext)
  const [products, setProducts] = useState([])
  const {setPostDetails} = useContext(PostContext)
  const history = useHistory()

  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allpost = snapshot.docs.map((product)=>{
          return{
            ...product.data(),
            id:product.id
          }
      })
     
      setProducts(allpost)
    })
  }, [])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <h2>Quick Menu</h2>
          <button>View more</button>
        </div>
        <div className="cards">
          {products.map((product) => (
            <div
              className="card"
              key={product.id} // Make sure each item has a unique key
              onClick={() => {
                setPostDetails(product)
                history.push('/view');
              }}
            >
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={product.url} alt={product.name} />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="category">{product.category}</span>
                <h3 className="name">{product.name}</h3>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <h2>Fresh Recommendations</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="YAMAHA R15V3" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250,000</p>
              <span className="category">Two Wheeler</span>
              <h3 className="name">YAMAHA R15V3</h3>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
