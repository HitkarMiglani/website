import img from "@/app/favicon.ico"
import Image from "next/image";

export default function caregiver() {
  return (
    <div className="flex flex-col w-[60%] left-[18rem] right-[8rem] relative text-justify top-[2rem font-serif py-2 p-4">
         <a href="/resources"><Image  
        src={img}
        alt="Be a Healthy Caregiver"
        width={100}
        height={100}
        className="top-[1rem] left-[6rem] fixed"
        
         /></a>
      <h1 className="text-6xl font-bold text-violet-800 font-serif my-4">
        Be a Healthy Caregiver
      </h1>
      <p className="text-slate-500 text-xl">
        As a caregiver, you may find yourself with so many responsibilities that
        you neglect taking good care of yourself. But the best thing you can do
        for the person you are caring for is stay physically and emotionally
        strong.
      </p>
      <ul className="list-disc list-inside text-slate-500 text-xl my-4">
        <li><a href="#doctor" className="text-blue-500 hover:underline">See the doctor</a></li>
        <li><a href="#moving" className="text-blue-500 hover:underline"> Get moving</a></li>
        <li><a href="#eat"className="text-blue-500 hover:underline" >Eat well</a></li>
        <li><a href="#tips" className="text-blue-500 hover:underline" >Tips to help you cope</a></li>
      </ul>
        <h2 id="doctor" className="text-4xl font-bold text-violet-800 font-serif my-4">See The Doctor</h2>
        <p className="text-slate-500 text-xl">
        Trying to do everything by yourself will leave you exhausted.
        Don&apos;t do it alone. Seek support from family, friends, your faith
        community and the Alzheimer&apos;s Association®. Be sure to visit your
        physician regularly (at least annually), and listen to what your body is
        telling you. 
        <br/> <br/> 
        Any exhaustion, stress, sleeplessness, or changes in
        appetite or behavior should be taken seriously. Ignoring these symptoms
        can cause your physical and mental health to decline. If you are caring
        for someone in the late-stages of Alzheimer&apos;s, talk to your health care
        provider about the seasonal flu shot. Being vaccinated protects both you
        and the person you are caring for. 
        <br/> <br/>
        Learn more: Caregiver Depression,
        Stress Management, Late-Stage Care: Infections.
      </p>
        <h2 id="moving" className="text-4xl font-bold text-violet-800 font-serif my-4" >Get moving: </h2>
        <p className="text-slate-500 text-xl">
        No doubt you know that exercise is an important part of staying healthy — it can help
        relieve stress, prevent disease and make you feel good. But finding the
        time to exercise is another story.
        <br/><br/>
        Use these tips: 
        </p>
        <ul className="list-disc list-outside text-slate-500 text-xl my-4 relative left-5">
        <li>Take friends andfamily members up on their offers to help. You can get in a good workout
        in a short amount of time — even a 30 minute break. Help coordinate a
        schedule where you have breaks to exercise and take care of your health.</li>

        <li>Start small. While it is recommended that you get 30 minutes of physical
        activity at least five days a week, even 10 minutes a day can help. Fit
        in what you can, and work toward a goal.</li>
        <li>Exercise at home. When the
        person with dementia naps, pull out a yoga mat and stretch, set up a
        stationary bike, or try exercise tapes.</li> <li>Find something you love. If you
        enjoy the activity, it will be easier to make it a habit.</li>
        <br/></ul>
      <p className="text-slate-500 text-xl">
        There also are many ways you can be active with the person with dementia. Here are a
        few ideas: 
        </p>
      <p className="text-slate-500 text-xl">
        <ul className="list-disc list-inside text-slate-500 text-xl my-4">
          <li>Take a walk together outside to enjoy the fresh air</li><br/>
          <li>Go to the mall and take a stroll indoors</li><br/>
          <li>Do seated exercises at home</li><br/>
          <li>Dance together to favorite music</li><br/>
          <li>Garden or do other routine activities that you both enjoy</li>
        </ul>
      </p>
      <h2 id="eat" className="text-4xl font-bold text-violet-800 font-serif my-4">Eat well:</h2>
    <p className="text-slate-500 text-xl">
      Heart-healthy eating patterns, such as the Mediterranean diet, are good for overall health and may help protect the brain. A Mediterranean diet includes relatively little red meat and emphasizes whole grains, fruits, vegetables, fish, nuts, olive oil, and other healthy fats. Try new recipes and involve the person with dementia.
      <br/><br/>
      <strong>Need ideas on how to go healthy?</strong>
      <br/>
      Try these resources:</p>
      <ul className="list-disc list-inside text-slate-500 text-xl my-4 ">
        <li><a href="https://familydoctor.org/nutrition-tips-for-improving-your-health/?adfree=true" className="text-blue-500 hover:underline">Nutrition: Tips for Improving Your Health</a> (American Academy of Family Physicians)</li><br/>
        <li><a href="https://www.eatright.org/" className="text-blue-500 hover:underline">Eat Right Nutrition Tips</a> (Academy of Nutrition and Dietetics)</li><br/>
        <li><a href="https://mcpress.mayoclinic.org/?utm_source=MC-DotOrg-Nav&utm_medium=Link&utm_campaign=MC-Press&utm_content=MCPRESS" className="text-blue-500 hover:underline" >Healthy Breakfast: Quick, Flexible Options to Grab at Home</a> (Mayo Foundation for Medical Education and Research)</li>
      </ul>
      <h2 id="tips" className="text-4xl font-bold text-violet-800 font-serif my-4">Tips to help you cope: </h2>
      <ul className="list-decimal list-outside text-slate-500 text-xl my-4 left-5 relative">
        <li>Manage your level of stress. Stress can cause physical problems (blurred vision, stomach irritation, high blood pressure) and changes in behavior (irritability, lack of concentration, change in appetite). Note your symptoms and discuss with a doctor, as needed. Try to find relaxation techniques that work for you.</li>
        <li>Be realistic. The care you give does make a difference, but many behaviors can&apos;t be controlled. Grieve the losses, focus on positive times as they arise, and enjoy good memories.</li>
        <li>Know you&apos;re doing your best. Remember that the care you provide makes a difference and that you are doing the best you can. You may feel guilty because you can&apos;t do more, but individual care needs change as Alzheimer&apos;s progresses. You can&apos;t promise how care will be delivered, but you can make sure that the person with the disease is well cared for and safe. For support and encouragement, join ALZConnected, our online caregiver community.</li>
        <li>Take a break. It&apos;s normal to need a break from caregiving duties. No one can do it all by themselves. Look into respite care to allow time to take care of yourself.</li>
        <li>Accept changes as they occur. People with Alzheimer&apos;s disease change over time and so do their needs. They may require care beyond what you can provide on your own. Becoming aware of community resources and care options — from home care services to residential care — can make the transition easier. So will the support and assistance of those around you.</li>
      </ul>
    </div>
  );
}
