const apiUrl= import.meta.env.VITE_BACKEND_API_URL;

export async function fetchMe() {
  const res = await fetch(`${apiUrl}/me`, {
    credentials: "include", // send cookies for auth
  })
  if (!res.ok) throw new Error("Failed to fetch user")
  return res.json()
}

