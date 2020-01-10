(function() {

    const body = document.getElementById('body');

    window.addEventListener('load', () => {

        body.classList.add('visible');

    });

    const forms = Array.from(document.querySelectorAll('.app-form'));

    forms.map((form, i) => {

        const index = i + 1;

        const inputElements = Array.from(document.querySelectorAll('.app-input-' + index));
        const resultElement = document.getElementById('app-result-' + index);
        const resetButton   = document.getElementById('app-button-reset-' + index);

        form.addEventListener('submit', (e) => {

            e.preventDefault();

            let values = [];
            let result = null;

            inputElements.map((input) => {

                if (input.value !== '') {
                    values.push(input.value);
                }

            });

            if (values.length < 2) {
                return;
            }

            result = calculate(values[0], values[1], index);

            resultElement.innerHTML = result;

            navigator.clipboard.writeText(result);

        });

        resetButton.addEventListener('click', () => {

            inputElements.map((input) => {
                input.value = '';
            });

            resultElement.innerHTML = '';

        });

    });

    window.addEventListener('keyup', (e) => {

        if (e.key === 'Escape') {
            resetAll();
        }

    });

    const calculate = (n_1, n_2, index) => {

        let result = 0;

        if (index === 1) {
            result = n_1 * n_2 / 100;
        }

        if (index === 2) {
            result = n_1 / n_2 * 100;
        }

        return result.toFixed(2).replace('.00', '');

    };

    const resetAll = () => {

        const inputElements = Array.from(document.querySelectorAll('input'));

        inputElements.map((input) => {
            input.value = '';
        });

        Array.from(document.querySelectorAll('.app-result')).map((el) => {
            el.innerHTML = '';
        });

        inputElements[0].focus();

    };

}());
