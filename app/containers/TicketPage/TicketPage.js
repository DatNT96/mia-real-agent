import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TicketPage from 'components/TicketPage';
import { actions, selectors } from 'reducers/ticket';
import { compose } from 'redux';

const mapStateToProps = state => ({
  totalRecord: selectors.getTicketTotalRecord(state),
});

const mapDispatchToProps = {
  getAllAction: actions.getAllAction,
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(TicketPage);
