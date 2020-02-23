import React from 'react';
import T from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.FilterForm}>
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
        className={styles.input}
        placeholder="Contact"
        type="text"
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};

export default Filter;
