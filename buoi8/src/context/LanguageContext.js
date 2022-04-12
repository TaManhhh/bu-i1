import {  createContext, useState } from "react";
import enTranslation from'../Lang/en.json';
import viTranslation from '../Lang/vi.json';
export const LanguageContext= createContext();
const defaultUserLanguage ='en';
export const LanguageProvider =({children}) =>{
    const [userLanguage,setUserLanguage] = useState(defaultUserLanguage);
    const dictionary =(componentName,elementName) =>{
        const translation ={
            enTranslation,
            viTranslation
        };
        return translation[`${userLanguage}Translation`][componentName][elementName];
    };
 
    return(
        <LanguageContext.Provider value={{dictionary,setUserLanguage}}>
            {children}
        </LanguageContext.Provider> 
    );
};