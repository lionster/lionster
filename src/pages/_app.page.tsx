import {
    ThemeProvider,
    unstable_createMuiStrictModeTheme as createMuiTheme
} from '@material-ui/core/styles';
import {AppProps} from 'next/app';
import {SnackbarProvider} from 'notistack';
import {FunctionComponent} from 'react';
import {RecoilRoot} from 'recoil';
import 'styles/app.scss';
import '../config/config-amplify';

const theme = createMuiTheme({
    props: {
        MuiButton: {
            variant: 'outlined',
            disableElevation: true
        },
        MuiTextField: {
            variant: 'outlined',
            size: 'small'
        }
    }
});

const AppPage: FunctionComponent<AppProps> = ({Component, pageProps}) => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                >
                    <Component {...pageProps} />
                </SnackbarProvider>
            </ThemeProvider>
        </RecoilRoot>
    );
};

export default AppPage;
