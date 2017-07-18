import React from 'react'
import queryString from 'query-string'
export default class SomeParamPage extends React.Component {
    render() {
        let id = this.props.match.params.id
        let queryStringObj = queryString.parse(this.props.location.search)
        console.log(queryStringObj)
        return (
            <h3>Page with param {id}</h3>
        )
    }
}
