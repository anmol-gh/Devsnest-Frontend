import Boxes from "./chessboard.jsx";

function Container() {
  return (
    <div className="container">
      {/* <Boxes /> */}
      {[...Array(81)].map((i) => (
        <Boxes />
      ))}
    </div>
  );
}

export default Container;
