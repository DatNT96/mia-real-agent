import React from 'react';
import PropTypes from 'prop-types';
import PaginationBar from 'components/PaginationBar';
import TableLoading from './TableLoading';
import {
  TableBorderWrapperStyled,
  TableBorderTopHeader,
  TableBorderContent,
  HeaderTitle,
  PaginationBlockStyled,
  PaginationInfoStyled,
} from './TableBorder.styled';

class TableBorder extends React.PureComponent {
  state = {
    pageInfo: 'Loading',
  };

  static getDerivedStateFromProps(props) {
    const {
      size, totalCount, sizePerPage, selectedPage,
    } = props;

    if (totalCount === 0) {
      return { pageInfo: '0 of 0' };
    }

    let beginNumber = (selectedPage - 1) * sizePerPage + 1;
    let endNumber = (selectedPage - 1) * sizePerPage + size;

    if (endNumber > totalCount) {
      endNumber = totalCount;
    }

    if (beginNumber > totalCount) {
      beginNumber = 0;
    }

    const pageInfo = `${beginNumber}-${endNumber} of ${totalCount}`; // eslint-disable-line

    return { pageInfo };
  }

  render() {
    const {
      totalCount,
      sizePerPage,
      changePage,
      selectedPage,
      children,
      isLoading,
      actionRenderer,
      shouldRenderPageInfo = true,
    } = this.props;

    const { pageInfo } = this.state;

    const totalPage = Math.ceil(totalCount / sizePerPage);
    const shouldRenderPaginationBar = totalPage > 1;

    return (
      <TableBorderWrapperStyled>
        <TableBorderContent>
          {isLoading && <TableLoading />}
          {children}
        </TableBorderContent>
        <TableBorderTopHeader>
          <HeaderTitle left>
            <PaginationBlockStyled>
              {shouldRenderPaginationBar && (
                <PaginationBar
                  totalPage={totalPage}
                  sizePerPage={sizePerPage}
                  selectedPage={selectedPage}
                  changePage={!isLoading && changePage}
                />
              )}
              {shouldRenderPageInfo && <PaginationInfoStyled>{pageInfo}</PaginationInfoStyled>}
            </PaginationBlockStyled>
          </HeaderTitle>
        </TableBorderTopHeader>
        {actionRenderer()}
      </TableBorderWrapperStyled>
    );
  }
}

TableBorder.propTypes = {
  isLoading: PropTypes.bool,
  totalCount: PropTypes.number,
  children: PropTypes.node.isRequired,
  sizePerPage: PropTypes.number,
  changePage: PropTypes.func.isRequired,
  selectedPage: PropTypes.number.isRequired,
  actionRenderer: PropTypes.func,
  shouldRenderPageInfo: PropTypes.bool,
};

TableBorder.defaultProps = {
  totalCount: 0,
  isLoading: false,
  sizePerPage: 20,
  actionRenderer: () => null,
};

export default TableBorder;
