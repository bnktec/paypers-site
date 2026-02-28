import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from 'next/head'

export default function Precatorios() {
    return (
        <>
            <Head>
                <title>Paypers - Venda de Precatórios</title>
            </Head>

            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Venda de Precatórios">
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
                                            <div className="before_title">Precatórios</div>
                                            <h2>Venda seu Precatório com Segurança e Agilidade</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>A Paypers atua na intermediação e aquisição de precatórios federais, estaduais e municipais.
                                            Nossa equipe realiza análise técnica completa, avaliação jurídica e financeira,
                                            garantindo transparência e segurança em todas as etapas da operação.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_25" />
                                    {/*===============spacing==============*/}
                                    <div className="row gutter_15px">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all style_two">
                                                <div className="icon_content icon_imgs">
                                                    <div className="icon">
                                                        <img src="/assets/images/icon-img-n-1.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Avaliação Gratuita</Link></h3>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all style_two">
                                                <div className="icon_content icon_imgs">
                                                    <div className="icon">
                                                        <img src="/assets/images/icon-img-n-2.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Pagamento Rápido</Link></h3>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme_btn_all color_one">
                                        <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn five">Falar com um Especialista<i className="icon-right-arrow" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="image_boxes style_two">
                                    <img src="/assets/images/shape-1.png" className="background_image" alt="image" />
                                    <div className="image one">
                                        <img src="/assets/images/about/about-6.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="image two">
                                        <img src="/assets/images/about/about-7.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="authour_quotes">
                                        <i className="icon-quote" />
                                        <h6>Transforme seu precatório em liquidez imediata</h6>
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
                                        <div className="before_title">Como Funciona</div>
                                        <h2>Processo de Venda de Precatórios</h2>
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
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Envio da Documentação</Link></h2>
                                            <p>Você nos envia os documentos do precatório para análise.</p>
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
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Análise Jurídica</Link></h2>
                                            <p>Nossa equipe realiza avaliação completa do crédito judicial.</p>
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
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Proposta Formal</Link></h2>
                                            <p>Enviamos proposta personalizada com condições claras.</p>
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
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Assinatura e Pagamento</Link></h2>
                                            <p>Formalização do contrato e pagamento ágil.</p>
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

                {/*-types-*/}
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
                                        <h2>Transforme seu Precatório em Liquidez Imediata</h2>
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
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Liquidez Imediata</Link></h2>
                                            <p>Transforme seu crédito judicial em capital disponível rapidamente.</p>
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
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Eliminação de incerteza de prazo</Link></h2>
                                            <p>Sem depender de cronogramas do governo para receber.</p>
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
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Processo estruturado</Link></h2>
                                            <p>Cada etapa documentada e transparente do início ao fim.</p>
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
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Segurança contratual</Link></h2>
                                            <p>Formalização jurídica completa com respaldo técnico.</p>
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
                {/*-types end-*/}

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
                                        <div className="before_title">Quer vender seu precatório?</div>
                                        <h2>Fale agora com nosso time e receba uma avaliação gratuita</h2>
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
