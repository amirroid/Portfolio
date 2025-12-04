import HorizontalPadding from "../padding/HorizontalPadding"
import ProjectItem from "./ProjectItem"
import TranslationContext from "../../context/TranslationContext"
import { useContext } from "react"

export default function ProjectsSection() {
    const { t } = useContext(TranslationContext);
    const ktorAdminDescription = t('ktor_admin_description');
    const clipShareDescription = t('clipshare_description');
    const mafiuatoDescription = t('mafiauto_description');
    const schoolAppDescription = t('school_app_description');
    const projects = [
        {
            id: 1,
            title: "KtorAdmin",
            image: "images/ktoradmin.jpg",
            link: "https://github.com/amirroid/KtorAdmin",
            description: ktorAdminDescription
        },
        {
            id: 2,
            title: "ClipShare",
            image: "images/clipshare.jpg",
            link: "https://github.com/amirroid/ClipShare",
            description: clipShareDescription
        },
        {
            id: 3,
            title: "Mafiauto",
            image: "images/mafiauto.jpg",
            link: "https://github.com/amirroid/mafiauto",
            description: mafiuatoDescription
        },
        {
            id: 4,
            title: "School App",
            image: "images/school.jpg",
            description: schoolAppDescription
        },
    ]
    return (
        <HorizontalPadding>
            <div className="flex flex-col mt-36 gap-4 items-center">
                <h1 className="text-5xl font-bold">{t('projects_section')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <ProjectItem project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </HorizontalPadding>
    )
}