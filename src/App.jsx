import { useEffect, useState } from 'react'
import Header from './components/Header'
import EntryList from './components/EntryList'
import AddEntryModal from './components/AddEntryModal'
import ViewEntryModal from './components/ViewEntryModal'

function App() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('diaryEntries')

    if (savedEntries) {
      return JSON.parse(savedEntries)
    }

    return [
      {
        id: 1,
        title: 'Irgendwann ist immer das erste Mal',
        date: '2026-08-13',
        image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
        content: 'This is my first entry in my personal diary.',
      },
    ]
  })

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries))
  }, [entries])

  function handleAddEntry(newEntry) {
    const entryAlreadyExists = entries.some(
      (entry) => entry.date === newEntry.date
    )

    if (entryAlreadyExists) {
      alert('You already have an entry for this day. Come back tomorrow!')
      return false
    }

    const entryWithId = {
      ...newEntry,
      id: Date.now(),
    }

    setEntries((currentEntries) => [...currentEntries, entryWithId])

    return true
  }

  function handleEntryClick(entry) {
    setSelectedEntry(entry)
    setIsViewModalOpen(true)
  } 
  function handleDeleteEntry(entryId) {
  const confirmed = window.confirm(
    'Are you sure you want to delete this diary entry?'
  )

  if (!confirmed) {
    return
  }

  setEntries((currentEntries) =>
    currentEntries.filter((entry) => entry.id !== entryId)
  )

  setSelectedEntry(null)
  setIsViewModalOpen(false)
} 

  return (
    <main className="min-h-screen bg-slate-900">
      <Header onAddEntry={() => setIsAddModalOpen(true)} />

      <EntryList
        entries={entries}
        onEntryClick={handleEntryClick}
      />

      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddEntry={handleAddEntry}
      />

      <ViewEntryModal
  isOpen={isViewModalOpen}
  onClose={() => setIsViewModalOpen(false)}
  entry={selectedEntry}
  onDelete={handleDeleteEntry}
/>
    </main>
  )
}

export default App 