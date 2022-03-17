import React from 'react';
import Review from './Review';
import './reviews.css';
import { dataReview } from './data-review';

const Reviews = () => {
    return (
        <div className="reviews">
        <div className="reviews-head">
          <h1>our reviews</h1>
        </div>
        <main>
          <Review people={dataReview}/>
        </main>
      </div>
    )
}

export default Reviews;
