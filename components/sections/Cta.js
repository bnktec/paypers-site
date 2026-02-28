import Link from "next/link"
export default function Cta() {
    return (
        <>
            <section className="call-to-action">
                <div className="call_to_action style_one">
                    <div className="image">
                        <img src="/assets/images/cal-action-bg-2.jpg" className="img-fluid" alt="image" />
                    </div>
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="left_content">
                                    <div className="main_content">
                                        <h1>Experiência, Estrutura e Confiança</h1>
                                        <p>Operações conduzidas com rigor técnico, compliance e foco em previsibilidade jurídica. Atuamos com parceiros especializados e processos estruturados para garantir segurança em todas as etapas.</p>
                                        <div className="bottom_content">
                                            <div className="button_content">
                                                <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn three">
                                                    Fale com um Especialista<i className="icon-right-arrow-long" />
                                                </Link >
                                            </div>
                                            <div className="call_content">
                                                <span className="icon-phone-call1 icon" />
                                                <div className="content_bx">
                                                    <h2>Conheça a Solução</h2>
                                                    <p>contato@paypers.com.br &amp; +55 (00) 00000-0000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
