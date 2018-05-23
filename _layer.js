import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {LayerGroupConsumer} from "./_context"

export class Layer extends Component {

    static propTypes = {
        group: PropTypes.string, 
        style: PropTypes.string,
    }

    static defaultProps = {
        group:"main",
        style: ``,
    }
    render(){
        const {group, style} = this.props
        return(
            <LayerGroupConsumer>
                {context => {
                    const index = context[group]
                    const LayerGroup = styled.div`
                        position:absolute;
                        z-index:${index};
                        width: 100%;
                        ${style}
                    `
                    return (
                        <LayerGroup>
                            {this.props.children}
                        </LayerGroup>
                    )

                }}

            </LayerGroupConsumer>
        )

    }
}