'use client'

import { useEffect } from "react"

export default function ErrorExampleUI({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

    useEffect(()=>{
//sent a report to error logging service
    },[error])
  return (
    <div className="p-6 border rounded bg-red-50 text-red-700">
      <h2 className="text-lg font-semibold">Something went wrong!</h2>
      <p>{error.message}</p>
      <p className="text-xs opacity-70">Digest: {error.digest}</p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
  )
}
