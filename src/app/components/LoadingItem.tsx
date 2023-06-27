const LoadingItem = () => {
  return (
    <div className="bg-zinc-900 rounded-2xl grid grid-cols-2 h-64 m-1" style={{ minWidth: 350, minHeight: 256, maxWidth: 350, maxHeight: 256 }}>
      <div className="w-full h-full flex justify-center items-center">
        <div className="rounded-2xl bg-change" style={{maxHeight: 230, minHeight: 230, maxWidth: 164, minWidth: 164,}}></div>
      </div>
      <div className="h-full w-full p-2">
      </div>
    </div>
  );
};

export default LoadingItem