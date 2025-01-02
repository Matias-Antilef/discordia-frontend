import NavItem from "./nav-item";
import NavList from "./nav-list";
import NavSettings from "./nav-settings";

function NavPannel() {
  return (
    <div className="bg-neutral-800/80 relative">
      <NavList>
        {Array.from({ length: 3 }, (_, index) => (
          <NavItem key={index} id={index.toString()} />
        ))}
      </NavList>
      <NavSettings />
    </div>
  );
}
export default NavPannel;
