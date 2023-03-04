import styled from 'styled-components'

export const Foot = styled.div`
    height: auto;
    background-color: #6d99a51a;
`

export const Content = styled.div`
  margin: 5% auto 0px;
  display: flex;
  flex-wrap: wrap;
  padding: 100px;
  font-family: Nunito;
  font-size: 18px;
  color: #848484;

  & > div :nth-child(2) {
    width: 300px;
    word-wrap: break-word;
  }

  & > div {
    font-size: 17px;
    word-wrap: normal;
  }

  ul {
    list-style-type: none;
    font-weight: 700;
    color: black;
    padding-left: 90px;
    width: 220px;
    font-size: 18px;
    color: #848484;
    justify-content: center;

    & > div :nth-child(2) {
        width: 300px;
        word-wrap: break-word;
    }

    & > div {
        font-size: 17px;
        word-wrap: normal;
    }

    ul {
        list-style-type: none;
        font-weight: 700;
        color: black;
        padding-left: 90px;
        width: 220px;
        font-size: 18px;
    }

    li {
        font-weight: normal;
        padding-top: 1rem;
        color: #848484;
        font-size: 17px;
    }
`
