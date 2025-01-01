import NavItem from "./nav-item";
import NavList from "./nav-list";

function NavPannel() {
  return (
    <div className="bg-slate-800">
      <NavList>
        {Array.from({ length: 50 }, (_, index) => (
          <NavItem key={index} id={index.toString()} />
        ))}
      </NavList>
      ;
    </div>
  );
}
export default NavPannel;
