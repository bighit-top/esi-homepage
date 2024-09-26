import { Link } from "react-router-dom";
import { HistoryAndImageModel } from "../../../models/HistoryAndImageModel";

export const ReturnHistory: React.FC<{ history: HistoryAndImageModel }> = (props) => {
    return (
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-3'>
            <div className='text-center'>
                {props.history.image ? (
                    <img
                        src={props.history.image}
                        className='w-36 h-56 mx-auto'
                        alt="book"
                    />
                ) : (
                    <img
                        src={require('../../image/mechanics.png').default}
                        className='w-36 h-56 mx-auto'
                        alt="book"
                    />
                )}
                <h6 className='mt-2'>{props.history.serviceName}</h6>
                <p>{props.history.clientName}</p>
            </div>
        </div>
    );
}