import Navbar from './components/navbar'
import Principal from './containers/principal';
import { ContainerBackground } from './styles/generalStyles';



function App() {
  return (
    <div>
      <ContainerBackground>
        <Navbar />
        <Principal/>
      </ContainerBackground>
    </div>
  );
}

export default App;
