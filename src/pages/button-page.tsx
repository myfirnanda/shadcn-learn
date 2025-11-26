import { CobaButton } from "@/components/belajar/coba-button";
import { Button } from "@/components/ui/button";

export default function ButtonPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen dark bg-background">
            <h1 className="text-4xl font-semibold mb-10">Button List</h1>
            <div className="flex gap-5">
                <CobaButton />
                <Button variant={"outline"} size={"lg"}>Outline</Button>
                <Button variant={"destructive"} size={"sm"}>Destructive</Button>
                <Button variant={"secondary"} size={"icon-lg"}>S</Button>
                <Button variant={"ghost"} size={"icon"}>G</Button>
                <Button variant={"link"} size={"icon-sm"}>L</Button>
            </div>
        </div>
    )
}