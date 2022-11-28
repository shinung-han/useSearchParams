import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/list?sort=popular">
        <button>Link로 이동</button>
      </Link>
    </div>
  );
}

export default App;
