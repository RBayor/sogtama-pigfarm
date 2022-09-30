import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ImageWrapper } from "../components/imgWrapper";
import { Info } from "../components/info";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Songtama - Pig Farm</title>
        <meta
          name="description"
          content="Songtama Pig Farm. Produce sales and skills training"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen w-full">
        <div>
          <div className="hidden lg:block">
            <Image
              className="relative blur-sm"
              src="/img/pig.png"
              layout="responsive"
              height={512}
              width={1440}
              priority
            />
          </div>
          <div className="lg:hidden h-screen w-full">
            <Image
              className="relative object-cover blur-sm"
              src="/img/pig-phone.jpeg"
              layout="fill"
              priority
            />
          </div>
          <div className="absolute mt-10 h-full right-0 top-0  text-center space-y-3 lg:mr-28  text-3xl lg:text-7xl text-slate-50 reletive font-bold uppercase">
            <Image
              className="relative"
              src="/img/logo.png"
              layout="fixed"
              height={150}
              width={200}
              priority
            />

            <h1>Songtama</h1>
            <h2>Pig Farm</h2>
            <p className="text-2xl">high quality organically feed pigs</p>
            {/* <br /> */}
            <div className="pt-16 lg:pt-0">
              <Link href="/gallery">
                <a className="text-xl ring-2 p-4 ring-emerald-500 hover:bg-emerald-700 rounded">
                  Gallery
                </a>
              </Link>
            </div>
          </div>
        </div>
        <main className="flex flex-col w-full items-center">
          <div className="container">
            <section className="flex flex-col w-full justify-center">
              <div className="justify-evenly w-full flex flex-col lg:flex-row text-emerald-600 text-3xl mt-20">
                <Info stat={150} title={"population"} /> |
                <Info stat={12} title={"happy customers"} /> |
                <Info stat={5} title={"years running"} />
              </div>
            </section>

            <section className="flex flex-wrap text-center mt-20">
              <div className="w-full xl:w-7/12">
                <ImageWrapper
                  src={"/svg/contact.svg"}
                  alt={"savings with a piggy bank"}
                  enterLeft={true}
                />
              </div>

              <div className="w-full xl:w-5/12 text-3xl mt-20 space-y-3">
                <h1 className="text-4xl font-semibold">Songtama Pig Farm</h1>
                <p>0247583729</p>
                <p>0200932904</p>
                <p>Nyankpala, Near UDS Campus</p>
              </div>
            </section>

            <section className="flex flex-wrap justify-center text-center mt-20">
              <div className="w-full xl:w-4/12 text-base lg:mt-20 space-y-3">
                <div className="bg-slate-100 shadow-sm w rounded p-5 text-left text-emerald-500">
                  <h1 className="text-2xl uppercase font-semibold">
                    What we do
                  </h1>
                  <br />
                  <p>
                    Songtama Company LTD Specializes in various facets of pig
                    farming. We spare no effort in producing high quality pigs
                    for breeding, sales and meat.
                  </p>
                  <br />
                  <p>
                    We have spent years constantly refining our methods and
                    processes to come up with the most effiecient way to get
                    from <strong>Zero to Master Pig farmer.</strong> Aside from
                    our produce we offer these lessons to interested parties.
                  </p>
                  <br />
                  <br />
                  <div className="text-center">
                    <p>Buy From Us. Learn From Us</p>
                    <p>Or Do Both!</p>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-7/12">
                <ImageWrapper
                  src={"/svg/farm-girl.svg"}
                  alt={"savings with a piggy bank"}
                  enterLeft={false}
                />
              </div>
            </section>
          </div>
        </main>

        <div className="flex flex-row h-16 w-full bg-slate-200 mt-20"></div>
      </div>
    </>
  );
};

export default Home;
// const Home: NextPage = () => {
//   return (
//     <>
//       <Head>
//         <title>Songtama - Pig Farm</title>
//         <meta
//           name="description"
//           content="Saving and financial maanagement solution"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="flex flex-col min-h-screen w-full">
//         <div>
//           <Image
//             className="relative blur-sm"
//             src="/pig.png"
//             layout="responsive"
//             height={512}
//             width={1440}
//             priority
//           />
//           <div className="absolute mt-10 right-0 top-0  text-center space-y-3 mr-28 text-7xl text-slate-50 reletive font-bold uppercase">
//             <Image
//               className="relative"
//               src="/img/logo.png"
//               layout="fixed"
//               height={150}
//               width={200}
//               priority
//             />
//             <h1 className="shadow-lg">Songtama</h1>
//             <h2 className="shadow-lg">Pig Farm</h2>
//             <p className="text-2xl">high quality organically feed pigs</p>
//             <Link href="/gallery">
//               <a className="text-xl ring-2 p-4 ring-emerald-500 hover:bg-emerald-700 rounded">
//                 Gallery
//               </a>
//             </Link>
//           </div>
//         </div>
//         <main className="flex flex-col w-full items-center">
//           <div className="container">
//             <section className="flex w-full justify-center">
//               <div className="justify-evenly w-full flex flex-row text-emerald-600 text-3xl mt-20">
//                 <Info stat={150} title={"population"} /> |
//                 <Info stat={12} title={"happy customers"} /> |
//                 <Info stat={5} title={"years running"} />
//               </div>
//             </section>

//             <section className="flex flex-wrap text-center mt-20">
//               <div className="w-full xl:w-7/12">
//                 <ImageWrapper
//                   src={"/svg/contact.svg"}
//                   alt={"savings with a piggy bank"}
//                   enterLeft={true}
//                 />
//               </div>

//               <div className="w-full xl:w-5/12 text-3xl mt-20 space-y-3">
//                 <h1 className="text-4xl font-semibold">Songtama Pig Farm</h1>
//                 <p>0247583729</p>
//                 <p>0200932904</p>
//                 <p>Nyankpala, Near UDS Campus</p>
//               </div>
//             </section>

//             <section className="flex flex-wrap justify-center text-center mt-20">
//               <div className="w-full xl:w-4/12 text-base mt-20 space-y-3">
//                 <div className="bg-slate-100 shadow-sm w rounded p-5 text-left text-emerald-500">
//                   <h1 className="text-2xl uppercase font-semibold">
//                     What we do
//                   </h1>
//                   <br />
//                   <p>
//                     Songtama Company LTD Specializes in various facets of pig
//                     farming. We spare no effort in producing high quality pigs
//                     for breeding, sales and meat.
//                   </p>
//                   <br />
//                   <p>
//                     We have spent years constantly refining our methods and
//                     processes to come up with the most effiecient way to get
//                     from <strong>Zero to Master Pig farmer.</strong> Aside from
//                     our produce we offer these lessons to interested parties.
//                   </p>
//                   <br />
//                   <br />
//                   <div className="text-center">
//                     <p>Buy From Us. Learn From Us</p>
//                     <p>Or Do Both!</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full xl:w-7/12">
//                 <ImageWrapper
//                   src={"/svg/farm-girl.svg"}
//                   alt={"savings with a piggy bank"}
//                   enterLeft={false}
//                 />
//               </div>
//             </section>
//           </div>
//         </main>

//         <div className="flex flex-row h-16 w-full bg-slate-200 mt-20"></div>
//       </div>
//     </>
//   );
// };

// export default Home;
