import styled from 'styled-components'

export const DivContainer = styled.div`
  margin: 1vh auto;
  padding: 5vh 1vh;
  width: 20vw;
  height: 8vh;
  border: 2px solid;
  border-image: linear-gradient(90deg, #c20d7c, #ffbb00 100%) 1;
  @media screen and (max-width: 375px) {
        width: 220px;
  }
`

export const DivMatch = styled.div`
    display: flex;
    margin: 0 auto;
`

export const FotoMiniaturaImg = styled.img`
    width: 40px;
    height: 40px;
`

export const MatchNameP = styled.p`
    margin: auto 1vh;
`

export const MatchAgeP = styled.p`
    color: gray;
`

export const BtnVoltar = styled.button`
    display: flex;
    margin: 0 auto;
    border: inherit;
    cursor: pointer;
    color: #c20d7c;
    justify-content: center;
    align-items: center;
    background: #ffbb00;
    @media screen and (max-width: 375px) {
        height: 50px;
        width: 150px;
        font-size: 20px;
  }
`