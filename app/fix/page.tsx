import { PenTool } from "lucide-react";
export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-5">
      <PenTool size={40} />
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="font-custom">此頁面仍在建置中</h1>
        <h1 className="font-custom">
          Sorry, this page is still under construction.
        </h1>
      </div>
    </div>
  );
}
