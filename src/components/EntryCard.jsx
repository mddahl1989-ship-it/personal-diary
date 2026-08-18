function EntryCard({ entry, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl"
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-800">
        <img
          src={entry.image}
          alt={entry.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          {entry.date}
        </p>

        <h2 className="text-xl font-semibold text-white">
          {entry.title}
        </h2>
      </div>
    </article>
  )
}

export default EntryCard
