import * as React from 'react';	
import { ThemeProvider as MdThemeProvider, createTheme as createMdTheme } from '@mui/material/styles';	
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material/utils';	

export const DispatchContext = React.createContext(() => {	
  throw new Error('Forgot to wrap component in `ThemeProvider`');	
});	

if (process.env.NODE_ENV !== 'production') {	
  DispatchContext.displayName = 'ThemeDispatchContext';	
}

const themeInitialOptions = {
  direction: 'ltr',
};

export default function ThemeProvider(props) {	
  const { children } = props;	

  const [themeOptions, dispatch] = React.useReducer((state, action) => {	
    switch (action.type) {	
      case 'CHANGE':	
        if (	
          (!action.payload.direction || action.payload.direction === state.direction)	
        ) {	
          return state;	
        }	

        return {	
          ...state,	
          direction: action.payload.direction || state.direction,	
        };	
      default:	
        throw new Error(`Unrecognized type ${action.type}`);	
    }	
  }, themeInitialOptions);	

  const { direction } = themeOptions;	

  useEnhancedEffect(() => {	
    document.body.setAttribute('dir', direction);	
  }, [direction]);	

  const theme = React.useMemo(() => {	
    let nextTheme = createMdTheme(	
      {	
        direction,	
        palette: {	
          primary: {	
            main: '#ff0000'	
          }	
        },	
      },	
    );	
    return nextTheme;	
  }, [direction]);	

  // TODO: remove MdThemeProvider, top level layout should render the default theme.	
  return (	
    <MdThemeProvider theme={theme}>	
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>	
    </MdThemeProvider>	
  );	
}	

export function useChangeTheme() {	
  const dispatch = React.useContext(DispatchContext);	
  return React.useCallback((options) => dispatch({ type: 'CHANGE', payload: options }), [dispatch]);
}
