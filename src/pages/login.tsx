import useAuth, { ProtectRoute } from '@auth';
import Auth from '@layout/Auth';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

const Login = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);

  const handleChangeEmail = () => (
    event: ChangeEvent<HTMLInputElement>
  ) => setEmail(event.target.value)
  const handleChangePassword = () => (
    event: ChangeEvent<HTMLInputElement>
  ) => setPassword(event.target.value)
  const handleSubmit = async () => {
    if (email === '' || password === '') {
      alert('Email and password is required')
      // openSnackbar('warning', 'Email and password is required')
    } else {
      setLoadingLogin(true)
      const result = await login(
        email.trim(),
        password.trim()
      )
      !result.success
        ? alert(result.message)
        : alert('Login success')
      setLoadingLogin(false)

    }
  }

  return (
    <Auth>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={handleChangeEmail()}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={handleChangePassword()}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      {loadingLogin ? 'Loading...' : 'Sign In'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link href={'/password/forgot'}>
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Forgot password?</small>
                  </a>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/register">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  );
}

export default ProtectRoute(Login, true)