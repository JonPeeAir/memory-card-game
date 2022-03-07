const Card = props => {
    return (
        <div className="w-[140px] md:w-[180px] 2xl:w-[220px] h-[175px] md:h-[225px] 2xl:h-[275px] bg-lime-700/25 border-lime-500 border-4 grid place-items-center gap-2">
            <img
                src={props.img}
                alt="temp"
                className="w-[80%] border-lime-500 border-2 self-end"
            />
            <p className="bg-lime-600 w-[90%] font-handwriting md:text-lg 2xl:text-xl text-center text-gray-200 self-start">
                {props.name}
            </p>
        </div>
    );
};

export default Card;
