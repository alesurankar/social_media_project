
const useUpdateUser = (api: any, token?: string) => {
  
  const updateUser = async(data: {username?: string, email?: string, gender?: string}) => {
    
    try {
      console.log("packages/utils/useRegister.ts: REGISTER TRIGGERED")
      const payload: { [key: string]: string } = {};
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
      console.log("Update data:", data);
      Object.keys(data).forEach((key) => {
        if (data[key as keyof typeof data] !== undefined) {
          payload[key] = data[key as keyof typeof data]!;
        }
      });

      const res = await api.patch("/users/me", payload, {headers});
      return res.data;
    }
    catch {
      alert("Failed to add email");
    }
  };

  return { updateUser }
};

export default useUpdateUser;