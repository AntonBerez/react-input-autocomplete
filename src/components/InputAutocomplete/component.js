import React from 'react';
import './component.css';

function InputAutocomplete(props) {
  return (
    <div className='input-autocomplete'>
      <input
        type='text'
        value={props.value}
        onChange={props.handleChange}
      />
      <ul>
        {props.suggestedUsers.map((user, index) =>
          <li key={index} onClick={() => props.selectUser(user)}>{ user }</li>
        )}
      </ul>
    </div>
  )
}

export default InputAutocomplete;
