import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import History from './History'; // eslint-disable-line no-unused-vars
import RequiredTextInput from '../common/RequiredTextInput'; // eslint-disable-line no-unused-vars

export class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.reverse = this.reverse.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { phrase: '', isEmpty: true };
    }

    componentDidMount() {
        this.props.actions.requestReverseHistory();
    }

    reverse() {
        this.props.actions.reversePhrase(this.state.phrase);
        this.setState({ phrase: '' });
    }

    handleChange(event) {
        const phrase = event.target.value;
        const emptyLength = 0;
        const isEmpty = phrase.length === emptyLength;
        this.setState({ phrase, isEmpty });
    }

    render() {
        const {reverseHistory} = this.props;
        return <div>
                    <RequiredTextInput onChange={this.handleChange} value={this.state.phrase} placeholderText="type your phrase here..." />
                    <button onClick={this.reverse} disabled={this.state.isEmpty}>Reverse</button>
                    <div>
                        <History reverseHistory={reverseHistory} />
                    </div>
                </div>;
    }
}

HomePage.propTypes = {
    reverseHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        reverseHistory: state.reverseHistory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
