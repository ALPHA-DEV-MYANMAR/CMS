$("#loading").css({
    display: "none"
});

$("#content").css("opacity","1");
$(function() {

    var cleave = new Cleave('.card-number', {
        creditCard: true,
    });

    var cleave = new Cleave('.card-expiry', {
        date: true,
        delimiter: '/',
        datePattern: ['m', 'Y']
    });

    var cleave = new Cleave('.card-cvc', {
        numeral: true,
        numeralDecimalMark: '',
        delimiter: '',

    });
    $('.card-number').validateCreditCard(function(result) {

        if ($(".card-number").val().length > 0) {
            $("#cardnumber").addClass("is-invalid");
            $(".card-valid-lable").css("display", "block");
        }

        if (result.card_type != null) {

            $("#cardnumber").removeClass("is-invalid");
            $(".card-valid-lable").css("display", "none");


            var cardBrandToClass = {
                visa: "fab fa-cc-visa",
                mastercard: "fab fa-cc-mastercard",
                amex: "fab fa-cc-amex",
                discover: "fab fa-cc-discover",
                diners: "fab fa-cc-diners-club",
                jcb: "fab fa-cc-jcb",
                unknown: "unknown",
            };

            console.log(cardBrandToClass[result.card_type.name]);
            $("#cardIcons").html('<span class="input-group-text" id="basic-addon1" > <i class="' + cardBrandToClass[result.card_type.name] + '"></i></span>');

        }

        if (result.valid) {
            $(this).addClass('cc-valid');
        } else {
            $(this).removeClass('cc-valid');
        }
    });
});


$(function() {
    var $form = $(".require-validation");
    $('form.require-validation').bind('submit', function(e) {

        $("#loading").css({
            display: "block",
            top:"50%",
            left:"50%",
            marginTop: "-50px",
            marginLeft: "-50px",
            width: "100px",
            height: "100px",
            position:"absolute",
            zIndex: "9999",

        });

        $("#content").css("opacity","0.4");


        var expiry = $('.card-expiry').val();
        var expiry_array = expiry.split('/');

        var $form = $(".require-validation"),
            inputSelector = ['input[type=email]', 'input[type=password]',
                'input[type=text]', 'input[type=file]',
                'textarea'
            ].join(', '),
            $inputs = $form.find('.required').find(inputSelector),
            $errorMessage = $form.find('div.error'),
            valid = true;
        $errorMessage.addClass('hide');
        $('.has-error').removeClass('has-error');
        $inputs.each(function(i, el) {
            var $input = $(el);
            if ($input.val() === '') {
                $input.parent().addClass('has-error');
                $errorMessage.removeClass('hide');
                e.preventDefault();
            }
        });
        if (!$form.data('cc-on-file')) {
            e.preventDefault();
            Stripe.setPublishableKey($form.data('stripe-publishable-key'));

            Stripe.createToken({
                number: $('.card-number').val(),
                cvc: $('.card-cvc').val(),
                exp_month: expiry_array[0],
                exp_year: expiry_array[1]
            }, stripeResponseHandler);
        }
    });

    function stripeResponseHandler(status, response) {
        $("#loading").css({
            display: "none"

        });
        $("#content").css("opacity","1");
        if (response.error) {
            $('.error')
                .removeClass('hide')
                .find('.alert')
                .text(response.error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.error.message,
                  });
        } else {
            /* token contains id, last4, and card type */
            var token = response['id'];
            $form.find('input[type=text]').empty();
            $form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
            localStorage.setItem('stripe_token',token);
            $form.get(0).submit();
        }
    }
});