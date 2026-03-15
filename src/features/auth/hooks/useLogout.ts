import { useDispatch } from "react-redux";
import { setAuthInfo } from "../store/auth.slice";
import { clearToken } from "../server/auth.action";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default  function useLogout(){
  const dispatch = useDispatch();
  const router = useRouter();
 const logout =async ()  =>{
   await clearToken();
  dispatch(  setAuthInfo({isAuthenticated:false, userInfo:null,}))
  toast.success("logged out successfully")
  router.push("/login");
  router.refresh();
 };
 return{logout}
}