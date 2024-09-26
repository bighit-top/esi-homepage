export const InspectionHistoryItem: React.FC<{ history: any; onClick?: (id: string) => void }> = (props) => {

    const { history, onClick } = props;

    const detailHistoryHandler = () => {
        if (onClick) {
            onClick(history.id);
        }
    };

    const handleClick = onClick ? detailHistoryHandler : undefined;

    return (
        <div key={props.history.id} onClick={handleClick} className={`flex flex-col w-[23%] max-sm:w-full max-md:w-[90%] max-lg:w-[47%] max-xl:w-[31%] ${onClick ? 'cursor-pointer' : ''}`}>
            <div className="flex flex-col border-t-red-700 grow max-md:mt-6">
                <div className="flex justify-center items-center bg-blue-800 bg-opacity-5 max-md:px-5">
                    <img
                        loading="lazy"
                        src={`${process.env.REACT_APP_SERVER_API}/uploads/${props.history.image}`}
                        className="aspect-square w-[100%]"
                    />
                </div>

                <div className="text-2xl py-1 text-black font-[1000] truncate leading-10">
                    {props.history.serviceName}
                </div>
                <div className="text-lg text-black font-[1000] max-w-[72px]">{props.history.clientBuildingArea}</div>
            </div>
        </div>
    );
}