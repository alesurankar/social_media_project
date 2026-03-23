
const useLogout = (api: any) => {
  
  const logout = async() => {
    console.log("packages/utils/useLogout.ts: LOGOUT TRIGGERED")
    //await api.get("/users/logout");
  };

  return { logout }
};

export default useLogout;