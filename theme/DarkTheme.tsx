import {DefaultTheme} from 'react-native-paper'
import {Theme} from './types'

const DarkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  // roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    card: 'rgb(27, 27, 31)',
    text: 'rgb(228, 226, 230)',
    border: 'rgb(143, 144, 154)',
    notifications: 'rgb(157, 60, 105)',
    primary: 'rgb(157, 60, 105)',
    onPrimary: 'rgb(255, 208, 229)',
    primaryContainer: 'rgb(120, 40, 85)',
    onPrimaryContainer: 'rgb(245, 190, 210)',
    secondary: 'rgb(170, 100, 130)',
    onSecondary: 'rgb(240, 190, 210)',
    secondaryContainer: 'rgb(85, 45, 70)',
    onSecondaryContainer: 'rgb(235, 185, 210)',
    tertiary: 'rgb(200, 120, 160)',
    onTertiary: 'rgb(255, 220, 240)',
    tertiaryContainer: 'rgb(95, 50, 80)',
    onTertiaryContainer: 'rgb(235, 195, 230)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(27, 27, 31)',
    onBackground: 'rgb(228, 226, 230)',
    surface: 'rgb(35, 36, 42)',
    onSurface: 'rgb(228, 226, 230)',
    surfaceVariant: 'rgb(69, 70, 79)',
    onSurfaceVariant: 'rgb(197, 198, 208)',
    outline: 'rgb(143, 144, 154)',
    outlineVariant: 'rgb(69, 70, 79)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(228, 226, 230)',
    inverseOnSurface: 'rgb(48, 48, 52)',
    inversePrimary: 'rgb(245, 190, 210)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(35, 36, 42)',
      level2: 'rgb(40, 38, 48)',
      level3: 'rgb(45, 42, 53)',
      level4: 'rgb(50, 45, 58)',
      level5: 'rgb(55, 48, 62)'
    },
    surfaceDisabled: 'rgba(228, 226, 230, 0.12)',
    onSurfaceDisabled: 'rgba(228, 226, 230, 0.38)',
    backdrop: 'rgba(46, 48, 56, 0.4)'
  }
}

export default DarkTheme
