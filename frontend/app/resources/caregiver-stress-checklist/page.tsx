import Image from "next/image";
import img from "@/app/favicon.ico";

export default function CaregiverStressCheck() {
  return (
    <div className="flex flex-col w-[60%] left-[18rem] right-[8rem] relative text-justify top-[2rem] font-serif py-2 p-4">
      <a href="/resources">
        <Image
          src={img}
          alt="Caregiver Stress Check"
          width={100}
          height={100}
          className="top-[1rem] left-[6rem] fixed"
        />
      </a>
      <h1 className="text-6xl font-bold text-violet-800 font-serif my-4">
        Caregiver Stress Check
      </h1>
      <p className="text-slate-500 text-xl">
        Stress check resources that can help you:
      </p>
      <ul className="list-disc list-inside text-slate-500 text-xl my-4">
        <li>
          <strong>Respite care:</strong> Types of respite care services, how to choose one and how to prepare for respite care. Remember, everyone needs a break.
        </li>
        <li>
          <strong>Lotsa Helping Hands:</strong> This online care team calendar helps you schedule weekly needs and organize offers of help from family and friends.
        </li>
        <li>
          <strong>Caregiver Stress:</strong> Know the 10 signs of caregiver stress and ways to manage your level of stress.
        </li>
        <li>
          <strong>10 warning signs of Alzheimer's:</strong> Understand the difference between normal age-related memory changes and changes caused by Alzheimer's.
        </li>
        <li>
          <strong>Talking to kids and teens about Alzheimer's:</strong> Our Kids & Teens section can help children and teens understand what is happening to the person with Alzheimer's.
        </li>
        <li>
          <strong>Wandering response service:</strong> For peace of mind, consider enrolling in a nationwide emergency response service for individuals living with Alzheimer’s disease or another dementia who wander or have a medical emergency.
        </li>
        <li>
          <strong>Safety issues:</strong> Take steps to be safe at home, with medications and when traveling.
        </li>
        <li>
          <strong>Financial matters:</strong> You have a lot to consider. Learn more about costs the person may face and how to pay for them, as well as making your own contributions for care.
        </li>
        <li>
          <strong>Legal issues:</strong> Understand what legal capacity is, common legal documents you may need and how to find a lawyer.
        </li>
        <li>
          <strong>Medicare and Medicaid programs:</strong> Download helpful information and links on Medicare benefits, Medicaid and Medigap.
        </li>
        <li>
          <strong>Changes in relationships:</strong> Get insights into changing roles with the person with dementia, family and friends as well as intimacy and resolving family conflicts.
        </li>
        <li>
          <strong>Inside the brain: an interactive tour:</strong> See how Alzheimer's affects the brain and how the disease progresses.
        </li>
        <li>
          <strong>Grief and loss:</strong> Explains symptoms of grief and ways you can cope with them.
        </li>
        <li>
          <strong>Message boards:</strong> Connect with other caregivers on our message boards, which you can access anonymously 24/7 from the privacy of your home.
        </li>
        <li>
          <strong>Identify behaviors and their causes:</strong> Different behaviors call for different responses.
        </li>
        <li>
          <strong>Savvy caregiver:</strong> Helping family members of someone with memory loss regain control of their lives. This video gives you practical caregiving skills to help you become a confident caregiver and reduce your stress.
        </li>
        <li>
          <strong>How to be a healthy caregiver:</strong> Review the symptoms of stress that can be damaging to you and the person with Alzheimer's. Then follow the steps to be a healthy caregiver.
        </li>
      </ul>
    </div>
  );
}