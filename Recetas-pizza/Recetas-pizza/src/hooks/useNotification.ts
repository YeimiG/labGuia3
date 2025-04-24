import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useNotification = () => {
  const baseOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored', 
  }

  const notify = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    toast[type](message, baseOptions)
  }

  return { notify }
}

export default useNotification