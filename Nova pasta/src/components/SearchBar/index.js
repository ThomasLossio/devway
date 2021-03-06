import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setSearchSchoolRequest } from '../../store/modules/school/actions';

export default function SearchBar() {
  const text = useRef('');
  const dispatch = useDispatch();

  function onChange() {
    dispatch(setSearchSchoolRequest(text.current.value));
  }

  return (
    <nav style={{ marginBottom: '30px', backgroundColor: '#402845' }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Pesquisar ocorrência"
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}
