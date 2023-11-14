export default function App() {
  return (
    <>
      <div className="bg-image" />
      <div className="flex flex-col container justify-center items-start md:pt-[15rem] pt-[8rem] px-4 md:px-12 pb-3  ">
        <h2 className="text-white font-bold md:text-7xl text-4xl max-w-xl">
          We make almost anything
        </h2>
        <div className="pt-[4rem]">
          <button className="px-6 py-3  hover:text-black transition text-white hover:bg-slate-300 border-2 border-slate-200 rounded-full ">
            See our services
          </button>
        </div>
      </div>
    </>
  );
}
