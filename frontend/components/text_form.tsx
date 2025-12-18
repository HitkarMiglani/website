"use client"
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/utils";


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};



export function TextForm() {

  const [responseData, setResponseData] = React.useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    const selectElement = document.querySelector("select");
    if (selectElement) {
        formData.append("PID", selectElement.value);
    }
    formData.append("FunctionalAssessment", (document.getElementById("functional") as HTMLInputElement).value);
    formData.append("ADL", (document.getElementById("adl") as HTMLInputElement).value);
    formData.append("MSME", (document.getElementById("msme") as HTMLInputElement).value);
    formData.append("CholesterolT", (document.getElementById("CholesterolT") as HTMLInputElement).value);
    formData.append("CholesterolH", (document.getElementById("CholesterolH") as HTMLInputElement).value);
    formData.append("BMI", (document.getElementById("smoaking") as HTMLInputElement).value);
    formData.append("Diet", (document.getElementById("Diet") as HTMLInputElement).value);
    formData.append("MemoryComplaints", (document.getElementById("MemoryComplaints") as HTMLInputElement).value);
    formData.append("BehavioralProblems", (document.getElementById("BehavioralProblems") as HTMLInputElement).value);
    formData.append("CT", (document.getElementById("CT") as HTMLInputElement).value);
    formData.append("Alcohol", (document.getElementById("Alcohol") as HTMLInputElement).value);
    formData.append("Sleep", (document.getElementById("Sleep") as HTMLInputElement).value);
    formData.append("Physical", (document.getElementById("Physical") as HTMLInputElement).value);
    formData.append("CholestrolL", (document.getElementById("CholestrolL") as HTMLInputElement).value);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/text_class`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: formData
    }).then(response => response.json())
    // skipcq: JS-0323
    .then((data: { data: string }) => {
      
      setResponseData(data.data);
    }).catch((error: Error) => {
      console.error("Error:", error);
    });
    };


  return (
    // skipcq: JS-0415
    <div className="max-w-[40rem] w-full mx-auto h-[40rem] rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white-100 ">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Fill The Details to Get The Predection
      </h2>
      {responseData && (
        <div className="mt-3 p-3 bg-blue-200 dark:bg-neutral-800 rounded-md absolute w-[40%] top-[0.5rem] ">
          <h3 className="font-bold text-lg text-neutral-800  ">
            Predection
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200">
            {responseData}
          </p>
        </div>
      )}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="PID">PID: </Label>
            <select id="PID">
                <option value="P_00001">P_00001</option>
                <option value="P_00002">P_00002</option>
                <option value="P_00002">P_00003</option>
            </select>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="functional">FunctionalAssessment</Label>
            <Input id="functional" placeholder="0.000000" type="number" step={0.0001} />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="adl">ADL: </Label>
            <Input id="adl" placeholder="0.00000" type="number" step={0.0001} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="msme">MSME: </Label>
            <Input id="msme" placeholder="0.000000" type="number" step={0.0001} />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="CholesterolT">Cholesterol Total</Label>
            <Input id="CholesterolT" placeholder="0.00000" type="number" step={0.0001} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="CholesterolH">Cholesterol HDL</Label>
            <Input id="CholesterolH" placeholder="0.000000" type="number" step={0.0001} />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="smoaking">BMI</Label>
            <Input id="smoaking" placeholder="18 - 26" type="number" step={0.0001} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="Diet">Diet Quality</Label>
            <Input id="Diet" placeholder="10" type="number" step={0.0001} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="MemoryComplaints">MemoryComplaints</Label>
            <Input id="MemoryComplaints" placeholder="0 - 1" type="number" />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="BehavioralProblems">BehavioralProblems</Label>
            <Input id="BehavioralProblems" placeholder="0 - 1" type="number" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="CT">CholesterolTriglycerides</Label>
            <Input id="CT" placeholder="0" type="number" step={0.0001} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="Alcohol">Alcohol Consumption</Label>
            <Input id="Alcohol" placeholder="0 - 1 " type="number" />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="Sleep">Sleep Quantity</Label>
            <Input id="Sleep" placeholder="2" type="number" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="Physical">Physical Activity</Label>
            <Input id="Physical" placeholder="10" type="number"  />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="CholestrolL">CholertrolLDL</Label>
            <Input id="CholestrolL" placeholder="0" type="number" />
          </LabelInputContainer>
        </div>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Get Predection &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

