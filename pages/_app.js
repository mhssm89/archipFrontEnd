import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'prismjs/prism';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'nprogress/nprogress.css';
import 'src/assets/css/prism.css';
import 'src/mixins/chartjs';

import React from 'react';

import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { enableES5 } from 'immer';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { SnackbarProvider } from 'notistack';

import GlobalStyles from 'src/components/common/GlobalStyles';
import LoadingScreen from 'src/components/common/LoadingScreen';
import ScrollReset from 'src/components/common/ScrollReset';
import { AuthProvider } from 'src/contexts/AuthContext';
import { SettingsProvider } from 'src/contexts/SettingsContext';
import useSettings from 'src/hooks/useSettings';
import withApollo from 'src/lib/apollo';
import { createTheme } from 'src/theme';

// import { appWithTranslation } from '@/root/i18n';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

enableES5();

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const { settings } = useSettings();
  const Guard = Component.Guard || React.Fragment;
  const Layout = Component.Layout || React.Fragment;

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const start = () => setLoading(true);
    const stop = () => setLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', stop);
    Router.events.on('routeChangeError', stop);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', stop);
      Router.events.off('routeChangeError', stop);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <SnackbarProvider
            dense
            maxSnack={1}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <AuthProvider>
              <GlobalStyles />
              <ScrollReset />
              <CssBaseline />
              <Guard>
                <Layout>
                  {loading ? <LoadingScreen /> : <Component {...pageProps} />}
                </Layout>
              </Guard>
            </AuthProvider>
          </SnackbarProvider>
        </StylesProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

// export default withSettingsProvider(appWithTranslation(MyApp));
export default withApollo({ ssr: false })(withSettingsProvider(MyApp));

function withSettingsProvider(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => (
    <SettingsProvider>
      <Component {...props} />
    </SettingsProvider>
  );
}
