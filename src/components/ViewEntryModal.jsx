function ViewEntryModal({ isOpen, onClose, entry, onDelete }) {
  if (!isOpen || !entry) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">

        <div className="mb-6 flex items-start justify-between gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {entry.date}
            </p>

            <h2 className="text-3xl font-bold text-white">
              {entry.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-800 text-xl text-slate-400 transition hover:border-slate-600 hover:text-white"
          >
            ×
          </button>
        </div>

        <img
          src={entry.image}
          alt={entry.title}
          className="mb-6 h-72 w-full rounded-xl object-cover"
        />

        <p className="whitespace-pre-line text-base leading-7 text-slate-300">
          {entry.content}
        </p>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={() => onDelete(entry.id)}
            className="rounded-xl border border-red-900/50 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-950 hover:text-red-300"
          >
            Delete Entry
          </button>
        </div>

      </div>
    </div>
  )
}

export default ViewEntryModal 