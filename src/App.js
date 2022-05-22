import Footer from './components/footer';
import Navbar from './components/navbar'
import MasBuscados from './containers/masBuscados';
import Principal from './containers/principal';
import Productos from './containers/productos';
import Testimonials from './containers/testimonials';



function App() {
  return (
    <div>
      <Navbar />
      <Principal />
      <Productos />
      <MasBuscados/>
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;
