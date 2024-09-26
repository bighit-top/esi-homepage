export const SubTitle: React.FC<{ title: string }> = (props) => {
    return (
        <div className="w-full text-3xl mt-40 font-extrabold max-md:max-w-full">
            {props.title}
        </div>
    );
}