import user from "@/components/User";
import { BackgroundLines } from "@/components/backgroundlines";
import { SidebarDemo } from "@/components/sidebar";
import { revalidatePath } from "next/cache";
import Link from "next/link";

type Patient = {
  Age: number;
  Gender: string;
  Name: string;
  Predection: string;
  id: number;
  user_id: string;
  user_name: string;
};

// import { ParsedUrlQuery } from 'querystring';

interface PatientsPageProps {
  searchParams: Promise<Record<string, string | string[]>>;
}

export default async function PatientsPage(props: PatientsPageProps) {
  const use = await user();
  const formData = new FormData();
  if (use) {
    formData.append("user_id", use);
  } else {
    console.error("User ID is undefined");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patients`, {
    method: "POST",
    body: formData, //type : ignore
  }); 
  if (!response.ok) {
    console.error("Failed to fetch patients, using default data");
  }
  const patients = await response.json();
  // skipcq: JS-0356
  const searchParams = await props.searchParams;
  const showform = searchParams?.modal === "true";

  return (
    <main className="min-h-screen bg-black-100">
      <SidebarDemo />
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <Header />
      </BackgroundLines>
      <div className="">
        <Link className="text-white-100 left-[7rem] relative inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-8 py-2  bg-black group transition duration-200  hover:bg-transparent" href="/Patients?modal=true"> Add Patient </Link>
        <PatientForm showform={showform} />
        <PatientList patients={patients} />
        <br />
        <br />
      </div>
    </main>
  );
}

function Header() {
  return (
    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Patient Details <br />
    </h2>
  );
}

async function addPatient(formData: FormData) {
  "use server";
  const use = await user();
  if (use) {
    formData.append("user_id", use);
  } else {
    console.error("User ID is undefined");
  }
  // console.log(formData);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/add_patient`,
    {
      method: "POST",
      body: formData, //type : ignore
    }
  ); // Replace with your API endpoint
  if (!response.ok) {
    console.error("Failed to add patient");
    revalidatePath("/Patients");
  } else {
    revalidatePath("/Patients");
  }
}

function PatientForm({ showform }: { showform: boolean }) {
  return (
    <div>
      {showform && (
        // skipcq: JS-0415
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Link
              className="absolute top-[8.5rem] right-[22rem] text-white-100 hover:text-gray-700"
              href="/Patients"
            >
              &times;
            </Link>
            <form
              action={addPatient}
              className="flex flex-col gap-4 "
              data-modal-disable-scroll="true"
            >
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Age:
                <input type="number" name="age" />
              </label>
              <label>
                Gender:
                <select name="gender">
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function PatientList({ patients }: { patients: Patient[] }) {
  return (
    <ul className="flex items-center justify-evenly flex-wrap left-[5rem] relative w-[75rem]">
      {patients.map((patient: Patient) => (
        <li
          key={patient.id}
          className="p-4 w-[16rem] h-[10rem]  bg-black-100 shadow-md border-2 rounded-lg text-white-200 text-xl m-4  "
        >
          Name : {patient.Name} <br />
          Age: {patient.Age} <br />
          Gender: {patient.Gender} <br />
          Last Predection: {patient.Predection}
        </li>
      ))}
    </ul>
  );
}
