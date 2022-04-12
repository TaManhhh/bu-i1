import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { LanguageContext } from '../context/LanguageContext'
import '../App.css';
function Header() {
    const {auth, userName} = useContext(AuthContext);
    const {dictionary} = useContext(LanguageContext);

  return (
    <header>
        <div className='hd'>
            {auth?(
                <div className='hd'>
                    {dictionary('HeaderComponent','welcome')},{userName}
                </div>
            ):(
                <div className='hd'>{dictionary('Global','login-btn')}</div>
            )
        }
        </div>
    </header>
  );
}

export default Header;