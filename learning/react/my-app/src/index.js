import React from 'react';
import ReactDOM from 'react-dom';

/*(ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
  reportWebVitals();
);

function Hello(props) {
  return <h1>Hello World! -2 </h1>;
}

ReactDOM.render(<Hello />, document.getElementById("root"));

class Person extends React.Component{
  render(){
      return <h2>My name is sairama!</h2>
  }
}

ReactDOM.render(<Person />, document.getElementById("root"));
*/
class Person extends React.Component {
  render() {
      return (
          <div>
              <td><label>{this.props.name}</label></td>
              <td><label>{this.props.age}</label></td>
          </div>
      )
  }
}

class PersonContainer extends React.Component {
  render() {
      return (
          <div>
              <table>
                  <tr><Person name="sairama" age="20" /></tr>
                  <tr><Person name="jamal" age="22"/></tr>
              </table>
          </div>
      )
  }
}

ReactDOM.render(<PersonContainer />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

