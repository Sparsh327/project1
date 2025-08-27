export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-4 w-full my-20">
      <button className="border px-4 py-1 rounded-full border-gray-200 hover:bg-gray-300 transition cursor-pointer duration-200 bg-gray-200 text-gray-800 relative z-10">
        Incorporation common mistakes to avoid
      </button>

      <div className="hidden lg:block mt-14 max-w-176 text-center text-5xl font-medium [word-spacing:0.02em]">
        Magically simplify <br />
        accounting and taxes
      </div>
      <div className="block mt-5 text-center text-sm font-medium [word-spacing:0.02em] text-balance text-gray-400">
        Automated bookkeeping, effortless tax filing, real‑time insights. <br />
        Set up in 10 mins. Back to building by
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer relative z-10">
          Get started
        </button>
        <div className="ml-5 px-4 py-2 bg-transparent text-gray-800 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer relative z-10">
          Pricing →
        </div>
      </div>
    </div>
  );
}
