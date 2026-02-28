import Link from "next/link"

export default function ModalPopup({ isContactPopup, handleContactPopup }) {
    return (
        <>
            <div className={`modal_popup one ${isContactPopup ? "contact-popup-visible" : ""}`}>
                <div className="modal-popup-inner">
                    <div className="close-modal" onClick={handleContactPopup}><i className="fa fa-times" /></div>
                    <div className="modal_box">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 form_inner">
                                <div className="form_content">
                                    <form className="contact-form">
                                        <p>
                                            <label> Seu nome<br />
                                                <input type="text" name="name" size={40} aria-required="true" aria-invalid="false" placeholder="Digite seu nome" />
                                                <br />
                                                <i className="fa fa-user" /><br />
                                            </label>
                                        </p>
                                        <p><label> Seu e-mail<br />
                                            <input type="email" name="email" size={40} aria-required="true" aria-invalid="false" placeholder="Digite seu e-mail" />
                                            <br />
                                            <i className="fa fa-envelope" /><br />
                                        </label>
                                        </p>
                                        <p>
                                            <label> Assunto<br />
                                                <input type="text" name="subject" size={40} aria-required="true" aria-invalid="false" placeholder="Digite o assunto" />
                                                <br />
                                                <i className="fa fa-folder" /><br />
                                            </label>
                                        </p>
                                        <p>
                                            <label> Sua mensagem (opcional)<br />
                                                <textarea name="message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Digite sua mensagem" defaultValue={""} />
                                                <br />
                                                <i className="fa fa-comments" /><br />
                                            </label>
                                        </p>
                                        <p><input type="submit" defaultValue="Enviar" /></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 about_company_inner">
                                <div className="abt_content">
                                    <div className="logo">
                                        <img src="/assets/images/paypers-logo.png" alt="Paypers" className="company_logo_modal" />
                                    </div>
                                    <div className="text">
                                        <p> The great explorer of the truth, the master-builder of human happiness no one
                                            rejects
                                            dislikes avoids pleasure itself because it is pleasure but because know who do
                                            not those
                                            how to pursue pleasures rationally encounter consequences that are extremely
                                            painful
                                            desires to obtain.</p>
                                        <Link href="/about-us">Leia mais</Link>
                                    </div>
                                    <div className="copright">
                                        © {new Date().getFullYear()} Creote. All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
