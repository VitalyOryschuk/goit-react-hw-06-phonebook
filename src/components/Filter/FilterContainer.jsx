import filterActions from '../../redux/filter/filterActions';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import Filter from './Filter';

const mapStateToProps = store => ({
  value: selectors.getFilter(store),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: value => dispatch(filterActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
