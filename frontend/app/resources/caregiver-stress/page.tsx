import img from "@/app/favicon.ico";
import Image from "next/image";

export default function CaregiverStress() {
  return (
    <div className="flex flex-col w-[60%] left-[18rem] right-[8rem] relative text-justify top-[2rem] font-serif py-2 p-4">
      <a href="/resources">
        <Image
          src={img}
          alt="Caregiver Stress"
          width={100}
          height={100}
          className="top-[1rem] left-[6rem] fixed"
        />
      </a>
      <h1 className="text-6xl font-bold text-violet-800 font-serif my-4">
        Caregiver Stress
      </h1>
      <p className="text-slate-500 text-xl">
        Share or Print this page
      </p>
      <p className="text-slate-500 text-xl">
        Alzheimer's caregivers frequently report experiencing high levels of stress. It can be overwhelming to take care of a loved one with Alzheimer's or other dementia, but too much stress can be harmful to both of you. Read on to learn symptoms and ways to avoid burnout.
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        10 symptoms of caregiver stress
      </h2>
      <ul className="list-disc list-inside text-slate-500 text-xl my-4">
        <li>Denial about the disease and its effect on the person who has been diagnosed. I know Mom is going to get better.</li>
        <li>Anger at the person with Alzheimer’s or frustration that he or she can’t do the things they used to be able to do. He knows how to get dressed — he’s just being stubborn.</li>
        <li>Social withdrawal from friends and activities that used to make you feel good. I don’t care about visiting with the neighbors anymore.</li>
        <li>Anxiety about the future and facing another day. What happens when he needs more care than I can provide?</li>
        <li>Depression that breaks your spirit and affects your ability to cope. I just don't care anymore.</li>
        <li>Exhaustion that makes it nearly impossible to complete necessary daily tasks. I'm too tired for this.</li>
        <li>Sleeplessness caused by a never-ending list of concerns. What if she wanders out of the house or falls and hurts herself?</li>
        <li>Irritability that leads to moodiness and triggers negative responses and actions. Leave me alone!</li>
        <li>Lack of concentration that makes it difficult to perform familiar tasks. I was so busy, I forgot my appointment.</li>
        <li>Health problems that begin to take a mental and physical toll. I can't remember the last time I felt good.</li>
      </ul>
      <p className="text-slate-500 text-xl">
        If you experience any of these signs of stress on a regular basis, make time to talk to your doctor.
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        Tips to manage stress
      </h2>
      <ul className="list-disc list-inside text-slate-500 text-xl my-4">
        <li>Know what community resources are available. Adult day programs, in-home assistance, visiting nurses and meal delivery are just some of the services that can help you manage daily tasks. Use our online Community Resource Finder or contact your local Alzheimer's Association® chapter for assistance in finding Alzheimer's care resources in your community. Whether you’re living with memory loss or caring for someone who is, ALZNavigator™, an online interactive tool, will guide you to your next steps.</li>
        <li>Get help and find support. Our online Care Team Calendar helps you organize friends and family who want to help provide care and support. Our 24/7 Helpline (800.272.3900), ALZConnected online community and local support groups are all good sources for finding comfort and reassurance. If stress becomes overwhelming, seek professional help.</li>
        <li>Use relaxation techniques. There are several simple relaxation techniques that can help relieve stress. Try more than one to find which works best for you. Techniques include:
          <ul className="list-disc list-inside text-slate-500 text-xl my-4">
            <li>Visualization (mentally picturing a place or situation that is peaceful and calm)</li>
            <li>Meditation (which can be as simple as dedicating 15 minutes a day to letting go of all stressful thoughts)</li>
            <li>Breathing exercises (slowing your breathing and focusing on taking deep breaths)</li>
            <li>Progressive muscle relaxation (tightening and then relaxing each muscle group, starting at one end of your body and working your way to the other end)</li>
          </ul>
        </li>
        <li>Learn more about relaxation techniques on the Mayo Clinic website.</li>
        <li>Get moving. Physical activity — in any form — can help reduce stress and improve overall well-being. Even 10 minutes of exercise a day can help. Take a walk. Do an activity you love, such as gardening or dancing.</li>
        <li>Find time for yourself. Consider taking advantage of respite care so you can spend time doing something you enjoy. Respite care provides caregivers with a temporary rest from caregiving, while the person with Alzheimer’s disease continues to receive care in a safe environment. Learn more about respite care.</li>
        <li>Become an educated caregiver. As the disease progresses, new caregiving skills may be necessary. The Alzheimer's Association offers programs to help you better understand and cope with the behaviors and personality changes that often accompany Alzheimer's. You may also find it helpful to talk to other care partners and caregivers about how they are coping with the challenges of the disease and uncertainty about the future.</li>
        <li>Take care of yourself. Visit your doctor regularly. Try to eat well, exercise and get plenty of rest. Making sure that you are healthy can help you be a better caregiver.</li>
        <li>Maintain your sense of humor. Keeping your sense of humor doesn't mean that you're making light of the situation or poking fun at it. Humor can be a valuable coping strategy. Celebrity Champion and comedian Chris Garcia describes how humor helped him and his family when his father, a Cuban refugee, developed Alzheimer's.</li>
        <li>Make legal and financial plans. Putting legal and financial plans in place after an Alzheimer’s diagnosis is important so that the person with the disease can participate. Having future plans in place can provide comfort to the entire family. Many documents can be prepared without the help of an attorney. However, if you are unsure about how to complete legal documents or make financial plans, you may want to seek assistance from an attorney specializing in elder law, a financial advisor who is familiar with elder or long-term care planning, or both. Learn more about planning ahead.</li>
      </ul>
    </div>
  );
}