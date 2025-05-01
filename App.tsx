import React from 'react';
import {SettingsProvider} from './src/i18n/SettingsContext';
import Route from './src/navigation';

const App = () => {
  return (
    <SettingsProvider>
      <Route />
    </SettingsProvider>
  );
};

export default App;
