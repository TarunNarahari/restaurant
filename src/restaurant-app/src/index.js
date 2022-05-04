import React from "react";
import ReactDOM from "react-dom";
import './index.css'

class MenuItem extends React.Component {
  render() {
      return (
          <tr>
              <td><label>{this.props.menuitem.Name}</label></td>
              <td><label>{this.props.menuitem.Cost}</label></td>
          </tr>
      )
  }
}

class Menu extends React.Component {
  constructor(props) {
    console.log('menu contructor is made')
    super(props)
    this.state = {
      loading: true,
      menuitems: []
    }
  }
  componentDidMount() {
    console.log('componentn mounted')
    const apiUrl = 'https://27x3u6dr9k.execute-api.us-east-1.amazonaws.com/prod/tarunrestaurant/mymenu/appetizers'
    fetch(apiUrl)
        .then(async (response) => {
          console.log('got the data')
            this.setState({ loading: false, menuitems: await response.json() });
        });
}
  render() {
    console.log(this.state.loading + 'in render')
    return (
      <div>
                    <table align='center'>
                        <th>Item</th>
                        <th>Cost</th>
                        {this.state.menuitems.map((item) =>
                            <MenuItem menuitem={item} />
                        )}
                    </table>
            </div>
    )
  }
}

ReactDOM.render(<Menu />, document.getElementById("root"));