import './App.css';
import MainComponent from "./MainComponent";

function App() {

    const testReport = window.testsReport

    return (
        <MainComponent tests={testReport}/>
    );
}

export default App;
