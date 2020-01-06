import React from 'react';

const Users = props => (
    <div style={{ fontFamily: 'fantasy', fontSize: '1.4rem' }}>
        {props.users.join('--')}
    </div>
)

export default Users;