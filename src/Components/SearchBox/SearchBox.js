import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import styles from './SearchBox.css';

const SearchBox = ({ onChange, onClick, search_value }) => (
		<div className="search_blk">
		   	<div className="search">
			    <input type="text" value={search_value} onChange={onChange} className="searchTerm" placeholder="Search" />
			    <button type="submit" className="searchButton" onClick={onClick}>
			       <Icon name="search" />
			    </button>
			</div>
		</div>
 	);

SearchBox.propTypes = {
  submitSearch: PropTypes.func,
  onClick: PropTypes.func,
  search_value: PropTypes.string,
};

export default SearchBox;

