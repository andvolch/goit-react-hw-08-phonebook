import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <div className={s.container}>
      <h3>Finde contacts by name</h3>
      <label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
