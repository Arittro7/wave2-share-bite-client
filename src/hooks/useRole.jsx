import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {

    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data, isLoading} = useQuery({
        queryKey:['data', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`/user/${user?.email}`)
            return data
        }
    })

      
        return [data, isLoading]

};

export default useRole;

