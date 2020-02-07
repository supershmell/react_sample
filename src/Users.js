import React from 'react';

const Users = props => (

    <React.Fragment>
        {props.users.join('--')}
    </React.Fragment>
)

export default Users;