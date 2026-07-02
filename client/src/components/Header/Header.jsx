import { useState } from 'react';
import {AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material'



import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

//Components
import Search from './Search';
import CustomButton from './CustomButton'


const Header = () =>{

    const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
    `;

    const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
    `

    const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    `

    const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
    })

    const customButtonWrapper = styled(Box)`
        margin: 0 5% 0 auto;
    `


    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return(
        <AppBar>
            <Toolbar style={{minHeight:55}}>
                <Component>
                    <img src={logoURL} alt="logo" style={{width: 75}} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                            <PlusImage src={subURL} />
                            

                        </SubHeading>

                    </Box>
                </Component>
                <Search />
                <customButtonWrapper>
                    <CustomButton />
                </customButtonWrapper>
            </Toolbar>
        </AppBar>
    )
};

export default Header;