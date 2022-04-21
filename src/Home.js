import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section title='Model 3' description='Order online for Touchless Delivery' bgImg='/images/model-3.jpg' leftBtn='custom order' rightBtn='existing inventory' />
            <Section title='Model Y' description='Order online for Touchless Delivery' bgImg='/images/model-y.jpg' leftBtn='custom order' rightBtn='existing inventory' />
            <Section title='Model S' description='Order online for Touchless Delivery' bgImg='/images/model-s.jpg' leftBtn='custom order' rightBtn='existing inventory' />
            <Section title='Model X' description='Order online for Touchless Delivery' bgImg='/images/model-x.jpg' leftBtn='custom order' rightBtn='existing inventory' />
            <Section title='Lowest Cost Solar Panels in America' description='Money-back guarantee' bgImg='/images/solar-panel.jpg' leftBtn='Order now' rightBtn='Learn more' />
            <Section title='Solar for New Roofs' description='Solar Roof Costs Less Than a New Roof Plus Solar Panels' bgImg='/images/solar-roof.jpg' leftBtn='Order now' rightBtn='Learn more' />
            <Section title='Accessories' description='' bgImg='/images/accessories.jpg' leftBtn='Shop now' />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`