
const useRegister = (api: any) => {
  
  const register = async(username: string, email: string, password: string) => {
    console.log("packages/utils/useRegister.ts: REGISTER TRIGGERED")
    console.log("Username: ", username, "Email: ", email, "Password: ", password);
    const res = await api.get("/users/register", { 
      username, 
      email, 
      password 
    });

    return res.data;
  };

  return { register }
};

export default useRegister;