import React from 'react'

class Requests extends React.component {
    state = {
        request_title: '',
        request_desc: '',
        completed: 0,
        request_expires_date: '',
        request_expires_time: '',
        volunteer_assigned: {
            contact_name: '',
            phone: ''
        },
        business_requesting: {
            business_name: '',
            address: '',
            phone: '',
            contact_name: '',
            email: ''
        }
    }

    render() {
        return (
            <h1>This is the Requests component</h1>
        )
    }
}

export default Requests