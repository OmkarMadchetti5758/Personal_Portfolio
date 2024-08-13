import { IoIosMail } from "react-icons/io";
import { FcContacts } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
export default function Contact(){
    return(
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <div className="text-center tracking-tighter">
                <div className="flex flex-row gap-2 justify-center mt-[-1rem]">
                    <FaLocationDot className="my-4 mt-[1.1rem] text-xl"/>
                    <p className="my-4">Chinchwad, Pune</p>
                </div>
                <div className="flex flex-row gap-2 justify-center mt-[-1rem]">
                    <FcContacts className="my-4 mt-[1.1rem] text-xl"/>
                    <p className="my-4">+91 89561 75758</p>
                </div>
                <div className="flex flex-row gap-2 justify-center mt-[-1rem]">
                    <IoIosMail className="my-4 mt-[1rem] text-2xl"/>
                    <a href="#" className="my-4 border-b">omkarmadchetti@gmail.com</a>
                </div>
            </div>
        </div>
    )
}