import { useState } from "react";
import ObserveEnterExit from "../anim/ObserveEnterExit";
import ThirdButton from "../buttons/ThirdButton";

export default function ProjectItem({ project }) {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <ObserveEnterExit onEnter={() => setVisible(true)} onExit={() => setVisible(false)} threshold={.2}>
            <div className={`rounded-lg w-full h-[20rem]z relative cursor-pointer overflow-hidden
                    transition-all
                    md:block
                    flex flex-col
                    duration-500 ease-[cubic-bezier(0.4, 0.0, 0.2, 1.0)]
                    hover:scale-[1.02] hover:shadow-lg
                    ${visible ? "scale-100 blur-0 opacity-100" : "scale-90 blur-lg opacity-0"}
                `} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
                <a href={project.link} target="_blank">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full aspect-[8/5] object-cover" />
                    <div
                        className={`absolute bottom-0 left-0 w-full h-16 bg-primary items-center px-4 flex flex-row
                        opacity-100 translate-y-0 gap-4
                        transition-all duration-500 ${hovered ? "lg:opacity-100 lg:translate-y-0" : "lg:opacity-0 lg:translate-y-4"}
                    `}
                    >
                        <div className="flex-1 min-w-0">
                            <h1 className="text-black text-xl font-bold leading-tight">{project.title}</h1>
                            <p className="text-black text-sm truncate max-w-full leading-tight">{project.description}</p>
                        </div>
                        {project.link && (
                            <ThirdButton>
                                More info
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                                    <path d="M13.0601 10.9399C15.3101 13.1899 15.3101 16.8299 13.0601 19.0699C10.8101 21.3099 7.17009 21.3199 4.93009 19.0699C2.69009 16.8199 2.68009 13.1799 4.93009 10.9399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.59 13.4099C8.24996 11.0699 8.24996 7.26988 10.59 4.91988C12.93 2.56988 16.73 2.57988 19.08 4.91988C21.43 7.25988 21.42 11.0599 19.08 13.4099" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </ThirdButton>
                        )}
                    </div>
                </a>
            </div>
        </ObserveEnterExit >
    );
}