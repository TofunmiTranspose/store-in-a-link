import Input from "../../Input";

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="text-md sm:text-lg font-semibold sm:font-base ">Colors</h2>
      <div className="mt-1 sm:mt-1 flex flex-col scale-90 sm:scale-95">
        <Input
          handleChange={handleChange}
          value=""
          title="All"
          name="test3"
          color="linear-gradient( red, blue)"
        />
        {["black", "blue", "red", "green"].map((c) => (
          <Input
            key={c}
            handleChange={handleChange}
            value={c}
            title={c.charAt(0).toUpperCase() + c.slice(1)}
            name="test3"
            color={c}
          />
        ))}
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test3"
          color="white"
          border="2px solid black"
        />
      </div>
    </div>
  );
}

export default Colors;
