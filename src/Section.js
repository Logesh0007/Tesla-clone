import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtn, rightBtn, bgImg }) {
    return (
        <Wrap bgImage={bgImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Btns>
                <Fade bottom>
                    <ButGrp>
                        <LeftBtn>{leftBtn}</LeftBtn>
                        {rightBtn && <RightBtn>{rightBtn}</RightBtn>}
                    </ButGrp>
                </Fade>

                <DownArrow src='/images/down-arrow.svg' />
            </Btns>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const Btns = styled.div`

`

const ButGrp = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftBtn = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightBtn = styled(LeftBtn)`
    background-color: rgba(255, 255, 255, 0.65);
    color: black;
`

const DownArrow = styled.img`
    margin-bottom: 15px;
    height: 40px;
    filter: invert(1);
    animation: animateDown infinite 1.5s;
`