import axios from "axios"
import { useNavigate } from "react-router-dom"

function useUserActions() {
  const navigate = useNavigate()
  const baseURL = "http://localhost:8000/api"

  function setUserData(data) {
    localStorage.setItem("auth", JSON.stringify({
      access: data.access,
      refresh: data.refresh,
      user: data.user,
    }))
  }

  function login(data) {
    return axios.post(`${baseURL}/auth/login/`, data).then((res) => {
      setUserData(data)
      navigate("/")
    })
  }

  function logout() {
    localStorage.removeItem("auth")
    navigate("/")
  }

  return {
    login,
    // register,
    logout,
  }
}

export default useUserActions