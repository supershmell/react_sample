import React from 'react';
import Month from './Month';

class Months extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            usersList: []
        }
    }

    handleMouseEnter = e => {
        const obj = this.props.usersWithMonthsList;
        for (let month in obj) {
            if (e.target.innerText === month) {
                this.props.updateData(obj[month]);
                this.setState({ visible: true, usersList: obj[month] });
            }
        }
    }

    handleMouseLeave = () => this.setState({ visible: false, usersList: [] })

    render() {
        const obj = this.props.usersWithMonthsList;
        let color = '';

        return Object.keys(this.props.usersWithMonthsList).map((month) => {

            let usersListLength = obj[month].length;

            if (usersListLength < 3) {
                color = '#D3D3D3'

            } else if (usersListLength > 2 && usersListLength < 7) {
                color = '#334CFF'

            } else if (usersListLength > 6 && usersListLength < 11) {
                color = '#33FF36'

            } else {
                color = '#FF5733'

            }
            return <p style={{
                background: color,
                padding: '0.5em',
                fontSize: '1rem',
                borderRadius: '25%',
                color: 'white'
            }}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                key={month.toString()}>

                <Month name={month} />
            </p>

        }

        );
    }
}

export default Months;