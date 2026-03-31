
const useRegister = (api: any) => {
  
  const register = async(username: string, email: string, password: string, gender: string) => {
    console.log("packages/utils/useRegister.ts: REGISTER TRIGGERED")
    console.log("Username: ", username, "Email: ", email, "Password: ", password, "Gender: ", gender);
    const res = await api.post("/users/register", { 
      username, 
      email, 
      password,
      gender,
    });

    return res.data;
  };

  return { register }
};

export default useRegister;