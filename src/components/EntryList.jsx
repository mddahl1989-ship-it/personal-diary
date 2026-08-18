import EntryCard from './EntryCard'

function EntryList({ entries, onEntryClick }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          My Journal
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Kleine Momente.
          <br />
          Große Erinnerungen.
        </h2>
      </div>

      {entries.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-12 text-center">
          <p className="text-lg text-slate-400">
            No diary entries yet.
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Add your first memory with the button above.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...entries]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((entry) => ( 
            <EntryCard
              key={entry.id}
              entry={entry}
              onClick={() => onEntryClick(entry)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default EntryList

