import Footer from './components/footer';
import Navbar from './components/navbar'
import Principal from './containers/principal';
import Productos from './containers/productos';



function App() {
  return (
    <div>
        <Navbar />
        <Principal/>
        <Productos/>

        <Footer/>
    </div>
  );
}

export default App;
