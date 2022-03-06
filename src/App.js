import "./App.css";

import GithubLogo from "./assets/github-logo.svg";
import GameTitle from "./assets/memory-rick.png";
import tempImg from "./assets/temp.png";

const App = () => {
    return (
        <div className="pt-10 h-screen flex flex-col gap-5">
            <div className="flex flex-col justify-center items-center gap-2">
                <img src={GameTitle} alt="Memory Rick!" className="w-[90%]" />

                <p className="text-sm text-gray-200 font-handwriting">
                    A Rick and Morty Memory Card Game
                </p>
            </div>

            <div>
                <p className="text-center text-2xl text-gray-200 font-handwriting">
                    Score: 0 Best: 0
                </p>
            </div>

            <div className="p-5 w-full flex-1 flex flex-col items-center border-4 rounded-sm bg-green-500/75 border-lime-500 shadow-green-900 shadow-[inset_0_0_80px_80px]">
                <p className="pb-6 text-4xl font-handwriting text-gray-200">
                    Level 1
                </p>
                <div className="flex flex-wrap gap-5 justify-center items-center h-fit">
                    <div className="w-[140px] h-[175px] bg-lime-700/25 border-lime-500 border-4 grid place-items-center gap-2">
                        <img
                            src={tempImg}
                            alt="temp"
                            className="w-[80%] border-lime-500 border-2 self-end"
                        />
                        <p className="bg-lime-600 w-[90%] font-handwriting text-center text-gray-200 self-start">
                            Morty Smith
                        </p>
                    </div>

                    <div className="w-[140px] h-[175px] bg-lime-700/25 border-lime-500 border-4 grid gap-2">
                        <img
                            src={tempImg}
                            alt="temp"
                            className="w-[80%] border-lime-500 border-2 justify-self-center self-end"
                        />
                        <p className="bg-lime-600 w-[90%] font-handwriting text-center text-gray-200 justify-self-center self-start">
                            Morty Smith
                        </p>
                    </div>

                    <div className="w-[140px] h-[175px] bg-lime-700/25 border-lime-500 border-4 grid gap-2">
                        <img
                            src={tempImg}
                            alt="temp"
                            className="w-[80%] border-lime-500 border-2 justify-self-center self-end"
                        />
                        <p className="bg-lime-600 w-[90%] font-handwriting text-center text-gray-200 justify-self-center self-start">
                            Morty Smith
                        </p>
                    </div>
                </div>
            </div>

            <div className="-mt-3 p-2 text-white font-handwriting text-base flex justify-center items-center">
                <p>
                    JNPR @{" "}
                    <a
                        href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/memory-card"
                        target="_blank"
                        rel="noreferrer"
                    >
                        TheOdinProject
                    </a>
                </p>

                <a
                    href="https://github.com/JonPeeAir/memory-card-game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-3"
                >
                    <img src={GithubLogo} alt="Github Logo" />
                </a>
            </div>
        </div>
    );
};

export default App;
