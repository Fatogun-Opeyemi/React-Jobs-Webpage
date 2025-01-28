// import ClipLoader from "react-spinners/ClipLoader";
import { ColorRing } from 'react-loader-spinner'


const Spinner = () => {
  return (
    <div className='grid place-content-center' >
    ;<ColorRing
      visible={true}
      height="80"
      width="80"
      margin='100px mx-auto'
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  )
}

export default Spinner