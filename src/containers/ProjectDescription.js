'use strict';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProject, deleteProject, fetchSpendings, fetchDictionaries } from '../actions';
import { Link } from 'react-router';
import Modal from '../components/Modal';
import Immutable from 'immutable'

class ProjectDescription extends Component {
    constructor(props) {
        super();
        this.state = {
          toBeDeleted: false
        }
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchProject(this.props.params.id);
        this.props.fetchSpendings(this.props.params.id);
        this.props.fetchDictionaries();
    }

    onDeleteClickHandler = () => {
        this.setState ({ toBeDeleted : !this.state.toBeDeleted });
    };
    
    onConfirmedDelete = () => {
        this.props.deleteProject(this.props.params.id);
        this.context.router.push('/');
    };
    
    getRelation = (arr, term) => {
        arr.forEach((element)=>{
          if (element.id == term ) {
              return element.name;
          }
        });
    };
    
    countAllSpends = () => {
        let sum =0;
        this.props.spendings.get('all').forEach((spending) => {
            sum += spending.price * spending.quantity;
        });
        return sum;
    };

    renderSpendingsTable () {
        let { dictionaries, spendings } = this.props
        if (!dictionaries.size || !spendings.size) return <div>Loading project data</div>
        let dicts = dictionaries.toJS()
        let spends = spendings.toJS()
        const content = spends.all.map((spending)=>{
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
                  <td><span className='glyphicon glyphicon-remove'></span></td>
                </tr>
            )
        });
        
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
        
          </div>
        )
    }

    render() {
        const project =this.props.projects.get('current')
        if (!project) return <div>Loading project data</div>
        
        const modal = (this.state.toBeDeleted) ?
          <Modal
            onConfirm={this.onConfirmedDelete}
            onCancel={this.onDeleteClickHandler}
            id={this.props.params.id} /> : "";
        const url = `/projects/${this.props.params.id}/spendings/new`;
        
        return (
          <div>
            {modal}
            <div className='row'>
              <div className='col-xs-12'>
                <Link to='/'>проекты</Link>
                <span> > {project.title}</span>
                <span onClick={ this.onDeleteClickHandler } className="glyphicon glyphicon-remove-circle delete"></span>
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
        );
        }
}

function mapStateToProps({projects, spendings, dictionaries }) {
    return {
        projects,
        spendings,
        dictionaries
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProject,
        deleteProject,
        fetchSpendings,
        fetchDictionaries
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDescription);