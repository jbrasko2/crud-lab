import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const {reviews, restaurantId} = this.props
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)

    return (
      <ul>
        {associatedReviews.map((review, index) => <Review key={index} review={review} deleteReview={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;