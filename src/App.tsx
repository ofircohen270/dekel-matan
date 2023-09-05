import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { AboutPage } from './pages/About';
import { UserPage } from './pages/User';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { LoginPage } from './pages/Login';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<ProtectedRoute element={<UserPage />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
