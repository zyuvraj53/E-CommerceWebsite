export default function StockTrackingModal({closeModal}) {
  return (
    <div className="modalBackground w-1/2 h-full bg-[#C8C8C8] absolute transform -translate-x-1/2 +translate-y-3/4 top-1/2 left-1/2 rounded-xl">
      {/* border-red-900 border-4*/}
      <div className="modalContainter">
        <button className="mx-2" onClick={() => closeModal(false)}> X </button>
        <div className="flex justify-center items-center h-[94%] absolute w-full flex-col"> {/*border-red-900 border-4*/}
        <div className="title">
          <h1>Stock Tracking</h1>
        </div>
        <div className="body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
        </div>
        </div>
      </div>
    </div>
  );
}
