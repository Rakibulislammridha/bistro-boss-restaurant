import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import UseAuth from './UseAuth';

const useCart = () =>{
    const {user, loading} = UseAuth();

    // const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading ,
        queryFn: async ()=>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
      })
      return [cart, refetch]
}

export default useCart;
 
        // queryFn: async ()=>{
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },