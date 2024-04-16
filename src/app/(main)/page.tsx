import { storageProvider } from "@/services/storage";
import Image from "next/image";
import { UploadForm } from "./_components/form";

export default function Home() {
  async function submitForm(form: FormData) {
    'use server'

    const file = form.get('file') as File
    const url = await storageProvider.upload(file)

    console.log({
      url
    })
  }

  return (
    <main className="bg-gray-800 min-h-screen">
      <UploadForm />
    </main>
  );
}
