import { useState } from 'react'

function AddEntryModal({ isOpen, onClose, onAddEntry }) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    image: '',
    content: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (
      !formData.title ||
      !formData.date ||
      !formData.image ||
      !formData.content
    ) {
      alert('Füll die Felder aus.')
      return
    }

    const wasAdded = onAddEntry(formData)

    if (wasAdded) {
      setFormData({
        title: '',
        date: '',
        image: '',
        content: '',
      })

      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Personal Diary
            </p>

            <h2 className="text-2xl font-bold text-white">
              Add New Entry
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-xl text-slate-400 transition hover:border-slate-600 hover:text-white"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-slate-500"
              placeholder="What happened today?"
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Date
            </label>

            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-slate-500"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Image URL
            </label>

            <input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-slate-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Content
            </label>

            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="5"
              className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600"
              placeholder="Write about your day..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Save Entry
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddEntryModal 