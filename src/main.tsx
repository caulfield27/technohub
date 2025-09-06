import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { Provider } from './app/Provider.tsx'
import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluentProvider theme={webLightTheme}>
      <Provider />
    </FluentProvider>
  </StrictMode>,
)
