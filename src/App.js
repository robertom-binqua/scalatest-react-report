import './App.css';
import SidebarLayout from "./SidebarLayout";

function App() {

    const testReport = window.testsReport

    return (
        <SidebarLayout tests={testReport}/>
    );
}

export default App;
