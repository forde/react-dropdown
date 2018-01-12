import React, { Component } from 'react';
import styled from 'styled-components';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { className, style } = this.props;
        return (
            <Wrapper className={className} style={style}>
                ...
            </Wrapper>
        );
    }
}

export default Dropdown;

const Wrapper = styled.div`
    position:relative;
`

