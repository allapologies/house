'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject, fetchSpendings, fetchDictionaries } from '../actions';
import { Link } from 'react-router';

class ProjectDescription extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchProject(this.props.params.id);
    this.props.fetchSpendings(this.props.params.id);
    this.props.fetchDictionaries();
  }


  onDeleteHandler = () => {
    this.props.deleteProject(this.props.params.id);
    this.context.router.push('/projects/');
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
    const { stages, subStages, materials, units } = this.props.dictionaries;
    const content = this.props.spendings.all.map((spending)=>{
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
    const url = `/projects/${this.props.params.id}/spendings/new`;
    const project = this.props.projects.current;
    if (!project) return <div>Loading project data</div>
    const { title, description } = project;
    return (
      <div>
        <div className='row'>
          <div className='col-xs-10'>
            <Link to='/projects'>проекты</Link>
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
            <button onClick={ this.onDeleteHandler } type="button" className="btn btn-danger btn-sm">
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

export default connect(mapStateToProps, { fetchProject, deleteProject, fetchSpendings, fetchDictionaries })(ProjectDescription);