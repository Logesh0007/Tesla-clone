import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from './features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [clsBtn, setClsBtn] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <Logo src='/images/logo.svg' />
            <Menu>
                {cars && cars.map((car, index) => <a key={index} href="#">{car}</a>)}
            </Menu>
            <SideMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#" onClick={() => setClsBtn(true)}>Menu</a>
            </SideMenu>
            <MenuOpts show={clsBtn}>
                <CloseWrap onClick={() => setClsBtn(false)}>
                    <Close />
                </CloseWrap>
                <li><a href="#">existing inverntory</a></li>
                <li><a href="#">used inventory</a></li>
                <li><a href="#">trade-in</a></li>
                <li><a href="#">test drive</a></li>
                <li><a href="#">roadster</a></li>
                <li><a href="#">semi</a></li>
                <li><a href="#">charging</a></li>
                <li><a href="#">powerwall</a></li>
                <li><a href="#">commercial energy</a></li>
                <li><a href="#">utilities</a></li>
            </MenuOpts>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    z-index: 1;
`

const Logo = styled.img`
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        font-weight: 400;
        letter-spacing: 0.5px;
        font-family: inherit;
        text-transform: capitalize;
        padding: 0 15px;
        font-size: 19px;
        transition: all 0.3s;
        flex-wrap: nowrap;

        &:hover{
            padding: 6px 15px;
            border-radius: 10px;
            background-color: rgb(100, 100, 100, 0.1);
        }
    }

    @media (max-width: 768px){
        display: none;
    }
`

const SideMenu = styled.div`
    a{
        font-weight: 400;
        text-transform: uppercase;
        transition: all 0.3s;
        padding: 6px 15px;

        &:hover{
            padding: 6px 15px;
            border-radius: 10px;
            background-color: rgb(100, 100, 100, 0.1);
        }
    }
`

const MenuOpts = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px; 
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        
        a{
            text-transform: capitalize;
        }

        font-weight: 600;
    }
`
const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`

const Close = styled(CloseIcon)`
`