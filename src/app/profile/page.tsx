"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";






function Profile(){
  const router=useRouter()
  const pathName=usePathname()
const searchParams=useSearchParams()


console.log(searchParams.get('name'),"searchParams")

  console.log(router,pathName)
const handleNavigate=()=>{
  router.push('/')
}


    return(
     <div>
          <h1>Profile Component</h1>
        <button onClick={handleNavigate}
        className="test-2xl border-8 bg-amber-400">Navigate to home page</button>
     </div>
    )
}

export default Profile
