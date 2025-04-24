import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useNotification = () => {
  const baseOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored', 
  }
//esta parte de success, error, info, warning son para cuando exista algun problema con las notificaciones y son llamadas en el Home
  const notify = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    toast[type](message, baseOptions)
  }

  return { notify }
}

export default useNotification