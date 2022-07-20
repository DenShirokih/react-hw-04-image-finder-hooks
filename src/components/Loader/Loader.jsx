import { Watch } from 'react-loader-spinner';
import { Spinner } from './Loader.module';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loader =()=>{
    return(<Spinner>
    <Watch ariaLabel="loading-indicator" color="red" />
    </Spinner>)
}

