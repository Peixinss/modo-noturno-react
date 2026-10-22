import React, { createContext, useState, useContext } from 'react';

export const ThemeConstext = createContext();

export function ThemeProvider({ children }){
     const [tema, setTema] = useState('claro');

     const alterarTema = function(){
        setTema(function(temaAtual){
            temaAtual === 'claro' ? 'escuro' : 'claro'; 
        });
     };
     return(
        <ThemeConstext.Provider value={{ tema, alterarTema }}>
            { children }
        </ThemeConstext.Provider>
     );
    
    }

     export function useTheme(){
        const context = useContext(ThemeConstext);
        if(!context){
            throw new Error ('useTheme deve ser usado dentro de um ThemeProvider');
        }
    };
