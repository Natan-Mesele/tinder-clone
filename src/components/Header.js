import React from 'react'
import '../components/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='Large' className='header__icon' />
        </IconButton>
         <img src='https://www.tinderpressroom.com/file.php/178055/flame-gradient-RGB_1000px.jpg?thumbnail=modal' className='logo'/>
        <IconButton>
            <ForumIcon/>
        </IconButton>
    </div>
  )
}

export default Header