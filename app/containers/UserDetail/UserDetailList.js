import itemDetailListHoc from 'hoc/ItemDetailHoc/ItemDetailListHoc';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actions } from 'reducers/user';
import {
  reselectSorting,
  getIsLoading,
  reselectUsers,
  getUserIdFromRoute,
  getTotalCount,
  getSelectedPage,
  getSizePerPage,
} from 'selectors/user';
import { SORT } from 'utils/constants';
import UserDetailListItem from 'components/UserDetail/UserDetailListItem';
const { USER_SORT } = SORT;

const structureSelectorFunc = createStructuredSelector({
  currentSorting: reselectSorting,
  isLoading: getIsLoading,
  selectedId: getUserIdFromRoute,
  items: reselectUsers,
  totalCount: getTotalCount,
  selectedPage: getSelectedPage,
  sizePerPage: getSizePerPage,
});

const mapStateToProps = (state) => {
  const structureSelector = structureSelectorFunc(state);

  return {
    ...structureSelector,
    sortItems: USER_SORT,
    title: 'All Users',
  };
};

const mapDispatchToProps = {
  handleSort: actions.userSorting,
  fetchList: actions.fetchListUser,
  changePage: actions.changePage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(itemDetailListHoc(UserDetailListItem));
