import 'animate.css/animate.min.css';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Link from 'next/link';
import { FaChevronCircleDown, FaChevronDown, FaArrowDown, FaDollarSign, FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import Footer from './components/Footer';
import Main from './components/Main';
import Image from 'next/image';
import Logo from '@/public/logorv.png';

const Home = () => {
  return ( 
    <>
      <Header>
        <div className='container flex justify-between mx-auto'>
          <div>
            <Image width={250} src={Logo} alt='logoPng'/>
          </div>
          <div className='flex items-center gap-2 mx-3'>
            <Link href='https://www.instagram.com/rvdopeugeot/'>
              <FaInstagram className='hover:text-gray-400 text-white' size={30} />
            </Link>
            <Link href='https://chat.whatsapp.com/E4Y3LP1CiBWJHZz2qFdGwU'>
              <FaWhatsapp className='hover:text-gray-400 text-white' size={30} />
            </Link>
          </div>
        </div>
      </Header>
      <Main>
        <motion.div
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=' w-full min-[480px]:w-[480px] h-full flex justify-center p-3 flex-col text-left mt-10'
        >
          <h2 className='font-display lg:mx-0 mx-3 w-full sm:w-[500px] text-center sm:text-left rounded-xl bg-gradient-to-tr p-1 font-bold text-slate-200 text-4xl'>
            <span className='text-slate-50 font-extrabold'>IPHONE 15</span> OU <span className='font-extrabold text-slate-50'>R$5000</span>
          </h2>
            <p className='font-normal text-xl text-center mt-2 text-slate-100'>
              <span className='text-slate-100'>PARTICIPE JÁ DO GRUPO</span>
            </p>
          <div className='text-slate-50 text-center mx-2 p-1 sm:p-3 rounded-2xl mt-5 bg-red-600 font-bold text-xl'>
            RESULTADO PELA LOTERIA FEDERAL
          </div>
          <ul className='mt-5'>
            <li className='text-[#CBCBCB] font-normal lg:text-left text-center text-lg font-sans'>
              <span className='font-extrabold text-slate-100'>•iPhone 15 PRO Lacrado</span>, Garantia de 1 ano pela Apple.
              (acompanha capa, carregador e película)
            </li>
            <li className='text-[#CBCBCB] lg:text-left text-center font-normal text-lg font-sans'>
              •Caso não queira o iPhone leva <span className='font-extrabold text-slate-100'>R$5000,00</span> no PIX
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className='mt-4 min-[480px]:mt-14 justify-center flex bg-gradient-to-r w-[300px] mx-auto hover:bg-transparent from-green-500 via-green-600 to-green-700 rounded-3xl px-6 py-3'
          >
            <Link
              className='flex justify-center text-center items-center font-sans text-xl gap-1 font-semibold text-slate-50'
              target='_blank'
              href='https://chat.whatsapp.com/E4Y3LP1CiBWJHZz2qFdGwU'
            >
              <FaWhatsapp className='' size={25} color='#FFF'/>
              ENTRAR NO GRUPO
            </Link>
          </motion.button>
        </motion.div>
      </Main>
      <section className='bg-black'>
        <div className='container flex py-10 mx-auto justify-center'>
          <motion.div  
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} 
            className='max-w-[630px] lg:mx-0 mx-auto '
          >
            <h2 className='text-center mx-1 font-sans font-extrabold text-slate-50 text-4xl  mt-16 min-[348px]:mt-5'>BILHETES PREMIADOS</h2>
            <p className='text-center lg:mb-0 my-3 mx-1  font-sans  text-slate-200 font-normal'>TEMOS SORTEIO DE BILHETES PREMIADOS TODA SEMANA!</p>
            <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className='my-2 min-[480px]:mt-14 justify-center flex bg-gradient-to-r w-[300px] mx-auto hover:bg-transparent from-green-500 via-green-600 to-green-700 rounded-3xl px-6 py-3'
          >
            <Link
              className='flex justify-center text-center items-center font-sans text-xl gap-1 font-semibold text-slate-50'
              target='_blank'
              href='https://chat.whatsapp.com/E4Y3LP1CiBWJHZz2qFdGwU'
            >
              <FaWhatsapp className='' size={25} color='#FFF'/>
              ENTRAR NO GRUPO
            </Link>
          </motion.button>
          </motion.div>
        
        </div>
      </section>
      <Footer>
       
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='text-slate-100 p-5 gap-2 items-center flex font-serif font-bold text-2xl'
        >
          <FaInstagram />
          rvdopeugeot
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='text-slate-100 mx-3 text-center pb-5 font-sans font-semibold text-lg'
        >
          © Copyright 2024, Todos os direitos Reservados por rvdopeugeot
        </motion.p>
      </Footer>
    </>
  );
};

export default Home;
