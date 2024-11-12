import {
  ChevronLeft,
  Copy,
  CopyPlus,
  Eye,
  Grid2X2,
  ImagePlus,
  List,
  PencilIcon,
  Plus,
  PlusIcon,
  RefreshCcw,
  Trash2,
  WandSparkles,
} from "lucide-react";
import React from "react";
import EmailTemplateCard from "./EmailTemplateCard";
import CreateTemplateDialog from "./createTemplateDialog";

const AllEmailTemplatesPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-stone-100 flex flex-col">
      <div className="py-4 flex-shrink-0 flex flex-row justify-between px-48 items-center bg-whitez border-bz">
        <div className="flex flex-row gap-2 items-center">
          <button className=" flex size-10 bg-white hover:bg-stone-200 flex-col rounded-full justify-center items-center ">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="flex flex-row items-center gap-1.5"></div>
      </div>
      <div className="flex flex-col  overflow-hidden gap-4 px-48 pb-4 flex-1">
        <div className="flex flex-row justify-between items-center text-xl font-medium">
          <h1 className="font-semibold text-2xl">Email Campaigns</h1>
          <div className="flex flex-row items-center gap-2">
            {/* <button className="bg-stone-100 flex flex-row items-center gap-1.5 hover:bg-stone-200/80 px-4 py-2.5 rounded-md font-medium  text-sm">
								<Braces size={16} />
								Export JSON
							</button> */}

            <CreateTemplateDialog onCreate={null} />
            <button className="border border-stone-300 bg-white  flex flex-row justify-center items-center gap-2 hover:bg-stone-50 px-3 py-2.5 rounded font-medium  text-sm">
              <RefreshCcw size={18} />
              Refresh Templates
            </button>
          </div>
        </div>

        {/* <div className="flex flex-row justify-between items-center text-xl font-medium">
          <input
            type="text"
            className="bg-white text-sm font-normal border rounded px-4 py-3"
            placeholder="Search Templates"
          />
          <div className="flex flex-row items-center gap-2">
            <button className="bg-stone-900 text-white flex flex-row justify-center items-center gap-2 hover:bg-stone-700 px-3 py-2.5 rounded font-medium  text-sm">
              <Grid2X2 size={18} />
            </button>
            <button className="border border-stone-300 bg-white  flex flex-row justify-center items-center gap-2 hover:bg-stone-50 px-3 py-2.5 rounded font-medium  text-sm">
              <List size={18} />
            </button>
          </div>
        </div> */}

        <div className="grid grid-cols-4 overflow-auto no-scrollbar gap-4">
          {Array.from({ length: 8 }, (v, k) => (
            <EmailTemplateCard key={k} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEmailTemplatesPage;
