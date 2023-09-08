import { MD2LightTheme, MD2Theme } from "react-native-paper";

export const MD2DarkTheme: MD2Theme = {
    ...MD2LightTheme,
    dark: true,
    mode: 'adaptive',
    version: 2,
    isV3: false,
    colors: {
        ...MD2LightTheme.colors,
        primary: '#dde8b9',
        accent: '#9F84B7',
        background: '#FDE9FF',
        surface: '#63BAAB',
        error: '#CF6679',
        onSurface: '#FFFFFF',
        backdrop: '#fff',
        tooltip: 'rgba(230, 225, 229, 1)',
    }
};