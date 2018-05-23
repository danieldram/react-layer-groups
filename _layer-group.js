import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {LayerGroupProvider} from "./_context"



export class LayerGroup extends Component {

    static PropTypes = {
        groups: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string, 
            index: PropTypes.number
        }))
    }

    static defaultProps = {
        groups:[{name:"main", index:0}]
    }

    constructor(props){
        super()
    }

    componentDidMount(){
        this.forceUpdate();
    }

    render(){
        const Container = styled.div`
            background-color:transparent;
            position:absolute;
            width:100vw;
            height:100vh;
            padding:0;
            margin:0;
            z-index:0;
        `
        return (

            <Container>
                <LayerGroupProvider value={this.props.groups}>
                    {this.props.children ? this.props.children : null}
                </LayerGroupProvider>
            </Container>
        )

    }

}
