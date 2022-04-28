import Conversion from "./component/Conversion/Conversion";
import Questionnaire from "./component/Questionnaire/Questionnaire";
import Sorting from "./component/Sorting/Sorting";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Conversion />
      <Questionnaire />
      <Sorting />
    </div>
  );
}

export default App;
