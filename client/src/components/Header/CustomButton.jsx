
import {Box, Button, styled, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 16%;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 14px;
    }
    align-items: 'center',
`
const Container = styled(Box)`
    dispplay: flex;
`

const LoginButton = styled(Box)`
    color: #2874f0;
    background: #ffffff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    height: auto;
    margin-top:12px;
    margin-bottom:11px;
    font-weight: 600;

`

const customButton = ()=>{


    return(
        <Wrapper>
            <LoginButton Variant = "contained">Login</LoginButton>
            <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
            <Typography style = {{marginTop: 3}}>More</Typography>
            <Container>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    )
}

export default customButton;