import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Home({ token }) {
  return (
    <Layout>
      <Navbar />

      <div class="justify-center flex flex-row mt-10">
        <div class="basis-1/4">
          <img src="https://www.feedmeplease.com/images/pdimg/3747/1.jpg" />
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
          <div class="w-200 h-200">
            <img src="https://www.feedmeplease.com/images/pdimg/3626/1.jpg" />
          </div>
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

          <img src="https://www.feedmeplease.com/images/pdimg/2728/1.jpg" />
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
      </div>
      {/* <div className="w-screen h-screen bg-stone-200 border-2 flex flex-col items-center">
        
        <div className=" flex flex-row items-center " >
          <div class="flex flex-row justify-center border-2 ">
            <div class="w-6/12 sm:w-4/12 px-4 ">
            <a class="text-2xl text-red-600">KANIVA</a><br></br>
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img src="https://backend.tops.co.th/media/catalog/product/8/8/8850127004908_14-03-2022.jpg" class="w-full w-full object-center object-cover group-hover:opacity-75" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
    </div>
            <a class="text-xl">Kanivaมีทั้งหมด 3 สูตร</a>
            
            </div>
            <ul class="list-disc">
  <li>ต้องบอกว่าสำหรับทาสแมวนอกจากต้องดูแลทำความสะอาดที่จะต้องมีห้องน้ำแมวหรืออุปกรณ์ต่างๆ แต่วันนี้สาระทีมจะมาแนะนำอาหารแมวยอดฮิตกินแล้ว</li>
    <li>สุขภาพดี ขนไม่ร่วง ขนนุ่ม ฟู สวยงาม เรามาดูกันว่ามีอะไรบ้าง</li>
</ul>
          </div>
          <div class="flex flex-row justify-center border-2">
            <div class="w-6/12 sm:w-4/12 px-4">
              
            </div>
          </div>
          <div class="flex flex-row justify-center border-2">
            <div class="w-6/12 sm:w-4/12 px-4">
            
            </div>
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