import React from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://replate-lambda.herokuapp.com'

axious.interceptors.request.use(
    function (requestConfig) {
        requestConfig.headers.authorization = localStorage.getItem('jwt')

        return requestConfig
    },
    function (err) {
        return Promise.reject(err)
    }
)

export default function (Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('jwt')
            const notLoggedIn = <p>Please login to contine</p>

            return <>{token ? <Component {...this.props} /> : notLoggedIn}</>
        }
    }
}