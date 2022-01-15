import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Client from './components/Clients/Client';
import { ClientProvider } from './contexts/ClientContext';
import { ToastifyProvider } from './contexts/ToastifyContext';
import './styles/styles.scss';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container-fluid">
        {/* <CssBaseline /> */}
        <ToastifyProvider>
          <ClientProvider>
            <Client />
          </ClientProvider>
        </ToastifyProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
