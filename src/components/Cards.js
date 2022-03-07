import Card from "./Card";
import tempImg from "../assets/temp.png";

const Cards = props => {
    return (
        <div className="p-5 container flex-1 flex flex-col items-center border-4 rounded-sm bg-green-500/75 border-lime-500 shadow-green-900 shadow-[inset_0_0_80px_80px]">
            <p className="pb-6 text-4xl font-handwriting text-gray-200">
                Level {props.level}
            </p>
            <div className="flex flex-wrap gap-5 justify-center items-center h-fit">
                <Card img={tempImg} name="Morty Smith" />
                <Card img={tempImg} name="Morty Smith" />
                <Card img={tempImg} name="Morty Smith" />
            </div>
        </div>
    );
};

export default Cards;
