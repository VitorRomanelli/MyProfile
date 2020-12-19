import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;
            tertiary: string;
            quaternary: string;
            
            background: string;
            text: string;
            text2: string;

            but: string;
            hover: string;
        }
    }
}
