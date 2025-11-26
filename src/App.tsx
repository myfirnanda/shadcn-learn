import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './components/theme-provider'
import Cover from './pages/cover';
import Page from './pages/dashboard/page';
import ButtonPage from './pages/button-page';
import DropdownPage from './pages/dropdown-page';
import FormHookPage from './pages/form-hook';
import CardProfilePage from './pages/card-profile';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='shadcn-theme'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
          <Route path="/form-hook" element={<FormHookPage />} />
          <Route path="/card-profile" element={<CardProfilePage />} />
          <Route path="/dashboard" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
