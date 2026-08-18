function Header({ onAddEntry }) {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <h1 className="text-xl font-bold tracking-widest text-green-400 md:text-2xl">
          Hook's Tagebuch 
        </h1>

        <button
          type="button"
          onClick={onAddEntry}
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          + ADD ENTRY
        </button>
      </div>
    </header>
  )
}

export default Header
