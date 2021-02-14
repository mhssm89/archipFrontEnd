import React, { createContext, useEffect, useState } from 'react';

import _ from 'lodash';

import { THEMES } from 'src/constants';

import { i18n } from '@/root/i18n';

const defaultSettings = {
  direction: 'ltr',
  responsiveFontSizes: true,
  theme: THEMES.LIGHT,
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => {},
});

export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings,
  );

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = _.merge({}, currentSettings, update);

    // Change language
    mergedSettings.direction == 'ltr'
      ? i18n.changeLanguage('en-US')
      : i18n.changeLanguage('ar-EG');
    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);

  useEffect(() => {
    document.dir = currentSettings.direction;
  }, [currentSettings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
