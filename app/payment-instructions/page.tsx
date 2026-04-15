'use client';

export default function PaymentInstructionsPage() {
  return (
    <main className="min-h-screen bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Payment Instructions</h1>

        {/* Payment Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Payment Methods</h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <span className="text-2xl">🏦</span> SBI Collect (Recommended)
            </h3>
            <p className="text-gray-800 mb-4">
              Pay online through SBI's secure payment gateway. This is the recommended method for hassle-free transactions.
            </p>
            <a
              href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=365641"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              💳 Pay Now via SBI Collect
            </a>
          </div>
        </section>

        {/* Step-by-step Instructions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Payment Instructions</h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10 shadow-lg border border-blue-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                <div>
                  <p className="text-lg md:text-xl text-gray-800"><span className="font-semibold text-blue-700">Click on "Pay Now via SBI Collect"</span> button above or follow the link provided</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                <div>
                  <p className="text-lg md:text-xl text-gray-800">In Payment Category, select <span className="font-semibold text-blue-700">"Conference/Workshop/Other Charge"</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                <div>
                  <p className="text-lg md:text-xl text-gray-800">In Conference/Workshop code field, select <span className="font-semibold text-blue-700">"CONFR 179 MID"</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
                <div>
                  <p className="text-lg md:text-xl text-gray-800">In Category field, select <span className="font-semibold text-blue-700">"Individual"</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
                <div>
                  <p className="text-lg md:text-xl text-gray-800">Fill in your details (Name, Email, Phone, Amount based on your category)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">6</span>
                <div>
                  <p className="text-lg md:text-xl text-gray-800">Review your payment details and click <span className="font-semibold text-blue-700">"Proceed to Payment"</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">7</span>
                <div>
                  <p className="text-lg md:text-xl text-gray-800">You will be redirected to your bank's payment page. Complete the payment using your preferred method</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">8</span>
                <div>
                  <p className="text-lg md:text-xl text-gray-800">You will receive a payment confirmation email within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Gateway Support */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Supported Payment Methods on SBI Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">💳 Card Payments</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Debit Cards (All banks)</li>
                <li>• Credit Cards (All banks)</li>
                <li>• International Cards</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">🏦 Bank Transfers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Net Banking (All banks)</li>
                <li>• NEFT/RTGS</li>
                <li>• UPI Payments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-8 border-orange-500 rounded-r-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">⚠️</span> Important Notes
          </h2>
          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span>All authors and co-authors must register and pay the fee <strong>individually</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span>Payment confirmation may take up to <strong>24 hours</strong>. Please do not make multiple payment attempts.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span><strong>The fee once paid will NOT be refunded.</strong> Payment should be made only after confirming your participation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span>Keep your payment confirmation email safe for future reference and check-in at the conference.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span>International participants should ensure they have completed their online registration before making the payment.</span>
            </li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Issues?</h2>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-4">If you face any issues with payment:</h3>
            <ol className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <span>Check your internet connection and try again</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <span>Ensure your bank/card is enabled for online transactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <span>Check your bank's SMS for OTP (One-Time Password) requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <span>Wait 24-48 hours for the payment to reflect in the system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">5.</span>
                <span>Contact the organizing committee through the Contact Us page with your payment details</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <a
            href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=365641"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg transition text-lg"
          >
            💳 Proceed to Payment →
          </a>
        </div>
      </div>
    </main>
  );
}
