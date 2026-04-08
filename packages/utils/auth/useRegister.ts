
const useRegister = (api: any) => {
  
  const register = async(username: string, password: string, gender: string) => {
    console.log("packages/utils/useRegister.ts: REGISTER TRIGGERED")
    console.log("Username: ", username, "Email: ", password, "Gender: ", gender);
    const res = await api.post("/users/register", { 
      username, 
      password,
      gender,
    });

    return res.data;
  };

  return { register }
};

export default useRegister;