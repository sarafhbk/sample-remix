import { Outlet } from "remix";

export default function () {
  return (
    <div>
      <h1>This is Parent Header</h1>
      <Outlet />
    </div>
  );
}
