import '../css/nav-Bar.css';

export default function NavBar() {
    return (
        <nav>
            <button>
                <img src="../assets/icons/burguer.svg" alt="" />
            </button>

            <button>
                <img src="../assets/icons/Create Task.svg" alt="" />
            </button>

            <button>
                <img src="../assets/icons/Create Collection.svg" alt="" />
            </button>

            <button>
                <img src="../assets/icons/delete tasks or collections.svg" alt="" />
            </button>
        </nav>
    )
}