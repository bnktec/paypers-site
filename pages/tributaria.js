import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from 'next/head'

export default function Tributaria() {
    return (
        <>
            <Head>
                <title>Paypers - Transação Tributária</title>
            </Head>

            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Transação Tributária">
                {/*-about-*/}
                <section className="about-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="about_content position-relative z_99">
                                    <div className="title_all_box style_one text-left dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Transação Tributária</div>
                                            <h2>O que é Transação Tributária?</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>A transação tributária é um instrumento legal que permite a negociação de débitos fiscais com condições diferenciadas. Através de programas governamentais, empresas podem reestruturar seus passivos com redução de multas, juros e parcelamentos estratégicos.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="title_all_box style_one text-left dark_color">
                                        <div className="title_sections">
                                            <h2>Para quem é?</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Empresários e empresas com débitos fiscais que enfrentam execução fiscal, bloqueios, restrições e insegurança jurídica. Se você busca redução de dívida, regularização e estruturação inteligente de negociação, a Paypers pode ajudar.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_25" />
                                    {/*===============spacing==============*/}
                                    <div className="theme_btn_all color_one">
                                        <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn five">Falar com um Especialista<i className="icon-right-arrow" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="image_boxes style_two">
                                    <img src="/assets/images/shape-1.png" className="background_image" alt="image" />
                                    <div className="image one">
                                        <img src="/assets/images/boneco_paypers01.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="image two">
                                        <img src="/assets/images/cell01.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="authour_quotes">
                                        <i className="icon-quote" />
                                        <h6>Atuação técnica fundamentada na legislação vigente e análise individualizada de cada caso</h6>
                                        <p>/ Paypers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_70" />
                    {/*===============spacing==============*/}
                </section>
                {/*-about end-*/}

                {/*-benefits-*/}
                <section className="service-section-two bg_light_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container pd_zero">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">Benefícios</div>
                                        <h2>Vantagens da Transação Tributária</h2>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="row gutter_15px">
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-dollar"><i /></span>
                                            <small className="nom">01</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Redução de multas e juros</Link></h2>
                                            <p>Descontos significativos através de programas de transação.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-pharmacy"><i /></span>
                                            <small className="nom">02</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Parcelamentos estratégicos</Link></h2>
                                            <p>Condições diferenciadas adequadas à realidade da empresa.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-service"><i /></span>
                                            <small className="nom">03</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Previsibilidade financeira</Link></h2>
                                            <p>Planejamento claro com parcelas e prazos definidos.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-dollar"><i /></span>
                                            <small className="nom">04</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Adequação ao fluxo de caixa</Link></h2>
                                            <p>Negociação modelada conforme capacidade de pagamento.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                </section>
                {/*-benefits end-*/}

                {/*-process-*/}
                <section className="process-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">Estrutura Estratégica</div>
                                        <h2>Como Conduzimos sua Transação</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_25" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="process_box style_four dark_color">
                                    <div className="process_box_outer_four">
                                        <div className="icon">
                                            <img src="/assets/images/service-ico-3.png" className="img-fluid svg_image" alt="icon png" />
                                            <h6> 01</h6>
                                        </div>
                                        <div className="content_box">
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Diagnóstico fiscal</Link></h2>
                                            <p>Levantamento completo do passivo tributário.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="process_box style_four dark_color">
                                    <div className="process_box_outer_four">
                                        <div className="icon">
                                            <img src="/assets/images/process-icon-im-1.png" className="img-fluid svg_image" alt="icon png" />
                                            <h6>02</h6>
                                        </div>
                                        <div className="content_box">
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Estudo de enquadramento</Link></h2>
                                            <p>Análise de programas e benefícios disponíveis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="process_box style_four dark_color">
                                    <div className="process_box_outer_four">
                                        <div className="icon">
                                            <img src="/assets/images/service-ico-2.png" className="img-fluid svg_image" alt="icon png" />
                                            <h6> 03</h6>
                                        </div>
                                        <div className="content_box">
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Estratégia de negociação</Link></h2>
                                            <p>Modelagem da melhor proposta para sua empresa.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_35" />
                                {/*===============spacing==============*/}
                                <div className="process_box style_four dark_color">
                                    <div className="process_box_outer_four">
                                        <div className="icon">
                                            <img src="/assets/images/process-icon-im-2.png" className="img-fluid svg_image" alt="icon png" />
                                            <h6> 04</h6>
                                        </div>
                                        <div className="content_box">
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Formalização do acordo</Link></h2>
                                            <p>Assinatura e acompanhamento do acordo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_60" />
                    {/*===============spacing==============*/}
                </section>
                {/*-process end-*/}

                {/*-cta-*/}
                <section className="call-to-action bg_op_1" style={{ backgroundImage: 'url(/assets/images/cal-to-action.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-12">
                                <div className="title_all_box style_one dark_color light_color">
                                    <div className="title_sections">
                                        <div className="before_title">Precisa regularizar débitos fiscais?</div>
                                        <h2>Fale agora com nosso time e receba um diagnóstico gratuito</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="theme_btn_all color_one">
                                    <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn three">
                                        Falar com um Especialista<i className="icon-right-arrow-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_80" />
                    {/*===============spacing==============*/}
                </section>
                {/*-cta end-*/}
            </Layout>
        </>
    )
}
