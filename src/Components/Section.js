import React from 'react';
import SECOND from '../Images/second.png';
import Audit from '../Images/audit.png';
import DEFIS from '../Images/DEFIS.png';
import DAPPS from '../Images/dapps.png';
import EXPERT from '../Images/expert.png';
import SNART from '../Images/smart.png';
import LAUNCH from '../Images/launchpad.png';
import CIRCLE from '../Images/circle.png';
import DOTS from '../Images/dots.png';

const Section = () => {
  return (
    <>
      <div className='bg-[#05104B] bg-gradient-to-r from-[#06438E] via-[#042666] to-[#05104B] w-[100%] h-[100%]'>


        <div className='flex justify-end p-2'>
          <img src={DOTS} style={{ height: '10%', width: '10%' }} />
        </div>

        <div className='flex justify-between mx-20 '>

          <div className='flex items-center bg-gradient-to-r from-[#06438E] via-[c8ddfa] to-[#06438E]rounded-full'>
            <div className='flex-col ml-40'>
              <div className='flex justify-center font-bold	text-white text-4xl text-left	 '>
                We provide The Best To Protect Your <br />Users And Their Investments
              </div>

              <div className='flex justify-center font-semibold text-white text-2xl text-left my-4	text-transparent bg-clip-text bg-gradient-to-br from-[white] via-[#7CA3D8] to-[#4685DC]'>
                Merklabs is a reputed name in the field of <br /> blockchain technology encompassing all the <br /> segments of this revolutionary field. Pioneering <br /> the essence of blockchain security and audits, we <br />secure your present and future through the <br /> parameters of technology.
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <img src={SECOND} style={{ height: '100%', width: '45%' }} />
          </div>
        </div>

        <div className='flex justify-between	my-20'>
          <div className='flex justify-center items-center' style={{ width: '50%' }}>
            <img src={DEFIS} style={{ height: '75%', width: '35%' }} />
          </div>

          <div className='flex items-center justify-center' style={{ width: '50%' }}>
            <div className='flex-col mr-40 '>
              <div className='text-[#FF6392] text-left my-2  text-lg'>
                DEFI
              </div>
              <div className='flex justify-center font-bold	text-white text-2xl text-left mr-28'>
                Scale the world of DeFi
              </div>

              <div className='flex justify-center text-white text-lg text-left my-4	'>
                Being the veterans in the blockchain <br /> industry, we understand the hype of <br /> decentralized finance and the contemporary <br /> optimizations in the financial sector and <br /> hence taking the grasp of the moment , we <br /> have developed exceptional projects in the <br /> world of DeFi.              </div>
            </div>
          </div>


        </div>

        <div className='flex justify-between mx-10 my-20	'>

          <div className='flex items-center' style={{ width: '50%' }}>
            <div className='flex-col ml-40' >

              <div className='text-[#FFBF5F] text-left my-2  text-lg'>
                DAPPS
              </div>

              <div className='flex justify-center font-bold	text-white text-2xl mr-28 text-left	mr-28'>
                Technology made easier
              </div>

              <div className='flex justify-center text-white text-lg text-left my-4	'>
                Decentralized applications have found a <br /> huge user base right in the initial stage , and <br /> therefore we as a team have gained <br /> extensive expertise into the creation of <br /> dapps.
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center' style={{ width: '50%' }}>
            <img src={DAPPS} style={{ height: '75%', width: '35%' }} />
          </div>
        </div>

        <div className='flex justify-between mx-4 my-20	'>

          <div className='flex justify-center items-center' style={{ width: '50%' }}>
            <img src={SNART} style={{ height: '75%', width: '35%' }} />
          </div>

          <div className='flex items-center justify-center ' style={{ width: '50%' }}>
            <div className='flex-col '>
              <div className='text-[#4EFFBF] text-left my-2 text-lg'>
                AUDIT
              </div>
              <div className='flex justify-center font-bold	text-white text-2xl text-left mr-36	'>
              Stay secure and safe
              </div>

              <div className='flex justify-center text-white text-lg text-left my-4	' >
              Above all that matters is a secure and safe <br/> smart contract that is free from any <br/> vulnerability and does not hamper the <br/>  investment of the various people who have <br/> trusted you. We also provide auditing <br/>  services , so that you can stay assured of the <br/>  security as we are quick in auditing and <br/>   exposing the bugs of your smart contract.
              </div>
            </div>
          </div>


        </div>



        <div className='flex justify-between mx-10	my-20'>

          <div className='flex items-center' style={{ width: '50%' }}>
            <div className='flex-col ml-40'>
              <div className='text-[#618DFF] text-left my-2  text-lg'>
                EXPERT
              </div>
              <div className='flex justify-center font-bold	text-white text-2xl text-left	mr-52'>
                Expert Review
              </div>

              <div className='flex justify-center text-white text-lg text-left my-4	'>
                Experience the guidance of various trained <br /> professionals and developers who are with <br /> you at every phase of your projects. We not <br /> only develop your project but also give out <br /> the best recommendations for turning it into <br /> a huge success              </div>
            </div>
          </div>

          <div className='flex justify-center items-center' style={{ width: '50%' }}>
            <img src={EXPERT} style={{ height: '75%', width: '35%' }} />
          </div>
        </div>


        <div className='flex justify-between mx-4 my-20	'>

          <div className='flex justify-center items-center' style={{ width: '50%' }}>
            <img src={SNART} style={{ height: '75%', width: '35%' }} />
          </div>

          <div className='flex items-center justify-center ' style={{ width: '50%' }}>
            <div className='flex-col '>
              <div className='text-[#FFBF5F] text-left my-2 text-lg'>
                SMART CONTRACT
              </div>
              <div className='flex justify-center font-bold	text-white text-2xl text-left mr-16	'>
                Experience the Revolution
              </div>

              <div className='flex justify-center text-white text-lg text-left my-4	' >
                Merklabs has efficient developers with <br /> exceptional coding skills that can create any <br /> type of smart contract you desire and with <br /> scalable and secure code. You desire, we <br /> create it for you.
              </div>
            </div>
          </div>


        </div>


        {/* <div className='flex' style={{  position: 'absolute',left: '30px',bottom:'300px',}}>
          <img src={CIRCLE} style={{ width: '25%', height: '25%' }} />
        </div> */}



        <div className='flex justify-between mx-10	py-20'>

          <div className='flex items-center' style={{ width: '50%' }}>
            <div className='flex-col ml-40'>
              <div className='text-[#4EFFBF] text-left my-2  text-lg'>
                LAUNCHPAD
              </div>
              <div className='flex justify-center font-bold	text-white text-2xl text-left mr-32'>
                Stabilize and Promote
              </div>

              <div className='flex justify-center text-white text-lg text-left my-4	'>
                Amidst the competition in the Defi space,<br /> good marketing strategy and <br />implementation plays the key role to stabilize <br />and promote your growth in the blockchain <br />industry. Retaining this awareness, we can <br /> develop launchpad and IDO for your presale <br /> and ICO.
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center' style={{ width: '50%' }}>
            <img src={LAUNCH} style={{ height: '75%', width: '35%' }} />
          </div>
        </div>






      </div>

    </>
  )
}

export default Section