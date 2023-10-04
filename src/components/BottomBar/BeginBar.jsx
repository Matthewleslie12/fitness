const BeginBar = () => {
  const handleStart = () => {};
  return (
    <div
      className=" h-14 rounded-3xl bg-neon flex z-50 fixed bottom-4 left-0 right-0 mx-4 cursor-pointer"
      onClick={handleStart}
    >
      <h1 className="text-primaryBlack capitalize font-bold m-auto">
        begin workout
      </h1>
    </div>
  );
};

export default BeginBar;
