import '../css/nav-Bar.css';

import burguerIcon from '../assets/icons/burguer.svg';
import createTaskIcon from '../assets/icons/Create_Task.svg';
import createCollectionIcon from '../assets/icons/Create_Collection.svg';
import deleteTasksOrCollectionsIcons from '../assets/icons/delete_tasks_or_collections.svg';


export default function NavBar() {
    return (
        <nav>
            <section id='options'>
                <button><img src={burguerIcon} alt="burguer.svg" /></button>
                <button><img src={createTaskIcon} alt="Create_Task.svg" /></button>
                <button><img src={createCollectionIcon} alt="Create_Collection.svg" /></button>
                <button><img src={deleteTasksOrCollectionsIcons} alt="delete_tasks_or_collections.svg" /></button>
            </section>
            <section id='collections'>
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
                <CollectionForNav />
            </section>
        </nav>
    )
}

function CollectionForNav() {
    return (
        <section className='collection'>
            <hr/>
            <h3>title for collection</h3>            
        </section>
    )
}