import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addMovie } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addMovie(movie)),
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, description } = this.state;
    const id = uuidv1();
    this.props.addMovie({ name, id, description });
    this.setState({ name: '', description: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          id="name"
          onChange={this.handleChange}
          className="form__input--name"
          placeholder="Movie Name"
        />
        <input
          type="text"
          value={this.state.description}
          id="description"
          onChange={this.handleChange}
          className="form__input--description"
          placeholder="Movie Description"
        />
        <button className="btn btn-success" type="submit">
          Save
        </button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps,
)(ConnectedForm);

export default Form;
