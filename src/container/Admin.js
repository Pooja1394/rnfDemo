/**
 * Admin : User Details
 */
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import '../style/Admin.css'
import { Submit } from '../action/Action';
import { logger } from '../utils/methods';

class Admin extends Component {
    
    renderData = () => {
        return this.props.admin.details.map((v, k) => {
            return <Table.Row key={k}>
                <Table.Cell>{v.first}</Table.Cell>
                <Table.Cell>{v.last}</Table.Cell>
                <Table.Cell>{v.email}</Table.Cell>
                <Table.Cell>{v.telephone}</Table.Cell>
            </Table.Row>
        })

    }
    render() {
        return (
            <div className='admin wrapper_wrapper details'>
            <div>
                {!localStorage.getItem('inOutKey') ?
                    <div>
                        <h1>For Admin, You have To Sign In First!!!</h1>
                    </div> :
                    <Table celled>
                        {logger('Form details of the users')}
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>First Name</Table.HeaderCell>
                                <Table.HeaderCell>Last Name</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Telephone</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {this.props.admin.details.length > 0 ?
                            <Table.Body>
                                {this.renderData()}
                            </Table.Body> :
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='12' className='notData'>
                                        No Data
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        }
                    </Table>}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        admin: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitData: (data) => {
            dispatch(Submit(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin);