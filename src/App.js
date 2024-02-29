import { PDFDownloadLink } from '@react-pdf/renderer';
import './App.css';
import PDFFIle from './components/PDFFile';

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFIle />} filename="FORM">
        {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download PDF</button>)}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
