import React, {Component} from 'react';
import styled from 'styled-components';
import img from './images/beisen.png'

const Center = styled.div`
    margin-left:auto;
    margin-right: auto;
    height: 300px;
    width: 500px;
    font-family: 'Helvetica Neue',Tahoma,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',STHeitiSC,sans-serif;;
`

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: purple;
`

const Section = styled.section`
    border: solid 1px #ccc;
    background-image: url(${img});
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 120px 0 180px 0;
`

export default class ReactLibraryTemplate extends Component {
    render() {
        return <Center>
            <Title>React Component Template</Title>
            <Section>
                更多意见建议请提到：
                <br />
                <a href="https://github.com/talentui/component-template/issues">
                    这里
                </a>
            </Section>
        </Center>
    }
}