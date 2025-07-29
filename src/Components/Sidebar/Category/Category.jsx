import Input from "../../Input";
import categories from "../../../assets/db1";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title text-lg font-semibold sm:font-base sm:text-[22px] sm:mb-5 ">
        Category
      </h2>

      <div className="mt-3 sm:mt-5 flex flex-col scale-90 sm:scale-95">
        <Input handleChange={handleChange} value="" title="All" name="test" />
        {["Men's clothing", "Jewelery", "Electronics", "Women's clothing"].map(
          (c, i) => (
            <Input
              handleChange={handleChange}
              value={c.toLocaleLowerCase()}
              key={i}
              title={c}
              name="test"
            />
          )
        )}
      </div>
    </div>
  );
}

export default Category;
