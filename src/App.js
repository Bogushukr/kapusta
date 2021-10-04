// import Router from './Router/Router';
import Formik from './Components/RegisterForm/RegisterForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Formik onSubmit={data => console.log(data)} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
