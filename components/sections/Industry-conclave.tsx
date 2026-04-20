export default function industryConclave() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Industry-Academia Conclave 2026
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Download the detailed brochure for the Industry-Academia Conclave at IIT Roorkee.
        </p>
        <div className="flex justify-center">
          <a
            href="/INDUSTRY-ACADEMIA CONCLAVE 2026 IITR-SSS-BBGIF AD.pdf" // Update with actual PDF path
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
}