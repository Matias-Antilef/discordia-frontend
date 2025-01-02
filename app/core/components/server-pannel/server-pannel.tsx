import ServerCreate from "./server-create";
import ServerItem from "./server-item";
import ServerList from "./server-list";

function ServerPannel() {
  return (
    <div className="bg-neutral-900 relative ">
      <ServerList>
        {Array.from({ length: 3 }, (_, index) => (
          <ServerItem key={index} name={index.toString()} />
        ))}
      </ServerList>
      <ServerCreate />
    </div>
  );
}
export default ServerPannel;
