import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemDetailListItem,
  ItemDetailInput,
  ItemDetailName,
  ItemStatus,
} from 'components/Generals/ItemDetail.styled';
import history from 'utils/history';

class UserListItem extends React.PureComponent {
  onClick = () => {
    const {
      item: { _id },
    } = this.props;

    history.push(`/admin/user/${_id}`);
  };

  render() {
    const { item: user, active } = this.props;
    const { username, role } = user;

    return (
      <ItemDetailListItem active={active} onClick={this.onClick}>
        <ItemDetailInput>
          <input type="checkbox" />
        </ItemDetailInput>
        <ItemDetailName>
          {username}
          <ItemStatus>
            {role}
          </ItemStatus>
        </ItemDetailName>
      </ItemDetailListItem>
    );
  }
}

UserListItem.propTypes = {
  active: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
};

export default UserListItem;
