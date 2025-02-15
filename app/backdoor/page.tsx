"use client";
import { FormEvent, useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { CircleAlert } from "lucide-react";

interface FileObject {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
  last_accessed_at: string;
  metadata: Record<string, any>;
}

export default function Page() {
  const [files, setFiles] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [type, setType] = useState<string>("");
  const [lock, setLock] = useState<boolean>(true);
  const [passcode, setPasscode] = useState<string>("");

  useEffect(() => {
    const fetchFiles = async () => {
      setFiles([]);
      const { data, error } = await supabase.storage
        .from("english")
        .list("b4/three/", {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        });

      if (error) {
        console.error("Error fetching files:", error);
      } else {
        setFiles(data);
      }
      setLoading(false);
    };

    fetchFiles();
  }, [type]);

  const downloadFile = async (file: FileObject) => {
    const { data, error } = await supabase.storage
      .from("english")
      .download(`b4/three/${file.name}`);

    if (error) {
      console.error("Error downloading file:", error);
    } else {
      const url = window.URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const handleLock = (e: FormEvent) => {
    e.preventDefault();
    if (passcode === "657389") setLock(false);
  };

  return (
    <>
      <div className="bg-white fixed top-0 w-full min-h-dvh z-50 flex flex-col justify-center items-center overflow-y-auto">
        <div className="pt-8 px-8 w-full flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">歡迎來到系統後門</h1>
            <p className="text-lg">龍騰英文教用資源</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 w-full pt-5 pl-8">
          <button
            onClick={() => setType("allInOne")}
            className={`p-2 px-4 rounded-full ${type === "allInOne" ? "bg-primary text-white" : "bg-zinc-100"}`}
          >
            All In One
          </button>
          <button
            onClick={() => setType("threeInOne")}
            className={`p-2 px-4 rounded-full ${type === "threeInOne" ? "bg-primary text-white" : "bg-zinc-100"}`}
          >
            三合一
          </button>
        </div>
        {type !== "" ? (
          <div className="grow w-full p-8 pt-2">
            {loading ? (
              <p>載入資源中</p>
            ) : (
              <ul className="px-2">
                {files.map((file) => (
                  <li
                    key={file.id}
                    className="py-2 flex justify-between items-center"
                  >
                    {file.name}
                    <button
                      onClick={() => downloadFile(file)}
                      className="border-b border-zinc-200 py-1 hover:bg-zinc-100"
                    >
                      下載
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="grow flex items-center flex-col pt-10">
            <CircleAlert />
            <p className="p-2 px-4 rounded-full font-medium">
              請先選擇資源類別
            </p>
          </div>
        )}
      </div>
      {lock && (
        <div className="bg-zinc-400/50 backdrop-blur fixed z-[60] top-0 w-full h-dvh flex flex-col items-center justify-center">
          <div className="p-7 w-full flex flex-col sm:items-center sm:justify-center">
            <h1 className="text-2xl font-medium">請輸入密碼</h1>
            <p>如果你不知道密碼代表這個地方不是你該來的，請關閉此網頁。</p>
          </div>
          <form
            onSubmit={handleLock}
            className="w-full px-7 flex items-center gap-4 sm:items-center sm:justify-center"
          >
            <input
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="bg-white p-2 px-4 rounded-full"
            />
            <button>確認</button>
          </form>
        </div>
      )}
    </>
  );
}
