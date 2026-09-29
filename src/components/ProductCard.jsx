import Card from "./Card";

const ProductCard = ({ products,selectedItem,setSelectedItem}) => {
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <Card key={product.id} product={product} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      ))}
    </div>
  );
};

export default ProductCard;