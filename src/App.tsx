// this is the main file for the journal application
import React, {useState} from 'react';
import JournalForm from './components/JournalForm';
import JournalList from './components/JournalList';
import {JournalEntry} from './types/JournalEntry';

/**
 * The main React component for the journal application.
 * It manages the state of the journal entries and provides functionality to add, delete, and edit entries.
 */
const App: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const addEntry = (entry: JournalEntry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const editEntry = (entry: JournalEntry) => {
    const updatedEntries = entries.map((e) => (e.id === entry.id ? entry : e));
    setEntries(updatedEntries);
  };


  // TODO: Add edit functionality
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Journal</h1>
      <JournalForm onAddEntry={addEntry} />
      <JournalList entries={entries} onDelete={deleteEntry} onEdit={editEntry} />
    </div>
  );
};

export default App;
