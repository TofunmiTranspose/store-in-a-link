import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar({ handleChange, side: [isOpen, _] }) {
  return (
    <>
      <section
        className={`w-[15vw] min-w-45 ${
          isOpen
            ? "flex fixed backdrop-filter backdrop-filter backdrop-brightness-20 overflow-y-scroll"
            : "hidden"
        } fixed top- sm:flex flex-col items-center h-full border-r-[1px] border-[#e5e5e5] z-3 bg-[#f9f9f9] overflow-y-scroll pt-4 pb-20`}
        style={{ scrollbarWidth: "none"}}
      >
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        <button onClick={() => localStorage.clear()}>Logout</button>
      </section>
    </>
  );
}

export default Sidebar;
