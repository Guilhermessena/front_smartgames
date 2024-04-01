import React, { useState } from "react";

const FormCheckout = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let formIsValid = true;

        document.querySelectorAll("input[required]").forEach((input) => {
            if (!input.value) {
                formIsValid = false;

                input.classList.add("is-invalid");

                const feedback = input.nextElementSibling;
                if (feedback && feedback.classList.contains("invalid-feedback")) {
                    feedback.innerText = `${input.labels[0].innerText} é obrigatório`;
                }
            } else {
                input.classList.remove("is-invalid");

                const feedback = input.nextElementSibling;
                if (feedback && feedback.classList.contains("invalid-feedback")) {
                    feedback.innerText = "";
                }
            }
        });

        if (formIsValid) {
            setIsSubmitted(true);
        }
    };
    return (
        <div className="card-body">
            <form className="needs-validation" novalidate onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                            Primeiro nome
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder=""
                            required
                        />
                        <div className="invalid-feedback">
                            Primeiro nome válido é obrigatório
                        </div>
                    </div>

                    <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                            Último nome
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder=""
                            required
                        />
                        <div className="invalid-feedback">
                            Último nome válido é obrigatório
                        </div>
                    </div>

                    <div className="col-12 my-1">
                        <label for="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="voce@exemplo.com"
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor, insira um e-mail válido
                        </div>
                    </div>

                    <div className="col-12 my-1">
                        <label for="address" className="form-label">
                            Endereço
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Rua exemplo 123"
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor, insira um endereço válido.
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <h4 className="mb-3">Pagamento</h4>
                <div className="row gy-3">
                    <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                            Nome no cartão
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-name"
                            placeholder=""
                            required
                        />
                        <small className="text-muted">
                            Nome completo exibido no cartão de crédito
                        </small>
                        <div className="invalid-feedback">
                            Nome do cartão de crédito é obrigatório
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                            Número do cartão de crédito
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-number"
                            placeholder=""
                            required
                        />
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                            Expiração
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-expiration"
                            placeholder=""
                            required
                        />
                        <div className="invalid-feedback">
                            Data de expiração é obrigatória
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-cvv"
                            placeholder=""
                            required
                        />
                        <div className="invalid-feedback">
                            Código de segurança é obrigatório
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <button
                    className="w-100 btn btn-primary "
                    type="submit" disabled={isSubmitted}
                    
                >
                    Continue para finalizar
                </button>
            </form>
            {isSubmitted && (
                <div className="alert alert-success mt-3" role="alert">
                    O formulário foi enviado com sucesso!
                </div>
            )}
        </div>
    );
};

export default FormCheckout;

