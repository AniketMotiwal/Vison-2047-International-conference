'use client';

export default function BackToTopButton() {
  return (
    <div className="flex justify-center py-8">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
      >
        ⬆️ Back to Top
      </button>
    </div>
  );
}
