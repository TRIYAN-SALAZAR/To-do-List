import Tasks from "../components/Tasks";
import Collection from "../components/Collections";

import '../css/RenderAll.css';

export default function RenderAll() {
    return (
        <section id="render-all">
            <Tasks />
            <Collection />
            <Collection />
            <RenderTasks />
            <Collection />
            <Collection />
            <RenderTasks />
            <Collection />
            <Collection />
            <Collection />
            <Collection />
            <Collection />
        </section>
    )
}

function RenderTasks() {
    
    return (
        <>
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
        </>
    )
}