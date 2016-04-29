'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteProject, fetchSpendings } from '../actions';
import { Link } from 'react-router';

class ProjectDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.params.id
    }
  };
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchSpendings(this.state.id);
  }

  getData = () => {
    const projects = this.props.projects.all;
    const id = this.state.id;
    var title, description;
    projects.forEach((project) => {
      if (project.projectId == id) {
        title = project.title;
        description = project.description;
      }
    });

    return (
      <div>
        <h2>{title}</h2>
        <h2>{description}</h2>
      </div>
    )
  };

  onDeleteHandler = () => {
    this.props.deleteProject(this.state.id);
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
    return (
      <div>
        <h1>{this.state.projectId}</h1>
        {this.getData()}
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

export default connect(mapStateToProps, { deleteProject, fetchSpendings })(ProjectDescription);