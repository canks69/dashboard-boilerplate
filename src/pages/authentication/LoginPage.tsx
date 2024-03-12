import {Link} from "react-router-dom";
import {InputGroup} from "../../components/foms/InputGroup.tsx";

export const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
    window.location.href = "/admin"
  }
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/2000x1200/?nature,water"
              alt="Article"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <form onSubmit={handleSubmit}>
                <InputGroup
                  label={"Email"}
                  name={"email"}
                  type={"email"}
                  icon={"bi:person"}
                  placeholder={"Email"}/>

                <InputGroup
                  label={"Password"}
                  name={"password"}
                  type={"password"}
                  icon={"bi:lock"}
                  placeholder={"Password"}
                />
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
                >
                  Log in
                </button>
              </form>
              <p className="mt-4">
                <Link to={"/"} className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                  Forgot your password?
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}