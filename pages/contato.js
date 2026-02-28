import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from 'next/head'

export default function Contato() {
    return (
        <>
            <Head>
                <title>Paypers - Contato</title>
            </Head>

            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Contato">
                <div>
                    <section className="contact-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                                    <div className="contact_form_box_all type_one">
                                        <div className="contact_form_box_inner">
                                            <div className="contact_form_shortcode">
                                                <form id="contact-form">
                                                    <div className="messages" />
                                                    <div className="controls">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label>Nome<br /></label>
                                                                    <input type="text" name="name" placeholder="Seu nome *" required="required" data-error="Informe seu nome" />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label>E-mail<br /></label>
                                                                    <input type="email" name="email" required="required" placeholder="Seu e-mail *" data-error="Informe seu e-mail" />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label>WhatsApp<br /></label>
                                                                    <input type="text" name="whatsapp" placeholder="Seu WhatsApp (opcional)" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label>Assunto<br /></label>
                                                                    <input type="text" name="subject" required="required" placeholder="Assunto *" data-error="Informe o assunto" />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label>Mensagem<br /></label>
                                                                    <textarea name="message" placeholder="Sua mensagem..." rows={3} required="required" data-error="Escreva sua mensagem" defaultValue={""} />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group mg_top apbtn">
                                                                    <button className="theme_btn" type="submit">Enviar Mensagem</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pd_left_30">
                                    <div className="title_all_box style_one dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">Contato</div>
                                            <h2>Fale com Nosso Time</h2>
                                            <p>Envie sua mensagem ou fale diretamente pelo WhatsApp. Nosso time retornará com orientação personalizada.</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="theme_btn_all color_one">
                                        <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn five">Conversar no WhatsApp<i className="icon-right-arrow" /></Link>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_40" />
                                    {/*===============spacing==============*/}
                                    <div className="social_media_v_one style_two">
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
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                    </section>

                    <section className="contact-map-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <section className="map-section">
                                        {/*Map Outer*/}
                                        <div className="map-outer">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                    </section>
                </div>

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
                                        <div className="before_title">Pronto para estruturar sua operação?</div>
                                        <h2>Fale agora com nosso time especializado</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="theme_btn_all color_one">
                                    <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn three">
                                        Iniciar Conversa no WhatsApp<i className="icon-right-arrow-long" />
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
