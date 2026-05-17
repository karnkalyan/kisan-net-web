// This is a simple authentication utility for demo purposes
// In a real application, you would use a proper authentication system

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
}

// Dummy users for testing
export const users: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@kisannet.com",
    role: "admin",
  },
  {
    id: "2",
    name: "Ram Sharma",
    email: "ram.sharma@example.com",
    role: "user",
  },
  {
    id: "3",
    name: "Sita Tamang",
    email: "sita.tamang@example.com",
    role: "user",
  },
]

// Simple authentication function
export function authenticate(email: string, password: string): User | null {
  // For demo purposes, any password will work
  // In a real application, you would verify the password
  const user = users.find((user) => user.email === email)
  return user || null
}

// Check if user is admin
export function isAdmin(user: User): boolean {
  return user.role === "admin"
}
