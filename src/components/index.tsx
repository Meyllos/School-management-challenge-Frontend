/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import NavBar from './common/navBar';
import '../styles/css/index.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import Selector from './common/select';

interface props {
  options:  [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

}
class Index extends Component<props> {

  state = {
    options: this.props.options 
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          <div className="title">
          <p><strong> Hey  {new Date().toLocaleString()} </strong></p>
        </div>
        <div className="selector">
          <div className="class">
            Class
            <Selector options={this.state.options}/>
          </div>
          <div className="time-selector">
            <div>
              From
              <Selector options={this.state.options}/>
            </div>
               <div>
                 To
              <Selector options={this.state.options}/>
            </div>
               <div>
                 Time
              <Selector options={this.state.options}/>
            </div>
            
            
          </div>
           <div className="class">
            Class
            <Selector options={this.state.options}/>
          </div>
        </div>

        <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
      </Fragment>
    );
  }
}

export default Index;