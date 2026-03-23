
const useLogin = (api: any) => {

  const login = async (email: string, password: string) => {
    console.log("packages/utils/useLogin.ts: LOGIN TRIGGERED")
    console.log("Email: ", email, "Password: ", password);
    // await api.post("/users/login", { email, password });
    // TODO login logic
    return true;
  };

  return { login };
};

export default useLogin;