import { connect } from 'react-redux';
import TrainingBox from '../../components/TrainingBox';
import {
  selectFieldValue,
  actions,
} from '../../reducers/trainingForm';

const mapStateToProps = state => ({
  userSay: selectFieldValue(state, 'userSay'),
  intent: selectFieldValue(state, 'intent'),
  entities: selectFieldValue(state, 'entities').toJS(),
  response: selectFieldValue(state, 'response'),
  entity: selectFieldValue(state, 'entity'),
  value: selectFieldValue(state, 'value'),
  start: selectFieldValue(state, 'start'),
  end: selectFieldValue(state, 'end'),
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingBox);
