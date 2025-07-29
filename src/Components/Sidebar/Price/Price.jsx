import Input from "../../Input";

function Price({ handleChange }) {
  return (
    <div className="ml-5">
      <h2 className="text-md font-semibold sm:font-base sm:text-lg ">Price</h2>
      <div className="mt-2 sm:mt-1 flex flex-col scale-90 sm:scale-95">
        <Input handleChange={handleChange} value="" title="All" name="test2" />
        {[
          ["$0 - $50", 50],
          ["$50 - $100", 100],
          ["$100 - $150", 150],
          ["$150 - $200", 200],
        ].map((c, i) => (
          <Input
            handleChange={handleChange}
            value={c[1]}
            key={i}
            title={c[0]}
            name="test2"
          />
        ))}
      </div>
    </div>
  );
}

export default Price;
