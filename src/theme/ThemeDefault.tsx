import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "#0057a8a6",
        secondary: "#c4c4c4",
        tertiary: "#ffffff",
    }
};

interface ThemeDefaultProps {
    children: React.ReactNode;
}
function ThemeDefault({ children }: ThemeDefaultProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeDefault;