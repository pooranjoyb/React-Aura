import React, { useState } from "react";
import "./Home.css";
import GlassNavbar from "../Components/Navbars/GlassNavbar/GlassNavbar";
import Button from "../Components/Buttons/PrimaryButton/Button";
import Modal from "../Components/Modals/Modal";
import Card from "../Components/Cards/ProfileCards/Card";
import VerificationCodeInput from "../Components/Inputs/VerificationCodeInput/VerificationCodeInput";
import ToggleButton from "../Components/Buttons/ToggleButton/ToggleButton";
import Toast from "../Components/Toastify/Toast";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import Pagination from "../Components/Pagination/Pagination";
import { Link } from "react-router-dom"

const Home = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <div>
      <GlassNavbar />
      <Modal state={modalState} setState={setModalState} />
      <div className="landingPage min-h-[650px] flex mt-5  sm:flex-row flex-col px-20 py-10">
        <div className="w-1/2 px-10 flex flex-col gap-y-3 min-h-[500px] justify-center">
          <div className="text-7xl font-bold leading-[75px] mb-2 ">
            Reuse and build your website faster.
          </div>
          <div className="text-xl">
            <div className="w-3/4 ">
            Build your website faster than ever before. Utilize our beautifully designed and expertly crafted components. The perfect starting point for your next project.
            </div>
          </div>
          <div className="flex mt-5 gap-x-4 w-full">
            <Link to='/components'><button className="px-4 text-lg py-[10px] text-white bg-zinc-800 rounded-lg duration-150 hover:bg-zinc-700 active:shadow-lg">
              Browse Components
            </button>
            </Link>
            <button className="px-4 text-lg py-[10px] text-gray-700 hover:bg-slate-200 border border-zinc-900 rounded-lg duration-100 hover:border-zinc-700 active:shadow-lg">
              Explore
            </button>
          </div>
          
        </div>
        <div className="w-1/2 pt-12 pb-8 px-14 flex gap-y-3">
          <div className="flex-col w-full gap-4 flex-wrap">
            <Button size="large">primary button</Button>
            <button
              className="px-5 ml-44 mt-[-30px] text-lg py-[12px] text-white bg-zinc-800 rounded-lg duration-150 hover:bg-zinc-700 active:shadow-lg"
              type="secondary"
              onClick={() => setModalState((prev) => !prev)}
            >
              Open Modal
            </button>
            <div className="mt-5 mr-5 flex-col space-y-4">
              <Toast status="default">Default Toastify</Toast>
              <Toast status="success">Item moved successfully.</Toast>
              <Toast status="warning">Improve password difficulty.</Toast>
              
            </div>
            <div className="flex  min-h-[40px] items-end mt-4 ">
            <div className="w-3/4">
                 <ProgressBar progress="60"/>
            </div>
          </div>
            <div className="w-full flex justify-end mt-5">
              <div className=" mr-5">
              <Pagination/>

              </div>
            </div>
          </div>
          <div className="w-full  flex-col justify-end">
            <div className="p-3 h-fit border border-gray-900">
              <Card />
            </div>
            <div className="w-full gap-3 flex">
              <VerificationCodeInput />
              <div className="mx-auto my-auto h-full scale-125">
                <ToggleButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
