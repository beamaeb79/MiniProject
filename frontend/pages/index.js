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

          {/* <button */}
          {/* class="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48" */}
          {/* > */}
          {/* Sign Up */}
          {/* </button> */}
          {/* <a */}
          {/* href="#" */}
          {/* class="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8" */}
          {/* >View Additional Action</a */}
          {/* > */}
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
                  Real Chicken is #1 Ingredient
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
              <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                >
                  Action
                </button>
              </div>
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
              <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                >
                  Action
                </button>
              </div>
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
              <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
                >
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <div class="justify-center flex flex-row mt-10">
        <div class="basis-1/4">
          <Image
            className={styles.immage}
            src="/1.jpg"
            alt="my picture"
            width={500}
            height={500}
          />
          <div class="text-center">
            <p class="r mt-4 text-gray-700">
              เพียวริน่า วันอาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม<br></br>
              สูตรไวแบร็นท์ เมชัวร์ริตี้ สำหรับแมวอายุ 7 ปีขึ้นไป
            </p>
            <h3 class=" mt-4 text-gray-700">อาหารแมวแบบเม็ด มีเนื้อไก่เป็นส่วนผสมอันดับหนึ่ง สำหรับแมวแก่อายุ 7 ปีขึ้นไป   </h3>
            <li>เพื่อสุขภาพที่ดีของแมวสูงวัย อายุ 7 ปีขึ้นไป</li>
            <li>มีโปรตีนคุณภาพสูงจากเนื้อไก่ ให้กล้ามเนื้อสมส่วน และหัวใจแข็งแรงด้วยกลูโคซามีน</li>

            <p class="mt-1 text-lg font-medium text-gray-900">320 บาท</p>
          </div>
        </div>
        <div class="basis-1/4">
          <Image
            className={styles.immage}
            src="/2.jpg"
            alt="my picture"
            width={500}
            height={500}
          />
          <div class="text-center">
            <p class="r mt-4 text-gray-700">
              เพียวริน่า วันอาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม<br></br>
              สูตรลูกแมว

            </p>
            <h3 class=" mt-4 text-gray-700">อาหารสำหรับลูกแมว อายุ 3 สัปดาห์ - 1 ปี</h3>
            <li>มี DHA ซึงเป็นสารที่พบในน้ำนมแม่ เพื่อพัฒนาการทางสมอง และการมองเห็น</li>
            <li>มีโปรตีนสูง สำหรับลูกแมวที่กำลังเจริญเติบโต</li>

            <p class="mt-1 text-lg font-medium text-gray-900">320 บาท</p>
          </div>
        </div>
        <div class="basis-1/4 ">

          <Image
            className={styles.immage}
            src="/3.jpg"
            alt="my picture"
            width={500}
            height={500}
          />
          <div class="text-center">
            <p class="r mt-4 text-gray-700">
              เพียวริน่า วันอาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม<br></br>
              สูตรแมวเลี้ยงในบ้าน            </p>
            <h3 class=" mt-4 text-gray-700">อาหารแมวแบบเม็ด สูตรแมวเลี้ยงในบ้าน สำหรับแมวโต</h3>
            <li>มีใยอาหารจากธรรมชาติสูง ลดการเกิดก้อนขนและช่วยในระบบขับถ่าย</li>
            <li>- สารต้านอนุมูลอิสระจากวิตามิน E,A และซีลีเนียมเสริมภูมิต้านทาน</li>

            <p class="mt-1 text-lg font-medium text-gray-900">320 บาท</p>
          </div>
        </div>
      </div> */}

    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}