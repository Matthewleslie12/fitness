export function ProgressBar() {
  return (
    <div className="w-5/6 bg-lightGray dark:bg-white border-black border rounded-full">
      <div
        className="bg-neon py-1 text-center text-xs font-medium leading-none text-primaryBlack rounded-l-full"
        style={{width: "90%"}}
      >
        25%
      </div>
    </div>
  );
}
