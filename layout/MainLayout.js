import Link from 'next/link'

function MainLayout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href={'/'}><a className="nav-link" aria-current="page">Главная</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'/posts'}><a className="nav-link">Все посты</a></Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

            <main>
                <div className="container">
                    { children }
                </div>
            </main>
        </>
    )
}

export default MainLayout