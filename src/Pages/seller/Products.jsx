import NoItems from "../../Components/NoItems";

function Products({ result }) {
  return (
    <>
      <section
        className={`card-container grid ${
          result && result.length > 0
            ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : ""
        } mt-[1rem] md:mt-[2rem] z-[-2] pb-5 px-1`}
      >
        {result && result.length > 0 ? result : <NoItems />}
      </section>
    </>
  );
}

export default Products;
