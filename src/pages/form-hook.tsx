import FormHook from "@/components/belajar/form-hook";

export default function FormHookPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen dark bg-background">
            <h1 className="text-4xl font-semibold mb-10">Form Hook Page</h1>
            <FormHook/>
        </div>
    );
}