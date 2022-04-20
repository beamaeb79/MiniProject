import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {

  return (
    <Layout>
      <Head>
        <title>First Page</title>
      </Head>
      <div className="w-screen h-screen bg-stone-200 border-2 flex flex-col items-center">
        <Navbar />
        <div className=" flex flex-row items-center " >
          <div class="flex flex-row justify-center border-2 ">
            <div class="w-6/12 sm:w-4/12 px-4 ">
            <a class="text-2xl text-red-600">KANIVA</a><br></br>
            <a class="text-xl">Kanivaมีทั้งหมด 3 สูตร</a>
            
            </div>
            <ul class="list-disc">
  <li>ต้องบอกว่าสำหรับทาสแมวนอกจากต้องดูแลทำความสะอาดที่จะต้องมีห้องน้ำแมวหรืออุปกรณ์ต่างๆ แต่วันนี้สาระทีมจะมาแนะนำอาหารแมวยอดฮิตกินแล้ว</li><br></br>
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
      </div>
    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
