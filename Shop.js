import { Link } from "react-router-dom";

const Shop = () => {
  const dummyData = [
    { id: "m1", item: "item1" },
    { id: "m2", item: "item2" },
    { id: "m3", item: "item3" },
  ];
  return (
    <div>
      <h1>Shop Page</h1>
      {/* creating dynamic links */}
      {dummyData.map((data) => (
        <h2 key={data.id}>
          <Link to={`/shop/${data.id}`}>{data.item}</Link>
        </h2>
      ))}
    </div>
  );
};

export default Shop;
