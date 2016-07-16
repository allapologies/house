'use strict';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {submitSpendings, fetchDictionaries} from '../actions';
import SpendsInput from '../components/SpendsInput';

class NewSpends extends Component {
    render() {
        const {dictionaries, submitSpendings} = this.props;
        return (
            <SpendsInput
                id={this.props.params.id}
                dictionaries={dictionaries}
                submitSpendings={submitSpendings}/>
        );
    }
}

function mapStateToProps({dictionaries}) {
    return {
        dictionaries
    };
}

export default connect(mapStateToProps, {submitSpendings, fetchDictionaries})(NewSpends);