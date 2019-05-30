import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import { Link } from 'react-router-dom';

export default class TableTest extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('cosas');
        this.unsubscribe = null;
        this.state = {
            cosas: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const cosas = [];
        querySnapshot.forEach((doc) => {
            const { name, time, attendance } = doc.data();
            cosas.push({
                key: doc.id,
                doc,
                name,
                time,
                attendance,
            });
        });
        this.setState({
            cosas
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              COMENT LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Coment</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cosas.map(cosa =>
                  <tr>
                    <td><Link to={`/show/${cosa.key}`}>{cosa.name}</Link></td>
                    <td>{cosa.time}</td>
                    <td>{cosa.attendance}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

        );
    }
}