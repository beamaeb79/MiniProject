import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Home({ token }) {
    return ( <
        Layout >
        <
        Navbar / >
        <
        div class = "m-8 relative flex flex-center min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" >
        <
        h1 class = "font-mono text-center text-5xl font-medium" > HI GUYS! < /h1> <
        small class = "font-mono text-center text-black text-2xl" > Are you ready to share your mood ? < /small> <
        /div> <
        /Layout>
    );
}

export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}