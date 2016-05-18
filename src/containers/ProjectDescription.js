'use strict';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProject, deleteProject, fetchSpendings, fetchDictionaries } from '../actions';
import { Link } from 'react-router';
import Modal from '../components/Modal';

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
    let result;
    arr.forEach((element)=>{
      if (element.id == term ) {
        result=element.name;
      }
    });
    return result;
  };

  countAllSpends = () => {
    let sum =0;
    this.props.spendings.all.forEach((spending) => {
      sum += spending.price * spending.quantity;
    });
    return sum;
  };

  renderSpendingsTable = ()=>{
    const { dictionaries: {stages, subStages, materials, units}, spendings } = this.props;
    if (!materials || !spendings.all) return <div>Loading project data</div>;
    const content = spendings.all.map((spending)=>{
      return (
        <tr key={spending.id}>
          <td>{this.getRelation(materials, spending.material)}</td>
          <td>{spending.quantity}{this.getRelation(units, spending.unit)}</td>
          <td>{spending.price}</td>
          <td>{spending.price * spending.quantity}</td>
          <td className='hidden-xs'>{this.getRelation(stages, spending.stage)}</td>
          <td className='hidden-xs'>{this.getRelation(subStages, spending.subStage)}</td>
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
  };

  render() {
    const modal = (this.state.toBeDeleted) ?
      <Modal
        onConfirm={this.onConfirmedDelete}
        onCancel={this.onDeleteClickHandler}
        id={this.props.params.id} /> : "";
    const url = `/projects/${this.props.params.id}/spendings/new`;
    const project = this.props.projects.current;
    if (!project) return <div>Loading project data</div>
    const { title, description } = project;
    return (
      <div>
        {modal}
        <div className='row'>
          <div className='col-xs-10'>
            <Link to='/'>проекты</Link>
            <span> > {title}</span>
            <h3>{description}</h3>
          </div>
          <div className='col-xs-2'>
            {this.countAllSpends()} р.
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Link to={url}>
              <button type="button" className="btn btn-success btn-sm">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Добавить расходы
              </button>
            </Link>
            <button onClick={ this.onDeleteClickHandler } type="button" className="btn btn-danger btn-sm">
              <span className="glyphicon glyphicon-minus-sign" aria-hidden="true"></span> Удалить проект
            </button>
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