import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getPost } from "./Post";

const getPerson = gql`
  {
    person {
      id
      firstname
      lastname
      email
    }
  }
`;

const addPostMutation = gql`
  mutation Addpost($title: String!, $content: String!, $personid: ID!) {
    addpost(title: $title, content: $content, personid: $personid) {
      title
      id
    }
  }
`;

export class Addpost extends Component {
  state = {
    title: " ",
    content: " ",
    personid: " "
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.addPostMutation({
      variables: {
        title: this.state.title,
        content: this.state.content,
        personid: this.state.personid
      },
      refetchQueries: [{ query: getPost }]
    }); //this one comes from line 83
  };
  render() {
    const { getPerson } = this.props;

    return (
      <div>
        <form id="addPost" onSubmit={this.handleSubmit}>
          <div className="field">
            <label> Post name </label>
            <input type=" text" id="title" onChange={this.handleChange} />
          </div>
          <div className="field">
            <label> Content </label>
            <input type="text" id="content" onChange={this.handleChange} />
          </div>
          <div className="field">
            <label> Person: </label>
            <select id="personid" onChange={this.handleChange}>
              <option>select person</option>
              {getPerson.loading ? (
                <option disabled>getPerson loading...</option>
              ) : (
                getPerson.person.map(person => {
                  return (
                    <option key={person.id} value={person.id}>
                      {" "}
                      {person.firstname} {person.lastname}{" "}
                    </option>
                  );
                })
              )}
            </select>
          </div>
          <button>Add post</button>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(getPerson, { name: "getPerson" }),
  graphql(addPostMutation, { name: "addPostMutation" })
)(Addpost);
