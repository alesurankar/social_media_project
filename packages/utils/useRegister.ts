
const useRegister = (api: any) => {
  
  const register = async(username: string, email: string, password: string) => {
    console.log("packages/utils/useRegister.ts: REGISTER TRIGGERED")
    console.log("Username: ", username, "Email: ", email, "Password: ", password);
    // await api.get("/users/register, { username, email, password });
    // TODO register logic
    return true;
  };

  return { register }
};

export default useRegister;