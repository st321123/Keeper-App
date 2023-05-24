import react from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './components/App.jsx'

const re = createRoot(document.getElementById('root'));
re.render( <App />);