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
            <div class="w-6/12 sm:w-4/12 px-4">
              <img src="https://www.purinaone.co.th/assets/img/ydm/product5.png" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
              <a> เพียวริน่า วัน <br></br>

                อาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม <br></br>

                สำหรับลูกแมว อายุ 3 สัปดาห์ - 1 ปี ทุกสายพันธุ์<br></br>

                
              </a>
            </div>
          </div>

          <div class="flex flex-row justify-center border-2">
            <div class="w-6/12 sm:w-4/12 px-4">
              <img src="https://www.purinaone.co.th/assets/img/ydm/product1.png" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
              <a>
                เพียวริน่า วัน เท็นเดอร์ ซีเล็กซ์ เบลนด์ สูตรปลาแซลมอน <br></br>

                อาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม <br></br>

                สำหรับแมว อายุ 1 ปีขึ้นไป <br></br>

              </a>
            </div>
          </div>

          <div class="flex flex-row justify-center border-2">
            <div class="w-6/12 sm:w-4/12 px-4">
              <img src="https://www.purinaone.co.th/assets/img/ydm/product5.png" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
              <a>
                เพียวริน่า วัน <br></br>

                อาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม <br></br>

                สำหรับแมวเลี้ยงในบ้าน อายุ 1ปีขึ้นไป <br></br>
 
              
              </a>
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
