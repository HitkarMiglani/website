import { TextForm } from "@/components/text_form";
import { SidebarDemo } from "@/components/sidebar";

export default  function Page() {

    return (
    <div className="bg-black-100 py-4"> 
    <SidebarDemo />  
         <TextForm />
    </div>
  );
}