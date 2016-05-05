'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject, fetchSpendings } from '../actions';
import { Link } from 'react-router';

class ProjectDescription extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchProject(this.props.params.id);
    this.props.fetchSpendings(this.props.params.id);
  }


  onDeleteHandler = () => {
    this.props.deleteProject(this.props.params.id);
    this.context.router.push('/projects/');
  };

  renderSpendingsTable = ()=>{
    const content = this.props.spendings.all.map((spending)=>{
      return (
        <tr key={spending.id}>
          <td>{spending.stage}</td>
          <td>{spending.subStage}</td>
          <td>{spending.material}</td>
          <td>{spending.quantity}</td>
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
          <th>Количество</th>
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

function mapStateToProps({projects, spendings}) {
  return {
    projects,
    spendings
  };
}

export default connect(mapStateToProps, { fetchProject, deleteProject, fetchSpendings })(ProjectDescription);