import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Home({ token }) {
  return (
    <Layout>

      <Navbar />

      <div class="container mx-auto h-screen">
        <div class="text-center px-3 lg:px-0">
          <h1
            class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
          >
            Purina ONE®
          </h1>
          <p
            class="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
          >
            Your Pet, Our Passion!
          </p>
        </div>

        <div class="flex items-center w-full mx-auto content-end">
          <div
            class="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
          ></div>
        </div>
      </div>


      <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2
            class="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800"
          >
            Explore Our Cat Brands        </h2>
          <div class="w-full mb-4">
            <div
              class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
            ></div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  GETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Purina ONE® +Plus Healthy Kitten Dry Cat Food
                </div>
                <p class="text-gray-600 text-base px-6 mb-5">
                  Natural With Added Vitamins, Minerals & Nutrients
                  Real Chicken
                  High Protein Supports Kittens’ Growing Muscles
                  Supports Vision & Brain Development
                  Contains DHA, a Nutrient Found in Mothers’ Milk
                  Purina ONE Formulas Are Veterinarian Recommended
                </p>
                <Image
                  className={styles.immage}
                  src="/2.jpg"
                  alt="my picture"
                  width={300}
                  height={300}
                />
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              {/* <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                >
                  Add
                </button>
              </div> */}
            </div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  GETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Purina ONE® +Plus Indoor Advantage® Dry Cat Food
                </div>
                <p class="text-gray-600 text-base px-6 mb-5">
                  Natural With Added Vitamins, Minerals & Nutrients
                  Real Turkey is #1 Ingredient
                  Helps Maintain a Healthy Weight
                  Natural Fiber Blend Minimizes Hairballs
                  4 Antioxidant Sources Support Immune Health
                  Purina ONE Formulas Are Veterinarian Recommended
                </p>
                <Image
                  className={styles.immage}
                  src="/3.jpg"
                  alt="my picture"
                  width={300}
                  height={300}
                />
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              {/* <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                >
                  Add
                </button>
              </div> */}
            </div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  GETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Purina ONE® +Plus Indoor Advantage® Senior 7+ Dry Cat Food
                </div>
                <p class=" text-gray-600 text-base px-6 mb-5">
                  Natural With Added Vitamins, Minerals & Nutrients
                  Real Chicken is #1 Ingredient
                  Helps Support Senior Cat Health
                  Natural Fiber Blend Minimizes Hairballs
                  4 Antioxidant Sources Support Immune Health
                  Purina ONE Formulas Are Veterinarian Recommended
                </p>
                <Image
                  className={styles.immage}
                  src="/1.jpg"
                  alt="my picture"
                  width={300}
                  height={300}
                />
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              {/* <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                >
                  Add
                </button>
              </div> */}
            </div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  GETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Purina ONE® +Plus Urinary Tract Health Formula Dry Cat Food
                </div>
                <p class=" text-gray-600 text-base px-6 mb-5">
                  Helps Maintain Urinary Tract Health by Reducing Urinary pH and Providing Low Magnesium
                  Supports Strong Muscles, Including a Healthy Heart
                  4 Antioxidant Sources Support Immune Health
                  Easily Digestible, With a SmartBlend® of Ingredients
                  Purina ONE Formulas are Veterinarian Recommended
                </p>
                <Image
                  className={styles.immage}
                  src="/4.jpg"
                  alt="my picture"
                  width={300}
                  height={350}
                />
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >

              {/* <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                >
                  Add
                </button>
              </div> */}
            </div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  GETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6"
                >
                  Purina ONE® +Plus Hairball Formula Dry Cat Food
                </div>
                <p class=" text-gray-600 text-base px-6 mb-5">
                  Natural With Added Vitamins, Minerals & Nutrients
                  Real Chicken is #1 Ingredient
                  Helps Minimize Hairballs with Natural, Fiber-Rich Nutrition
                  Supports Strong Muscles, Including a Healthy Heart
                  4 Antioxidant Sources Support Immune Health
                  Purina ONE Formulas Are Veterinarian Recommended
                </p>
                <Image
                  className={styles.immage}
                  src="/6.jpg"
                  alt="my picture"
                  width={300}
                  height={350}
                />
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              {/* <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                 
                >
                Add
                </button>
              </div> */}
            </div>
          </div>


          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  GETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Purina ONE® Ideal Weight High Protein Dry Cat Food
                </div>
                <p class=" text-gray-600 text-base px-6 mb-5">
                  Natural With Added Vitamins, Minerals & Nutrients
                  Real Turkey is #1 Ingredient
                  Helps Cats Maintain a Healthy Weight and Metabolism
                  Easily Digestible and Burns Fat More Efficiently
                  Supports Strong Muscles, Including a Healthy Heart
                  Purina ONE Formulas Are Veterinarian Recommended
                </p>
                <Image
                  className={styles.immage}
                  src="/5.jpg"
                  alt="my picture"
                  width={300}
                  height={350}
                />
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              {/* <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                >
                  Add
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}


export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}