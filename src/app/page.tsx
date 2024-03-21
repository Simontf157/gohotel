import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Datepicker from "@/components/Datepicker";

export default function Home() {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="flex w-full justify-center items-end gap-5 mt-10">
                <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                        className="mt-2"
                        name="location"
                        type="location"
                        placeholder="Ex: Japan"
                    ></Input>
                </div>
                <div>
                    <Label htmlFor="date">Date</Label>
                    <div className="mt-2">
                        <Datepicker></Datepicker>
                    </div>
                </div>
                <div>
                    <Label htmlFor="travelers">Travelers</Label>
                    <Input
                        className="mt-2"
                        name="travelers"
                        type="number"
                        placeholder="Ex: 2"
                        max="10"
                    ></Input>
                </div>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#e11d48] to-[#e11daa] group-hover:from-[#e11d48] group-hover:to-[#e11daa] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                        Search
                    </span>
                </button>
            </div>
        </div>
    );
}
