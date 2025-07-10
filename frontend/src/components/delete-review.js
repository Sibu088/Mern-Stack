import React, { useState } from 'react';
import MovieDataService from '../services/movies';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const DeleteReview = props => {
   const [deleted, setDeleted] = useState(false);

   const deleteReview = () => {
      MovieDataService.deleteReview(props.match.params.id)
         .then(response => {
            setDeleted(true);
            console.log(response.data);
         })
         .catch(e => {
            console.log(e);
         });
   };

   return (
      <div>
         {deleted ? (
            <div>
               <h4>Review deleted successfully</h4>
               <Link to={'/movies/' + props.match.params.id}>
                  Back to Movie
               </Link>
            </div>
         ) : (
            <Form>
               <Form.Group>
                  <Form.Label>Are you sure you want to delete this review?</Form.Label>
               </Form.Group>
               <Button variant="danger" onClick={deleteReview}>
                  Delete
               </Button>
            </Form>
         )}
      </div>
   );
};

export default DeleteReview;