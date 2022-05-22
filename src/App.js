import Footer from './components/footer';
import Navbar from './components/navbar'
import TestimonialCard from './components/testimonialsCard';
import MasBuscados from './containers/masBuscados';
import Principal from './containers/principal';
import Productos from './containers/productos';



function App() {
  return (
    <div>
      <Navbar />
      <Principal />
      <Productos />
      <MasBuscados/>
      <Footer />
    </div>
  );
}

export default App;
