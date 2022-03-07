import './App.css';
import { useLang } from './Assets/Context/LangChanger.jsx';
import Header from './componentGeneral/Header/Header';

function App() {

  const { lang } = useLang();

  return (
    <div className="App">

      <Header lang={lang}/>

    </div>
  );
}

export default App;
