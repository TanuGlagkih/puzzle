import { AppHeader } from '../AppHeader/AppHeader';
import styles from './App.module.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Puzzle } from '../Puzzle/Puzzle';
import { useState } from 'react';

export function App() {
  const [mixed, setMixed] = useState(true)

  return (
    <div className={styles.app}>
      <AppHeader mixed={mixed} setMixed={setMixed} />
      <DndProvider backend={HTML5Backend}>
        <Puzzle mixed={mixed} />
      </DndProvider>
    </div>
  );
}

export default App;
