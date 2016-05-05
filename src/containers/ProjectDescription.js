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
  }

  renderSpendingsTable = ()=>{
    const { stages, subStages, materials, units } = this.props.dictionaries;
    const content = this.props.spendings.all.map((spending)=>{
      return (
        <tr key={spending.id}>
          <td>{this.getRelation(stages, spending.stage)}</td>
          <td>{this.getRelation(subStages, spending.subStage)}</td>
          <td>{this.getRelation(materials, spending.material)}</td>
          <td>{spending.quantity}{this.getRelation(units, spending.unit)}</td>
          <td>{spending.price}</td>
          <td>{spending.supplier}</td>
          <td>{spending.comments}</td>
        </tr>
        )
    });

    return (
      <table className="table table-hover">
        <tbody>
        <tr>
          <th>Этап</th>
          <th>Подэтап</th>
          <th>Материал</th>
          <th>Количество,ед.изм</th>
          <th>Цена</th>
          <th>Поставщик</th>
          <th>Комментарии</th>
        </tr>
        {content}
        </tbody>
      </table>
    )
  };

  render() {
    const url = `/projects/${this.props.params.id}/spendings/new`;
    const project = this.props.projects.current;
    if (!project) return <div>Loading project data</div>
    const { title, description } = project;
    return (
      <div>
        <Link to='/projects'>Назад</Link>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <Link to={url}>Внести затраты</Link>
        <p>Редактировать затраты</p>
        <p onClick={ this.onDeleteHandler }>Удалить проект</p>
        {this.renderSpendingsTable()}
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