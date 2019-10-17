import React from 'react';
import { connect } from 'react-redux';
import { getUsers, getSuggestedUsers } from '../../actions/users';

import InputAutocomplete from './component';

class InputAutocompleteContainer extends React.Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    const value = event.target.value;
    let suggestedUsers = [];
    if (value.length > 0) {
      suggestedUsers = this.props.users.filter((user) => {
        return user.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
    };
    
    this.setState(() => ({ value }));
    this.props.getSuggestedUsers(suggestedUsers);
  }

  selectUser = (value) => {
    this.setState(() => ({ value }));
    this.props.getSuggestedUsers([]);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <InputAutocomplete
        value={this.state.value}
        handleChange={this.handleChange}
        suggestedUsers={this.props.suggestedUsers}
        selectUser={this.selectUser}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    suggestedUsers: state.usersData.suggestedUsers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    getSuggestedUsers: (suggestedUsers) => dispatch(getSuggestedUsers(suggestedUsers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputAutocompleteContainer);
