'use client';

export default function PageNavigationButtons() {
  return (
    <div className="flex gap-4 justify-center pt-8 mt-12">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
      >
        ⬆️ Back to Top
      </button>
      <a
        href="/"
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition"
      >
        🏠 Back to Homepage
      </a>
    </div>
  );
}
