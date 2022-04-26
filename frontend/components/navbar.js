import Link from "next/link";

const Navbar = () => (

    <
    nav id = "header" >
    <
    div class = "bg-black flex flex-wrap items-center mt-0 px-0 py-0 lg:py-4" >
    <
    div class = "pl-8 pr-8 items-center" >
    <
    a class = "text-4xl text-white font-bold"
    href = "#" >
    EMO CAPSULE <
    /a> <
    /div>

    <
    div class = "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 p-4 lg:p-0 z-20"
    id = "nav-content" >
    <
    ul class = "list-reset lg:flex justify-end flex-1 items-center" >

    <
    li class = "mr-3" >
    <
    a class = "inline-block text-white hover:text-black hover:bg-teal-100 focus:ring focus:ring-rose-100 py-2 px-4"
    href = "/" >
    Home <
    /a> <
    /li>

    <
    li class = "mr-3" >
    <
    a class = "inline-block text-white hover:text-black hover:bg-teal-100 focus:ring focus:ring-rose-100 py-2 px-4"
    href = "/productII" >
    Blog <
    /a> <
    /li>

    <
    li class = "mr-3" >
    <
    a class = "inline-block text-white hover:text-black hover:bg-teal-100 focus:ring focus:ring-rose-100 py-2 px-4"
    href = "register" >
    Register <
    /a> <
    /li>

    <
    li class = "mr-3" >
    <
    a class = "inline-block text-white hover:text-black hover:bg-teal-100 focus:ring focus:ring-rose-100 py-2 px-4"
    href = "login" >
    Login <
    /a> <
    /li>

    <
    li class = "mr-3" >
    <
    button

    class = "inline-block bg-rose-100 hover:bg-teal-100 py-2 px-4"
    href = "logout" >
    Logout <
    /button> <
    /li> <
    /ul>

    <
    /div> <
    /div> <
    /nav>
);

export default Navbar;