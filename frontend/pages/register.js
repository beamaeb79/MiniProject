import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import axios from "axios";
import config from "../config/config";
import Router from "next/router";

export default function Register({ token }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const profileUser = async () => {
    console.log("token: ", token);
    const users = await axios.get(`${config.URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("user: ", users.data);
  };

  const register = async (req, res) => {
    try {
      let result = await axios.post(`${config.URL}/register`, {
        name,
        surname,
        username,
        email,
        password,
      });
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus(result.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  const registerForm = () => (
    // <div>
    //   <div>
    //     <div class="mb-2">
    //       <input
    //         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="username"
    //         type="text"
    //         placeholder="username"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>

    //     <div class="mb-2">
    //       <input
    //         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="email"
    //         type="email"
    //         placeholder="email"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>

    //     <div>
    //       <input
    //         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="Password"
    //         type="Password"
    //         placeholder="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //   </div>
    // </div>

    <div class="flex justify-center ... mt-10">
      <div class="H-20 w-30 rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="px-6 pt-4 pb-2">
            <div class="w-42 H-20 ">
              <p class="text-gray-700 text-base font-bold text-center mb-2">
                Create Account
              </p>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Password"
                type="Password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <p class=" text-gray-700  mb-">Status: {status}</p>
              </div>

              <br></br>
              <br></br>
              <div class="flex items-center justify-between">
                
                <button
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-3"
                  type="button"
                  onClick={() => loginpage()}
                >
                  LOGIN
                </button>
                <button
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-3"
                  type="button"
                  onClick={register}
                >
                  SIGN UP
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>

  );

  
  const loginpage = () =>
    Router.push({
      pathname: "/login",
    });

  return (
    <Layout>
      <Navbar />

      {/* <div class="flex justify-center ... mt-10"> */}
      {/* <div class="H-20 w-30 rounded overflow-hidden shadow-lg"> */}
        <form class="px-6 pt-4 pb-2 ">
          {/* <p class="text-slate-200 pt-5">Create Account</p> */}
          <div class="mb-4">{registerForm()}</div>
          <div class="mb-6">
          {/* <p class="text-slate-200 mb-2">Status: {status}</p> */}
          {/* <div class="flex items-center justify-between">
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-3"
                type="button"
                onClick={() => loginpage()}
              >
                Sign In
              </button>
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-3"
                type="button"
                onClick={register}
              >
                Register
              </button>
            </div> */}
          </div>
        </form>
      {/* </div> */}
      {/* </div> */}
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}