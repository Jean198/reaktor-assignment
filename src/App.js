import PilotsList from './components/PilotsList';

export const URL= process.env.REACT_APP_URL_ENDPOINT;

function App() {

  return <div className="container text-center list-container">
    <h3 className='title'>PROJECT BIRDNEST</h3>
    <PilotsList/>
  </div>;
}

export default App;
