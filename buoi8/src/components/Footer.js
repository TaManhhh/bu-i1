import React, { useContext, useState } from 'react'
// import'../assets/css/Footer.css';
import{LanguageContext} from '../context/LanguageContext'
function Footer() {
    const[optionValue,setOptionvalue]= useState('en');
    const{setUserLanguage} = useContext(LanguageContext);

  return (
    <footer>
        <select 
        value={optionValue}
        onChange={(e)=>{
            setOptionvalue(e.target.value);
            setUserLanguage(e.target.value);
        }}>
            <option value='en'>en</option>
            <option value='vi'>vi</option>
        </select>
    </footer>
  );
}

export default Footer;