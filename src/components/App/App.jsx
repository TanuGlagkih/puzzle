import { AppHeader } from '../AppHeader/AppHeader';
import { Main } from '../Main/Main';
import styles from './App.module.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

export function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Main />
      </DndProvider>
    </div>
  );
}

export default App;
