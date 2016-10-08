'use strict'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchProject, deleteProject, fetchSpendings, fetchDictionaries, deleteSpending } from '../actions'
import { Modal } from '../components'

@connect(
    ({ projects, spendings, dictionaries }) => ({ projects, spendings, dictionaries }),
    (dispatch) => bindActionCreators({
        fetchProject,
        deleteProject,
        fetchSpendings,
        fetchDictionaries,
        deleteSpending
    }, dispatch)
)
export class ProjectDescription extends Component {
    constructor (props) {
        super()
        this.state = {
            toBeDeleted: false
        }
    }

    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount () {
        this.props.fetchProject(this.props.params.id)
        this.props.fetchSpendings(this.props.params.id)
        this.props.fetchDictionaries()
    }

    onDeleteClickHandler = () => {
        this.setState({toBeDeleted: !this.state.toBeDeleted})
    }

    onConfirmedDelete = () => {
        this.props.deleteProject(this.props.params.id)
        this.context.router.push('/')
    }

    getRelation = (arr, term) => {
        let result
        arr.forEach((element)=> {
            if (element.id == term) {
                result = element.name
            }
        })
        return result
    }

    countAllSpends = () => {
        let sum = 0
        this.props.spendings.get('items').forEach((spending) => {
            sum += spending.price * spending.quantity
        })
        return sum
    }

    spendingDeleteHandler = (event) => {
        event.preventDefault()
        this.props.deleteSpending(this.props.params.id, event.target.id)
    }

    renderPagination () {
        const spends = this.props.spendings.get('items')
        const paginationBar = spends.map((spending)=> {
            return <span key={spending.id}> {spending.id} </span>
        })
        return (
            <div>
                {paginationBar}
            </div>
        )
    }

    renderSpendingsTable () {
        let {dictionaries, spendings} = this.props
        if (!dictionaries.size || !spendings.size) return <div>Loading project data</div>
        let dicts = dictionaries.toJS()
        let spends = spendings.toJS()
        const content = spends.items.map((spending)=> {
            return (
                <tr key={spending.id}>
                    <td>{this.getRelation(dicts.materials, spending.material)}</td>
                    <td>{spending.quantity}{this.getRelation(dicts.units, spending.unit)}</td>
                    <td>{spending.price}</td>
                    <td>{spending.price * spending.quantity}</td>
                    <td className='hidden-xs'>{this.getRelation(dicts.stages, spending.stage)}</td>
                    <td className='hidden-xs'>{this.getRelation(dicts.subStages, spending.subStage)}</td>
                    <td className='hidden-xs'>{spending.supplier}</td>
                    <td className='hidden-xs'>{spending.comments}</td>
                    <td>
                        <span id={spending.id} onClick={this.spendingDeleteHandler} className='glyphicon glyphicon-remove'/>
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <table className="spendings table table-hover">
                    <tbody>
                    <tr>
                        <th>Материал</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                        <th className='hidden-xs'>Этап</th>
                        <th className='hidden-xs'>Подэтап</th>
                        <th className='hidden-xs'>Поставщик</th>
                        <th className='hidden-xs'>Комментарии</th>
                        <th></th>
                    </tr>
                    {content}
                    </tbody>
                </table>
                {this.renderPagination()}
            </div>
        )
    }

    render () {
        const project = this.props.projects.get('current')
        if (!project) return <div>Loading project data</div>

        const modal = (this.state.toBeDeleted) ?
            <Modal
                onConfirm={this.onConfirmedDelete}
                onCancel={this.onDeleteClickHandler}
                id={this.props.params.id}/> : ""
        const url = `/projects/${this.props.params.id}/spendings/new`

        return (
            <div>
                {modal}
                <div className='row'>
                    <div className='col-xs-12'>
                        <Link to='/'>проекты</Link>
                        <span> > {project.title}</span>
                        <span onClick={ this.onDeleteClickHandler }
                              className="glyphicon glyphicon-remove-circle delete"></span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-12'>
                        <h4>{project.description}</h4>
                        <h5>Потрачено:
                            <span className="total">
                    <strong>
                      {this.countAllSpends()} р.
                    </strong>
                  </span>
                        </h5>
                        <Link to={url} className="btn btn-success btn-sm">
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Добавить расходы
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='row'>
                        <div className='col-xs-12'>
                            {this.renderSpendingsTable()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
