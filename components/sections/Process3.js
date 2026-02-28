import Link from "next/link"
export default function Process3() {
    return (
        <>
            <section className="process-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Como trabalhamos</div>
                                    <h2>Processo Simples e Estruturado</h2>
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
                                <div className="process_box_outer_four ">
                                    <div className="icon">
                                        <img src="/assets/images/service-ico-3.png" className="img-fluid svg_image" alt="icon png" />
                                        <h6> 01</h6>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Análise Técnica</Link></h2>
                                        <p>Recebemos a documentação e realizamos avaliação jurídica e financeira.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_25" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_four dark_color">
                                <div className="process_box_outer_four ">
                                    <div className="icon">
                                        <img src="/assets/images/process-icon-im-1.png" className="img-fluid svg_image" alt="icon png" />
                                        <h6>02</h6>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Estruturação da Proposta</Link></h2>
                                        <p>Modelamos a operação conforme perfil e necessidade.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="process_box style_four dark_color">
                                <div className="process_box_outer_four ">
                                    <div className="icon">
                                        <img src="/assets/images/service-ico-2.png" className="img-fluid svg_image" alt="icon png" />
                                        <h6> 03</h6>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Formalização e Execução</Link></h2>
                                        <p>Contrato, cessão ou negociação estruturada.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_35" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_four dark_color">
                                <div className="process_box_outer_four ">
                                    <div className="icon">
                                        <img src="/assets/images/process-icon-im-2.png" className="img-fluid svg_image" alt="icon png" />
                                        <h6> 04</h6>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Acompanhamento</Link></h2>
                                        <p>Monitoramento e suporte até a conclusão.</p>
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

        </>
    )
}
