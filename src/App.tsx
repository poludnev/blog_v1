import Homepage from 'src/pages/homepage/Homepage';
import { AuthProvider } from 'src/contexts/AuthContext';
import { NewPostContextProvider } from './contexts/NewPostContext';
import 'src/App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider value>
        <NewPostContextProvider value>
          <Homepage />
        </NewPostContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
