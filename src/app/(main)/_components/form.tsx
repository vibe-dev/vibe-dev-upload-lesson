'use client'

import { useFormState } from "react-dom";
import { submitFormAction } from "../actions";

const initialState = {
  url: '',
}

export function UploadForm() {
  const [state, formAction] = useFormState(submitFormAction, initialState)

  return (
    <form action={formAction} className="flex flex-col items-center justify-center p-6">
      <input type="file" name="file" id="file" className="my-2 p-2 rounded border-gray-700 text-white bg-gray-700" />
      <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700">Upload file</button>

      <hr />

      {state.url && (
        <img src={state.url} alt={state.url} />
      )}
    </form>
  )
}