import './App.css'
import Page from './app/dashboard/page'
import { ThemeProvider } from './components/theme-provider'

function App() {


  return (
    <ThemeProvider defaultTheme='dark' storageKey='shadcn-theme'>
      <Page />
    </ThemeProvider>
  )
}

export default App
