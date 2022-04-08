import Homepage from './pages/homepage/Homepage';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <div>
      <AuthProvider value>
        <Homepage />
      </AuthProvider>
    </div>
  );
}

export default App;
