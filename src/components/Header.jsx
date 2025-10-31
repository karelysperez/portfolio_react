import '../styles/header.css'
export default function Header() {
    return (
        <header>
            <div className="profile">
                <section className="profile-icon">MG</section>
                <h1 className="name">Martina Gonzales</h1>
            </div>

            <button id="menuBtn" aria-label="Menu Button" type="button">
                <img src="/icons8-menu-50.png" alt="menu" />
            </button>

            <nav>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./Projects.html">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}