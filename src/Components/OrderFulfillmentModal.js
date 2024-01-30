export default function StockTrackingModal({closeModal}) {
  return (
    <div className="modalBackground w-screen h-screen bg-[#C8C8C8] fixed justify-center items-center">
      <div className="modalContainter">
        <button onClick={() => closeModal(false)}> X </button>
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
  );
}
