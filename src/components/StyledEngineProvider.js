import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useTheme } from '@mui/material/styles';

// Cache for the rtl version of the styles
const cacheRtl = createCache({
  key: 'rtl',
  prepend: true,
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function StyledEngineProvider(props) {
  const { children, emotionCache: cacheLtr } = props;
  const theme = useTheme();
  const emotionCache = theme.direction === 'rtl' ? cacheRtl : cacheLtr;

  return (
    <CacheProvider value={emotionCache}>{children}</CacheProvider>
  );
}
