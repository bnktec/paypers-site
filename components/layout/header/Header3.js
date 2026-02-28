import Link from "next/link"
import Navbar from "../Navbar"
export default function Header3({ handleContactPopup, handleMobileMenu }) {
    return (
        <>
            <div className="header_area " id="header_contents">
                <div className="top_bar style_two">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="top_inner">
                                    <div className="left_side common_css">
                                        <div className="contntent email">
                                            <i className="icon-email" />
                                            <div className="text">
                                                <Link href="mailto:contato@paypers.com.br">contato@paypers.com.br</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right_side common_css">
                                        <div className="contntent media">
                                            <div className="text">
                                                <Link href="https://facebook.com/paypersoficial" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa fa-facebook" style={{ fontSize: '18px' }} />
                                                </Link>
                                                <Link href="https://instagram.com/paypersoficial" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa fa-instagram" style={{ fontSize: '18px' }} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="contntent cbutton">
                                            <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn three"> Falar com Especialista </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="header header_default style_two get_sticky_header">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-9 col-sm-9 col-xs-9 logo_column">
                                <div className="header_log_outer">
                                    <div className="header_logo_box">
                                        <Link href="/" className="logo navbar-brand">
                                            <img src="assets/images/paypers-logo.png" alt="Paypers" className="logo_default" />
                                            <img src="assets/images/paypers-logo.png" alt="Paypers" className="logo__sticky" />
                                        </Link>
                                    </div>
                                    <div className="phone_box">
                                        <i className="fa fa-whatsapp" />
                                        <div className="text">
                                            <small>WhatsApp</small>
                                            <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer">(00) 00000-0000</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-3 col-sm-3 col-xs-3 menu_column">
                                <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                                <div className="header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu">
                                            <Navbar />
                                        </div>
                                    </div>
                                    <div className="header_right_content">
                                        <ul>
                                            <li>
                                                <button type="button" className="contact-toggler" onClick={handleContactPopup}><i className="icon-setup-dots" /></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end of the loop */}
            </div>
        </>
    )
}
