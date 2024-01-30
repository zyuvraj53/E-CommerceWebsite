export default function StockTrackingModal({closeModal}) {
  return (
    <div className="modalBackground w-[50%] h-[50%] bg-[#C8C8C8] border-4 border-red-900 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="">
        <button onClick={() => closeModal(false)}> X </button>
        <div className="flex justify-center items-center border-4 border-red-900 h-[94%] absolute w-full flex-col">
        <div className="title">
          <h1>Order Fulfilment</h1>
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
