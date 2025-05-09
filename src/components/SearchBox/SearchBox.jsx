import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleQuery = (query) => {
    dispatch(changeFilter(query));
  };

  const queryId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={queryId}>Find contacts by name</label>
      <input
        type="text"
        name="query"
        value={filter}
        onChange={(evt) => handleQuery(evt.target.value)}
        id={queryId}
        autoComplete="off"
      />
    </div>
  );
};
export default SearchBox;
