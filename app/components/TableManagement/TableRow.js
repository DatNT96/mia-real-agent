import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _get from 'lodash/get';
import _reducer from 'lodash/reduce';
import { TableContent } from 'components/TableComponent/TableComponent';
import { CurrencyFormat } from 'components/Generals/CurrencyFormat';
import {
  TableContentItem,
  TableContentItemGroup,
  TableContentWrapper,
  TableStatusContent,
} from 'components/TableComponent/TableComponent.styled';
import { IconStyled } from 'components/Generals/General.styled';
import { COLUMN_TYPE } from 'utils/constants';
import history from 'utils/history';
import { ButtonGroupWrapper, ButtonElement, UppercaseText } from './TableManagement.styled';

class TableRow extends React.PureComponent {
  onClick = () => {
    const {
      item: { _id },
      onClick,
    } = this.props;

    onClick(_id);
  };

  handleEditButton = () => {
    const { item } = this.props;
    const { _id } = item;

    history.push(`/role/${_id}/edit`);
  };

  renderActiveColumn = (column) => {
    const { item } = this.props;
    const { dataKey } = column;
    const active = _get(item, dataKey, false);

    return <IconStyled className="icon-dots" active={active} />;
  };

  renderDateColumn = (column) => {
    const { item } = this.props;
    const { dataKey, format } = column;

    const value = _get(item, dataKey);

    return moment(value).format(format);
  };

  renderTextColumn = (column) => {
    const { item } = this.props;
    const { dataKey } = column;
    const value = _get(item, dataKey);
    if (Array.isArray(value)) {
      return value.length > 1 ? value.join(' , ') : value;
    }
    return value || '-';
  };

  renderConstantColumn = (column) => {
    const { item } = this.props;
    const { dataKey, constant } = column;
    const value = _get(item, dataKey);

    return constant[value].label;
  };

  renderTotalColumn = (column) => {
    const { item } = this.props;
    const { dataKey, format } = column;
    const data = _get(item, dataKey);
    return _reducer(data, (prevValue, value) => prevValue + value[format], 0);
  };

  renderCurrencyColumn = (column) => {
    const { item } = this.props;
    const { dataKey } = column;
    const value = _get(item, dataKey);

    return <CurrencyFormat value={value} format="Ticket" />;
  };

  renderStatusColumn = (column) => {
    const { item } = this.props;
    const { dataKey } = column;
    const value = _get(item, dataKey);
    return <TableStatusContent status={value}>{value}</TableStatusContent>;
  };

  renderRoleButtonGroupColumn = () => (
    <ButtonGroupWrapper>
      <ButtonElement>
        <i className="icon-pencil" onClick={this.handleEditButton} /> { /* eslint-disable-line */}
      </ButtonElement>
    </ButtonGroupWrapper>
  );

  renderUppercaseColumn = (column) => {
    const { dataKey } = column;
    const { item } = this.props;

    const value = _get(item, dataKey);

    return <UppercaseText>{value}</UppercaseText>;
  }

  renderColumnContent = (column) => {
    const { type } = column;
    switch (type) {
      case COLUMN_TYPE.DATE:
        return this.renderDateColumn(column);
      case COLUMN_TYPE.ACTIVE:
        return this.renderActiveColumn(column);
      case COLUMN_TYPE.CONSTANT:
        return this.renderConstantColumn(column);
      case COLUMN_TYPE.TOTAL:
        return this.renderTotalColumn(column);
      case COLUMN_TYPE.CURRENCY:
        return this.renderCurrencyColumn(column);
      case COLUMN_TYPE.STATUS:
        return this.renderStatusColumn(column);
      case COLUMN_TYPE.ROLE_BUTTON_GROUP:
        return this.renderRoleButtonGroupColumn(column);
      case COLUMN_TYPE.UPPERCASE:
        return this.renderUppercaseColumn(column);
      case COLUMN_TYPE.TEXT:
      default:
        return this.renderTextColumn(column);
    }
  };

  renderColumn = (column, index) => {
    const {
      columnAttr: { value, ...rest },
    } = column;
    return (
      <TableContent {...rest} key={index}>
        {this.renderColumnContent(column)}
      </TableContent>
    );
  };

  render() {
    const { columns, isPointer } = this.props;
    return (
      <TableContentWrapper>
        <TableContentItem onClick={this.onClick}>
          <TableContent size="40" checkbox>
            <input type="checkbox" />
          </TableContent>
          <TableContentItemGroup isPointer={isPointer}>
            {columns.map(this.renderColumn)}
          </TableContentItemGroup>
        </TableContentItem>
      </TableContentWrapper>
    );
  }
}

TableRow.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isPointer: PropTypes.bool,
};

export default TableRow;
