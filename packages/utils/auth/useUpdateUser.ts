
const useUpdateUser = (api: any) => {
  
  const updateUser = async(data: {username?: string, email?: string, gender?: string}) => {
    console.log("packages/utils/useRegister.ts: REGISTER TRIGGERED")
    console.log("Update data:", data);
    
    // Remove undefined fields before sending
    const payload: { [key: string]: string } = {};
    Object.keys(data).forEach((key) => {
      if (data[key as keyof typeof data] !== undefined) {
        payload[key] = data[key as keyof typeof data]!;
      }
    });

    const res = await api.patch("/users/me", payload);

    return res.data;
  };

  return { updateUser }
};

export default useUpdateUser;