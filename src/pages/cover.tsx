import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Cover() {
    return (
        <div className="flex flex-col justify-center items-center h-screen dark bg-background">
            <h1 className="text-4xl font-semibold mb-10">Belajar Shadcn</h1>
            <div className="flex gap-5">
                <Link to="/button"><Button className="cursor-pointer">Button</Button></Link>
                <Link to="/dropdown"><Button className="cursor-pointer">Dropdown</Button></Link>
                <Link to="/card-profile"><Button className="cursor-pointer">Card Profile</Button></Link>
                <Link to="/form-hook"><Button className="cursor-pointer">Form Hook</Button></Link>
                <Link to="/dashboard"><Button className="cursor-pointer">Dashboard</Button></Link>
                <a href="https://www.youtube.com/watch?v=jHzdo1Bm9Lk" target="_blank"><Button className="cursor-pointer">Enhance View</Button></a>
            </div>
        </div>
    )
}