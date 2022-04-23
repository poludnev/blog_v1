import Homepage from 'src/pages/homepage/Homepage';
import { AuthProvider } from 'src/contexts/AuthContext';
import 'src/App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider value>
        <Homepage />
      </AuthProvider>
    </div>
  );
}

export default App;
