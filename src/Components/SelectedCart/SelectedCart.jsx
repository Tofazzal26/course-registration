const SelectedCart = ({ cart }) => {
  return (
    <div className="w-[300px]">
      <div className="bg-[#ffffff] shadow-2xl rounded-md">
        <div className="p-6">
          <h2 className="text-lg text-[#4784e5]">
            Credit Hour Remaining {cart.length} hr
          </h2>
          <div className="divider"></div>
          <h2 className="text-lg font-semibold">Course Name</h2>
          <div className="divider"></div>
          <h2 className="text-[#585858]">Total Credit Hour : 13</h2>
          <div className="divider"></div>
          <h2 className="text-[#585858]">
            Total Price : {cart.reduce((b, a) => b + a.price, 0)} USD
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SelectedCart;
