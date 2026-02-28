import Link from "next/link"
export default function Service4() {
    return (
        <>
            <section className="service-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_two text-center dark_color">
                                <div className="title_sections two">
                                    <div className="before_title"> Soluções Estruturadas</div>
                                    <h2>Soluções Estruturadas para Alta Performance Financeira</h2>
                                    <p>Atuamos na estruturação, intermediação e aquisição de precatórios, além da construção de estratégias em transação tributária. Nosso foco é unir inteligência jurídica e eficiência financeira para gerar liquidez, redução de passivos e oportunidades de investimento seguras.</p>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="mr_bottom_10" />
                        {/*===============spacing==============*/}
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_post style_one">
                                <div className="image">
                                    <div className="overlay" />
                                    <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-2.png" alt="img" />
                                </div>
                                <div className="service_content icon_yes">
                                    <div className="icon_box">
                                        <span className="icon icon-thumbs-up icon" />
                                    </div>
                                    <h2 className="title_service"><Link href="/precatorios">Venda de Precatórios</Link></h2>
                                    <p className="short_desc">Antecipe valores judiciais com segurança e previsibilidade</p>
                                    <Link className="read_more" href="/precatorios"> Saiba mais<i className="icon-right-arrow-long" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_post style_one">
                                <div className="image">
                                    <div className="overlay" />
                                    <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-3.png" alt="img" />
                                </div>
                                <div className="service_content icon_yes">
                                    <div className="icon_box">
                                        <span className="icon icon-thumbs-up icon" />
                                    </div>
                                    <h2 className="title_service"><Link href="/tributaria">Transação Tributária</Link></h2>
                                    <p className="short_desc">Negocie débitos fiscais com estratégia e redução real</p>
                                    <Link className="read_more" href="/tributaria"> Saiba mais<i className="icon-right-arrow-long" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="service_post style_one">
                                <div className="image">
                                    <div className="overlay" />
                                    <img loading="lazy" width={500} height={500} src="/assets/images/service/service-image-5.jpg" alt="img" />
                                </div>
                                <div className="service_content icon_yes">
                                    <div className="icon_box">
                                        <span className="icon icon-thumbs-up icon" />
                                    </div>
                                    <h2 className="title_service"><Link href="/investimentos">Plataforma para Investidores</Link></h2>
                                    <p className="short_desc">Acesso estruturado a operações com lastro jurídico</p>
                                    <Link className="read_more" href="/investimentos"> Saiba mais<i className="icon-right-arrow-long" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
