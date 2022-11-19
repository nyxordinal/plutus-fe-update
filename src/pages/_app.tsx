import { AuthProvider } from '@auth';
import PageChange from '@component/PageChange/PageChange.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import '../styles/tailwind.css';

// TODO remove this loading things
Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add('body-page-transition');
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition')
  );
});
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition') as Element);
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition') as Element);
  document.body.classList.remove('body-page-transition');
});
// TODO end here

const MyApp = ({ Component, pageProps }: AppProps) =>
// static async getInitialProps({ Component, router, ctx }) {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps };
// }
// render() 
{
  // const { Component, pageProps } = this.props;

  // const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Plutus</title>
      </Head>
      <AuthProvider>
        <Provider store={store}>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </Provider>
      </AuthProvider>
    </Fragment>
  );
}
// }

export default MyApp