
import {
    Users,
    MousePointer2,
    Layers,
    Network,
    Search,
    Component,
    Figma,
    Code2
} from "lucide-react";

interface Skill {
    name: string;
    icon: any;
    color: string;
}

const skills: Skill[] = [
    { name: "User-Centered Design", icon: Users, color: "#E3F2FD" },
    { name: "Interaction Design", icon: MousePointer2, color: "#F3E5F5" },
    { name: "Wireframing & Prototyping", icon: Layers, color: "#FFF9C4" },
    { name: "Information Architecture", icon: Network, color: "#E8F5E9" },
    { name: "Usability Testing", icon: Search, color: "#FCE4EC" },
    { name: "Design Systems", icon: Component, color: "#E1F5FE" },
    { name: "Figma", icon: Figma, color: "#F5F5F5" },
    { name: "HTML/CSS", icon: Code2, color: "#E0F2F1" },
];

const SkillsBox = () => {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-[#E5E5E5] bg-[#FBFCFF] p-6 shadow-sm group">
            <h3 className="mb-4 shrink-0 text-lg font-bold text-[#1a1a1a] tracking-tight">
                Core Skills
            </h3>

            <div className="flex flex-1 flex-wrap content-start gap-2 overflow-hidden">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-[#F0F0F0] bg-white px-3 py-1.5 text-sm font-semibold text-[#444444] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                        <skill.icon className="h-4 w-4 text-[#1a1a1a]" strokeWidth={2.5} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>
        </div>
    );
};

export default SkillsBox;
