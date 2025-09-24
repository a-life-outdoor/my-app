"use client"
import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabaseClient"

interface User {
  id: string
  name: string
  email: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("users").select("*")
      setUsers(data as User[] || [])
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
