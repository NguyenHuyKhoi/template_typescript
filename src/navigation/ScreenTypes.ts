export enum APP_SCREEN {
  HOME = 'HOME',
  MAIN_APP = 'MAIN_APP',
}

export type RootStackParamList = {
  [APP_SCREEN.MAIN_APP]: undefined;
  [APP_SCREEN.HOME]: undefined;
};
