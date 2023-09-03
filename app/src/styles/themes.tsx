import { MD2LightTheme, MD2Theme } from "react-native-paper";

export const MD2DarkTheme: MD2Theme = {
    ...MD2LightTheme,
    dark: true,
    mode: 'adaptive',
    version: 2,
    isV3: false,
    colors: {
        ...MD2LightTheme.colors,
        primary: '#BB86FC',
        accent: '#03dac6',
        background: '#121212',
        surface: '#121212',
        error: '#CF6679',
        onSurface: '#FFFFFF',
        backdrop: '#fff',
        tooltip: 'rgba(230, 225, 229, 1)',
    }
};