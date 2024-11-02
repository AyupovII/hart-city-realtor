import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/AuthLayout/AuthLayout'
import Authorization from './components/Authorization/Authorization'
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery'
import LoginForgotPassword from './components/LoginForgotPassword/LoginForgotPassword'
import LiveRequestRegistration from './components/LiveRequestRegistration/LiveRequestRegistration'
import MainLayout from './components/MainLayout/MainLayout'
import Main from './pages/Main'
import { createContext, useState } from 'react'
import ObjectsPage from './pages/ObjectsPage'
import ObjectIdPage from './pages/ObjectIdPage'
import Modal from './components/Modal/Modal'
import MyRequestsPage from './pages/MyRequestsPage'

export type ContextType = {
  hiddenScroll: boolean;
  setHiddenScroll: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Context = createContext<ContextType>({} as ContextType);

function App() {
  const [hiddenScroll, setHiddenScroll] = useState(false);

  return (
    <Context.Provider value={{ hiddenScroll, setHiddenScroll }}>
      <div className={hiddenScroll ? '_lock' : ''}>
        {/* <AuthLayout>
          <Routes>
            <Route path="/auth" element={<LoginForgotPassword />} />
            <Route path="/live-request-registration" element={<LiveRequestRegistration />} />
          </Routes>
        </AuthLayout> */}
        <MainLayout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/objects" element={<ObjectsPage />} />
            <Route path="/objects/:objectId" element={<ObjectIdPage />} />
            <Route path="/my-requests" element={<MyRequestsPage />} />
          </Routes>
        </MainLayout>
      </div>

    </Context.Provider>
  )
}

export default App
