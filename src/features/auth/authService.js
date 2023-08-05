import axios from 'axios';

const API_URL = 'ai.fitfinder.ca/api/users/';

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);
    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Logout user
const logout = async () => {
    localStorage.removeItem('user');
}
// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }
// Get user by id
const getUser = async (id) => {
    const response = await axios.get(API_URL + id);
    return response.data;
}
const authService = {
    register,
    logout,
    login,
    getUser
}
export default authService;
