import Footer from './components/footer';
import MostSearchCard from './components/mostSearchCard';
import Navbar from './components/navbar'
import Principal from './containers/principal';
import Productos from './containers/productos';



function App() {
  return (
    <div>
      <Navbar />
      <Principal />
      <Productos />
      <MostSearchCard />
      <Footer />
    </div>
  );
}

export default App;
