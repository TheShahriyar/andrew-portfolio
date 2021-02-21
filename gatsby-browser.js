import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';

export const onServiceWorkerUpdateReady = () => window.location.reload(false);

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
