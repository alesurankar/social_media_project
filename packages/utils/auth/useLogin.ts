
const useLogin = (api: any) => {

  const login = async (email: string, password: string) => {
    console.log("packages/utils/useLogin.ts: LOGIN TRIGGERED")
    console.log("Email: ", email, "Password: ", password);
    const res = await api.post("/users/login", {
      email,
      password,
    });

    return res.data;
  };

  return { login };
};

export default useLogin;