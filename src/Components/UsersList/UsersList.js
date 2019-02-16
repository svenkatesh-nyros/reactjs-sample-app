import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import styles from './UsersList.css';

const UsersList = ({ users, res_status }) => (
		<Card.Group centered className={res_status ? 'users_list_grp res_cards' : 'users_list_grp'} >
	        {users.map(function(item,index){
	          return (
	              	<Card key={index} >
	                  	<Card.Content textAlign="center">
	                    	<Card.Description className="card_desc" textAlign="center">{item}</Card.Description>
	                  	</Card.Content>
	                </Card>
	            );
	        })}
	        {users && users.length <= 0 ? <div className="no_res_blk"><h5>No Results Found!</h5></div> : ''}
     	</Card.Group>
);

UsersList.propTypes = {
  users: PropTypes.array,
  res_status: PropTypes.bool,
};

export default UsersList;

