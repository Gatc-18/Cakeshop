import Navbar from './components/navbar'
import Principal from './containers/principal';
import Productos from './containers/productos';



function App() {
  return (
    <div>
        <Navbar />
        <Principal/>
        <Productos/>
    </div>
  );
}

export default App;
