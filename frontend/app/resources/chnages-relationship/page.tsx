import Image from "next/image";
import img from "@/app/favicon.ico";

export default function ChangingRelationships() {
  return (
    <div className="flex flex-col w-[60%] left-[18rem] right-[8rem] relative text-justify top-[2rem] font-serif py-2 p-4">
      <a href="/resources">
        <Image
          src={img}
          alt="Changing Relationships"
          width={100}
          height={100}
          className="top-[1rem] left-[6rem] fixed"
        />
      </a>
      <h1 className="text-6xl font-bold text-violet-800 font-serif my-4">
        Changing Relationships
      </h1>
      <p className="text-slate-500 text-xl">
        As the disease progresses, your relationship with your spouse or partner who has Alzheimer's will change; however, your connection can still be rich and fulfilling. Spend time together in ways that bring you closer and help you relate.
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        Changing roles
      </h2>
      <p className="text-slate-500 text-xl">
        Join a caregiver support group. It's a safe place to share the feelings, challenges and changes you face.
      </p>
      <p className="text-slate-500 text-xl">
        You may find yourself taking on a new role in your relationship as your partner's memory declines. The person with Alzheimer's disease may no longer be able to perform certain tasks, such as balancing the checkbook, doing the taxes, handling financial and legal matters and doing certain household chores. Making important decisions on your own may feel overwhelming.
      </p>
      <p className="text-slate-500 text-xl">
        Be prepared for these changes. Locate financial and legal documents, such as life insurance policies, property deeds and retirement accounts, soon after your loved one is diagnosed. Turn to family, friends, professionals or community resources for assistance, as needed.
      </p>
      <p className="text-slate-500 text-xl">
        Learn more: <a href="/resources/financial-legal-planning" className="text-violet-800 underline">Financial and Legal Planning</a>
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        Intimacy
      </h2>
      <p className="text-slate-500 text-xl">
        You may be feeling enormous grief over the changes in your relationship. You are not selfish for experiencing these feelings. Given your partner's cognitive decline, you may no longer be able to have the same emotional or physical intimacy that you once shared.
      </p>
      <p className="text-slate-500 text-xl">
        It is typical that people with Alzheimer's disease experience changes in their sexual drive. Depression can cause a reduced interest in sex, as well as physical illness and some medications. It's also common for caregivers to lose sexual desire because of the demands of caregiving, the transition from intimate partner to caregiver, and changes in their partner's personality due to the progression of dementia. Do not feel guilty if your sexual attraction to your partner has changed. You can find new ways to connect with each other.
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        Family and friends
      </h2>
      <p className="text-slate-500 text-xl">
        You may feel socially isolated because your family and friends may have pulled back from your relationship or you have little time to spend with them. Your family and friends may hesitate to spend time with you and the person with Alzheimer's because they worry about not knowing what to do or say. They also may not understand the behavior changes caused by the disease or might not be able to accept that the person has the disease.
      </p>
      <p className="text-slate-500 text-xl">
        Take the initiative to contact family and friends and explain that while Alzheimer's disease has changed your lives in some ways, you value their friendship and support. Considering inviting a few friends or family members over. Let them know in advance of any physical or emotional changes in the person with dementia. Provide them suggestions about how to communicate with the person and what activities they might be able to do together.
      </p>
      <p className="text-slate-500 text-xl">
        Learn more: <a href="/resources/overcoming-stigma" className="text-violet-800 underline">Overcoming stigma</a>
      </p>
    </div>
  );
}