import {Link} from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="w-full">
      <header className="flex justify-between bg-purple-900 items-center p-4">
        <h1 className="text-white text-2xl font-bold">
          Dashboard
          <label className={"text-white text-sm font-normal"}> v1.0</label>
        </h1>
        {/*Nav Menu*/}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to={"/"} className="text-white">Home</Link>
            </li>
            <li>
              <Link to={"/auth"} className="text-white">Auth</Link>
            </li>
            <li>
              <Link to={"/login"} className="text-white">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-center">Welcome to the home page</h1>
      </div>
    </div>
  );
}