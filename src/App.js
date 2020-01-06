import React from 'react';
import Months from './Months.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInfoList: [],
      usersWithMonthsList: []
    };
  }

  componentDidMount() {
    fetch("https://yalantis-react-school.herokuapp.com/api/task0/users")
      .then(list => list.json())
      .then(data => {
        this.setState({ usersInfoList: data, usersWithMonthsList: this.addUsers(this.sortList(data)) })
      })
      .catch(err => console.log('fetch error : ', err))
  }

  sortList = (arr) => {
    arr.sort((a,b) => {
      let dateA = new Date(a.dob), dateB = new Date(b.dob)
      return dateA-dateB;
    })
    return arr;
  }

  addUsers = (users) => {
    const monthName = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    return users.reduce((accumulator, { firstName, lastName, dob }) => {
      let month = monthName[parseInt(dob.split('-', 3)[1]) - 1];
      accumulator[month] = (accumulator[month] || []).concat(`${firstName} ${lastName}`);
      return accumulator;
    }, {});
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        letterSpacing: '2px',
        fontStyle: 'bold'
      }}>
        <Months usersWithMonthsList={this.state.usersWithMonthsList} />
      </div>
    )
  }
}

export default App;
