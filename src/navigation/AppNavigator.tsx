import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './RootNavigator';
import {RXStore, useNetWorkStatus, useSelector} from '@common';
import {useTranslation} from 'react-i18next';
import {navigationRef} from './NavigationServices';
export const AppContainer = () => {
  //Check all setting app : language, appMode
  const {i18n} = useTranslation();
  const {language} = useSelector(x => x.language);
  const isConnected = useNetWorkStatus();
  console.log('Internet', isConnected);
  useEffect(() => {
    i18n.changeLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigation />
      <RXStore />
    </NavigationContainer>
  );
};
