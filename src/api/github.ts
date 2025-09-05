const apiUrl= import.meta.env.VITE_BACKEND_API_URL;

export async function fetchGitHubProfile (){
  const res = await fetch(`${apiUrl}/github/profile`,{
    credentials: "include",
  })
  console.log(res);
  
  if (!res.ok) throw new Error("Failed to fetch GitHub profile")
  return res.json()
}