import Link from "next/link"

export default function Newsteller2() {
    return (
        <>
            <section className="newsteller-section bg_dark_1">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="newsteller style_three">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="content">
                                    <h6>Conheça nossas Soluções</h6>
                                    <h2>Pronto para estruturar sua operação?</h2>
                                    <p>Fale agora com nosso time especializado</p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="theme_btn_all color_one">
                                    <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn three">
                                        Falar com um Especialista<i className="icon-right-arrow-long" />
                                    </Link>
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
