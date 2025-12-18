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
        Many caregivers experience depression. If you are experiencing symptoms, know that you aren't alone and that help is available. Depression is a serious condition, but one that is treatable.
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        Symptoms of depression
      </h2>
      <p className="text-slate-500 text-xl">
        Caregiving is hard — and can lead to feelings of stress, guilt, anger, sadness, isolation — and depression. Depression affects different people in different ways and at different times. For example, someone may experience depression right after their family member has been diagnosed with Alzheimer's. Other caregivers may experience it as Alzheimer's progresses and the cognitive abilities of the person with Alzheimer's diminish.
      </p>
      <p className="text-slate-500 text-xl">
        Signs and symptoms of depression include:
      </p>
      <ul className="list-disc list-inside text-slate-500 text-xl my-4">
        <li>Becoming easily agitated or frustrated</li>
        <li>Feelings of worthlessness or guilt</li>
        <li>Feelings of hopelessness</li>
        <li>Thoughts of death, dying or suicide</li>
        <li>Disturbed sleep</li>
        <li>Fatigue or loss of energy</li>
        <li>Loss of interest or pleasure in usual activities</li>
        <li>Difficulty thinking or concentrating</li>
        <li>Changes in appetite and weight</li>
        <li>Physical symptoms that do not respond to treatment, such as headaches, digestive disorders and pain</li>
      </ul>
      <p className="text-slate-500 text-xl">
        Source: American Psychiatric Association Diagnostic and Statistical Manual of Mental Disorders
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        See your doctor
      </h2>
      <p className="text-slate-500 text-xl">
        If you are concerned that you might be depressed, see your doctor as soon as possible. Certain medications and some medical conditions can cause the same symptoms as depression. A doctor can rule out these possibilities by doing a medical exam and lab tests.
      </p>
      <p className="text-slate-500 text-xl">
        If depression is left untreated, it can lead to emotional and physical problems. It can also affect the quality of care you're able to provide the person with Alzheimer's or dementia.
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        Treatment
      </h2>
      <p className="text-slate-500 text-xl">
        Depression can be effectively treated. And the earlier treatment begins, the earlier you'll feel better. Treatment commonly involves a combination of medication, therapy and support.
      </p>
      <h3 className="text-3xl font-bold text-violet-800 font-serif my-4">
        Medication
      </h3>
      <p className="text-slate-500 text-xl">
        Feeling better takes time. If you are prescribed an antidepressant, talk with your doctor about how long it will take to feel the full benefit. In some cases, it may take six to eight weeks. Never stop taking an antidepressant without consulting your doctor first. Abruptly stopping antidepressants can cause unwanted side effects.
      </p>
      <h3 className="text-3xl font-bold text-violet-800 font-serif my-4">
        Counseling
      </h3>
      <p className="text-slate-500 text-xl">
        Your doctor may refer you to a mental health professional, such as a counselor, psychologist, psychiatrist or social worker. Counseling can be very effective in the treatment of depression, and can help you deal with the problems you are facing. It's important to be comfortable with the professional you seek treatment with, so consider interviewing several to find a good fit. Your primary care physician, insurance provider or community mental health clinic may be able to provide referrals.
      </p>
      <h2 className="text-4xl font-bold text-violet-800 font-serif my-4">
        Coping
      </h2>
      <p className="text-slate-500 text-xl">
        In addition to seeking help from a professional, you can take steps to help yourself.
      </p>
      <ul className="list-disc list-inside text-slate-500 text-xl my-4">
        <li>Let family and friends help you. Take others up on offers to help and ask for help when you need it.</li>
        <li>Seek out caregiver support. Consider respite services, a local caregiver support group or our online community. Building a support network can keep you from feeling isolated.</li>
        <li>Try journaling. Expressing your emotions (both negative and positive) in a journal may boost your mood.</li>
        <li>Learn ways to relax and manage stress. Try meditation or yoga to help reduce caregiver stress.</li>
        <li>Take time for yourself. Participate in activities that you enjoy.</li>
      </ul>
    </div>
  );
}