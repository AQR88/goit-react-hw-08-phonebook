import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label className={css.filterLabel}> Find contacts by name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Search"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
