import Link from "next/link"
import { useRouter } from "next/router"
export default function Navbar() {
    const router = useRouter()

    return (
        <>
            <ul id="myNavbar" className="navbar_nav">
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-toggle nav-link" style={{ cursor: 'default' }}>
                        <span>Soluções</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="menu-item nav-item">
                            <Link href="/precatorios" className="dropdown-item nav-link">
                                <span>Venda de Precatórios</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/tributaria" className="dropdown-item nav-link">
                                <span>Transação Tributária</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                </li>
                <li className="menu-item nav-item">
                    <Link href="/investidores" className={`nav-link${router.pathname === "/investidores" ? " active" : ""}`}>
                        <span>Investidores</span>
                    </Link>
                </li>
                <li className="menu-item nav-item">
                    <Link href="/sobre" className={`nav-link${router.pathname === "/sobre" ? " active" : ""}`}>
                        <span>Sobre</span>
                    </Link>
                </li>
                <li className="menu-item nav-item">
                    <Link href="/contato" className={`nav-link${router.pathname === "/contato" ? " active" : ""}`}>
                        <span>Contato</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
