import ServerItem from "./server-item";
import ServerList from "./server-list";

function ServerPannel() {
  return (
    <div className="bg-slate-950 ">
      <ServerList>
        {Array.from({ length: 50 }, (_, index) => (
          <ServerItem key={index} name={index.toString()} />
        ))}
      </ServerList>
    </div>
  );
}
export default ServerPannel;
