'use client';
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  
  const {orgRole, userId, isSignedIn, isLoaded, orgId } = useAuth();
  const router = useRouter();

  useEffect(()=>{
    console.log(orgRole);
    if(orgRole == 'org:admin'){
      router.push('/admin')
    }
    if(orgRole == 'org:manager'){
      router.push('/manager/inventory')
    }
  },[orgRole])

  return (
     <>
       <p>
          {userId}
          <br/>
          {orgRole}
          <br/>
          {isLoaded? 'Loaded' : ''} 
          <br/>
          {isSignedIn ? 'SI' : ''}

       </p>
     </>
  );
}
