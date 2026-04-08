
const useLogin = (api: any) => {

  const login = async (username: string, password: string) => {
    console.log("packages/utils/useLogin.ts: LOGIN TRIGGERED")
    console.log("Username: ", username, "Password: ", password);
    const res = await api.post("/users/login", {
      username,
      password,
    });

    return res.data;
  };

  return { login };
};

export default useLogin;