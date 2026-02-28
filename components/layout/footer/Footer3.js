
import Link from "next/link"

export default function Footer3({ }) {
    return (
        <>
            <div className="footer_area footer_three bg_dark_3" id="footer_contents">
                {/*===============spacing==============*/}
                <div className="pd_top_70" />
                {/*===============spacing==============*/}
                <div className="footer_widgets_wrap">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0">
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="#" target="_blank" >
                                                <img src="/assets/images/paypers-logo.png" alt="Paypers" style={{ filter: 'brightness(0) invert(1)' }} />
                                            </Link>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_30" />
                                            {/*===============spacing==============*/}
                                        </div>
                                        <div className="content_box">
                                            <p>Atuamos na estruturação, intermediação e aquisição de precatórios, além da
                                                construção de estratégias em transação tributária. Nosso foco é unir
                                                inteligência jurídica e eficiência financeira para gerar liquidez, redução de
                                                passivos e oportunidades de investimento seguras.</p>
                                            <div className="consulting">
                                                <div className="image">
                                                    <img src="assets/images/app-icon.png" alt="need help" />
                                                </div>
                                                <div className="help_con">
                                                    <h6>Conhecer as Soluções</h6>
                                                    <h2>
                                                        <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer">Falar com um Especialista</Link>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0">
                                <div className="footer_widgets wid_tit style_two">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_20" />
                                    {/*===============spacing==============*/}
                                    <div className="fo_wid_title">
                                        <h2>Informação</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li><Link href="/precatorios">Venda de Precatórios</Link></li>
                                                <li><Link href="/tributaria">Transação Tributária</Link></li>
                                                <li><Link href="/investimentos">Investidores</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 ms-auto">
                                <div className="footer_widgets wid_tit style_two">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li><Link href="/sobre">Sobre</Link></li>
                                                <li><Link href="#">Política de Privacidade</Link></li>
                                                <li><Link href="#">Termos &amp; Condições</Link></li>
                                                <li><Link href="/contato">Contatos</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="social_media_v_one">
                                    <ul>
                                        <li>
                                            <Link href="https://facebook.com/paypersoficial" target="_blank" rel="noopener noreferrer"> <span className="fa fa-facebook" />
                                                <small>facebook</small>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://instagram.com/paypersoficial" target="_blank" rel="noopener noreferrer"> <span className="fa fa-instagram" />
                                                <small>instagram</small>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_40" />
                {/*===============spacing==============*/}
                <div className="bg_dark_1 copyright">
                    {/*===============spacing==============*/}
                    <div className="pd_top_20" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="footer_copy_content color_white text-center">
                                    © {new Date().getFullYear()} Paypers Intermediacao de Negocios Ltda — CNPJ: 63.949.371/0001-34. O seu papel tem valor. Todos os direitos reservados.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_15" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
