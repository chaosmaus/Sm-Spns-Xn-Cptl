





$(document).ready(() => {

    //let state = ['2a','2b', '3a', '3b', '3c', '3d', '3e', '4a', '4b', '4c', '5', '6a', '6b', '7]
    let state = 0;
    let timer;
    let inputsFilled = false;



    states =
        [
            {
                rightPanelV2: false,

                rightPanel: true,
                backButton: false,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Contact Info',
                headerDescription: 'We need the following information to store your results',

            },
            {
                rightPanelV2: false,

                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Contact Info',
                headerDescription: 'We need the following information to store your results',

            }, {
                rightPanelV2: false,

                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Employees',
                headerDescription: 'We need the following information to store your results',

            }, {
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Payroll',
                headerDescription: 'Fill out the below info for each employee on your payroll',

            }, {
                rightPanelV2: false,

                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',//
                },
                headerHeading: 'Exposure',
                headerDescription: 'We need the following information to store your results',

            }, {
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Exposure',
                headerDescription: 'We need the following information to store your results',

            }, {
                rightPanelV2: false,

                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Upload Your Financial Statements',
                headerDescription: 'Provide most recent financial statements',

            }, {
                rightPanelV2: true,

                backButton: true,
                rightPanel: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Operations and risk',
                headerDescription: 'We need the following information to store your results',

            }, {
                rightPanelV2: true,
                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Licensing and Regulation',
                headerDescription: 'We need the following information to store your results',

            }, {
                rightPanelV2: true,

                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Current Insurance Coverage',
                headerDescription: 'We need the following information to store your results',

            }, {
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Loss History',
                headerDescription: 'Provide information about historical loss not covered by traditional insurance policies',

            }, {
                rightPanelV2: false,
                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Risks',
                headerDescription: 'Select the risks that apply to your business',

            }, {
                rightPanelV2: false,
                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Risks',
                headerDescription: 'Drag the slider to set potential impact as % of annual revenue',

            }, {
                rightPanelV2: false,
                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '$10.1 B',
                    headerDescription: 'The amount saved since 2017 by compannies using captives',
                },
                headerHeading: 'Congratulations!You finished the survey.',
                headerDescription: `If you'd like to make any changes, please do so before submitting.`,

            },{
                rightPanelV2: false,
                rightPanel: false,
                backButton: false,
                rightPanelContent: {
                    headerHeading: '$10.1 B',
                    headerDescription: 'The amount saved since 2017 by compannies using captives',
                },
                headerHeading: 'Thank you, we received your submission.',
                headerDescription: `Thank you, we received your submission.`,

            },


        ]


    let rightPanelHeading = $('.s-info-panel--heading');
    let rightPanelDescription = $('.s-info-panel--description');

    let surveyHeading = $('.s-heading');
    let surveyDescription = $('.s-description');


    // Buttons Listeners


    let circleClassReset = () => {
        $('.circle--info-card--wrapper').css('display', 'none')
        $('.s-progress-bar--circle--small').removeClass('active--filled active--filled--radius');
        $('.s-progress-bar--circle--large').removeClass('active--filled active--filled--info--radius active--filled--info');

    }


    let progressBarHandler = (currentState) => {
        console.log(currentState)
        if (currentState === 0) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled--info--radius');
            $('#circle--2a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 1) {
            circleClassReset();
            $('#circle--2b').addClass('active--filled--radius');
            $('#circle--2a').addClass('active--filled--info');
            $('#circle--2a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 2) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 3) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 4) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 5) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 6) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 7) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled--info--radius');
            $('#circle--4a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 8) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled--radius');
            $('#circle--4a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 9) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled--radius');
            $('#circle--4a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 10) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5').addClass('active--filled--info--radius');
            $('#circle--5').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 11) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5').addClass('active--filled');
            $('#circle--6a').addClass('active--filled--info--radius');
            $('#circle--6a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 12) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5').addClass('active--filled');
            $('#circle--6a').addClass('active--filled');
            $('#circle--6b').addClass('active--filled--radius');
            $('#circle--6a').find('.circle--info-card--wrapper').css('display', 'flex')
        }

    }

    $('.s-button--submit').on('click', (e) => {
        state === 14

        
            // copy for Right Panel
            rightPanelHeading.text(states[state].rightPanelContent.headerHeading)
            rightPanelDescription.text(states[state].rightPanelContent.headerDescription)

            // copy for Survey heading
            surveyHeading.text(states[state].headerHeading)
            surveyDescription.text(states[state].headerDescription)

            //right panel alternate version
            
            if (states[state].rightPanelV2 === true) {
                if (!($('.s-info-panel--content-wrapper').hasClass('hidden'))) $('.s-info-panel--content-wrapper').addClass('hidden');
                if (!($('.s-column--right').hasClass('v--2'))) $('.s-column--right').addClass('v--2');
                $('.s-info-panel--content-wrapper--alternate').removeClass('hidden');
            } else {
                if (!($('.s-info-panel--content-wrapper--alternate').hasClass('hidden'))) $('.s-info-panel--content-wrapper--alternate').addClass('hidden');
                $('.s-info-panel--content-wrapper').removeClass('hidden');
                $('.s-column--right').removeClass('v--2');
            }

            // visibility for Right Panel
            if (states[state].rightPanel === false) {
                if (!($('.s-column--right').hasClass('hidden'))) $('.s-column--right').addClass('hidden');
            } else {
                $('.s-column--right').removeClass('hidden');
            }

            // visibility for Right Panel
            if (states[state].backButton === false) {
                if (!($('.s-button.back').hasClass('hidden'))) $('.s-button.back').addClass('hidden');
            } else {
                $('.s-button.back').removeClass('hidden');
            }
            // progress bar handler
            progressBarHandler(state)

            //esconder o input wrapper anterior
            $('.input-wrapper').eq(state - 1).addClass('hidden')
            //mostrar o input wrapper next
            $('.input-wrapper').eq(state).removeClass('hidden')
    });

    $('.s-button').on('click', (e) => {

  

        let clickedButton = $(e.target).closest('.s-button');

        if (clickedButton.hasClass('next')) {
            if (!(clickedButton.hasClass('active'))) return;

            if (inputsFilled === false) return;


            

            state++;


            if(state === 13){
                $('.s-button.next').hide();
                $('.s-button--submit').removeClass('hidden');
            }
            //inputsFilled = false;

            // copy for Right Panel
            rightPanelHeading.text(states[state].rightPanelContent.headerHeading)
            rightPanelDescription.text(states[state].rightPanelContent.headerDescription)

            // copy for Survey heading
            surveyHeading.text(states[state].headerHeading)
            surveyDescription.text(states[state].headerDescription)

            //right panel alternate version
            
            if (states[state].rightPanelV2 === true) {
                if (!($('.s-info-panel--content-wrapper').hasClass('hidden'))) $('.s-info-panel--content-wrapper').addClass('hidden');
                if (!($('.s-column--right').hasClass('v--2'))) $('.s-column--right').addClass('v--2');
                $('.s-info-panel--content-wrapper--alternate').removeClass('hidden');
            } else {
                if (!($('.s-info-panel--content-wrapper--alternate').hasClass('hidden'))) $('.s-info-panel--content-wrapper--alternate').addClass('hidden');
                $('.s-info-panel--content-wrapper').removeClass('hidden');
                $('.s-column--right').removeClass('v--2');
            }

            // visibility for Right Panel
            if (states[state].rightPanel === false) {
                if (!($('.s-column--right').hasClass('hidden'))) $('.s-column--right').addClass('hidden');
            } else {
                $('.s-column--right').removeClass('hidden');
            }

            // visibility for Right Panel
            if (states[state].backButton === false) {
                if (!($('.s-button.back').hasClass('hidden'))) $('.s-button.back').addClass('hidden');
            } else {
                $('.s-button.back').removeClass('hidden');
            }
            // progress bar handler
            progressBarHandler(state)

            //esconder o input wrapper anterior
            $('.input-wrapper').eq(state - 1).addClass('hidden')
            //mostrar o input wrapper next
            $('.input-wrapper').eq(state).removeClass('hidden')
        } else if (clickedButton.hasClass('back')) {

            if(state === 13){
                $('.s-button.next').show();
                if (!($('.s-button--submit').hasClass('hidden'))) $('.s-button--submit').addClass('hidden');
            }


            state--;
            inputsFilled = true;


            if (states[state].rightPanelV2 === true) {
                if (!($('.s-info-panel--content-wrapper').hasClass('hidden'))) $('.s-info-panel--content-wrapper').addClass('hidden');
                if (!($('.s-column--right').hasClass('v--2'))) $('.s-column--right').addClass('v--2');
                $('.s-info-panel--content-wrapper--alternate').removeClass('hidden');
            } else {
                if (!($('.s-info-panel--content-wrapper--alternate').hasClass('hidden'))) $('.s-info-panel--content-wrapper--alternate').addClass('hidden');
                $('.s-info-panel--content-wrapper').removeClass('hidden');
                $('.s-column--right').removeClass('v--2');
            }


            // copy for Right Panel
            rightPanelHeading.text(states[state].rightPanelContent.headerHeading)
            rightPanelDescription.text(states[state].rightPanelContent.headerDescription)

            // copy for Survey heading
            surveyHeading.text(states[state].headerHeading)
            surveyDescription.text(states[state].headerDescription)

            // visibility for Right Panel
            if (states[state].rightPanel === false) {
                if (!($('.s-column--right').hasClass('hidden'))) $('.s-column--right').addClass('hidden');
            } else {
                $('.s-column--right').removeClass('hidden');
            }

            // visibility for Right Panel
            if (states[state].backButton === false) {
                if (!($('.s-button.back').hasClass('hidden'))) $('.s-button.back').addClass('hidden');
            } else {
                $('.s-button.back').removeClass('hidden');
            }
            // progress bar handler
            progressBarHandler(state)

            //esconder o input wrapper anterior
            $('.input-wrapper').eq(state + 1).addClass('hidden')
            //mostrar o input wrapper next
            $('.input-wrapper').eq(state).removeClass('hidden')

        }






    })



    // Run every time the user types something in the form
    let checkInputsFilled = () => {
        console.log('checkInputsFilled called');
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);

        if (name && email && phone) {
            console.log(`filled`);
        } else {
            $('.error-bubble').removeClass('hidden');
            $('.error-bubble--message').text(`Empty field(s)`);
            $('.s-button.next').removeClass('active');
        }
    };

    $('#name, #email, #phone').on('input', function () {
        console.log('Input event fired');

        if (!($('.error-bubble').hasClass('hidden'))) $('.error-bubble').addClass('hidden');

        checkInputsFilled();

        // Clear the existing timer if it exists
        clearTimeout(timer);

        // Start a new timer that runs your function after 500ms
        timer = setTimeout(function () {
            let email = $('#email').val(); // Define email here to access it
            let isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

            if (isEmailValid) {
                // Continue with form submission or whatever action you want
                inputsFilled = true;
                if (!($('.s-button.next').hasClass('hidden'))) $('.s-button.next').addClass('active');
            } else {
                // Show error messages
                if (!isEmailValid) {
                    $('.error-bubble').removeClass('hidden');
                    $('.error-bubble--message').text(`Invalid format: Email`);
                    $('.s-button.next').removeClass('active');
                }
            }
        }, 500);  // 500ms delay; adjust as needed
    });

    let employeeListHandler = () => {

        let index = 1; // Start with 1 because 0 already exists in the HTML

        // Add another employee
        $('.s-new-input-field').click(function () {
            // Clone the first .s-field--row--wrapper
            const newRow = $('.input-wrapper.block--4').find('.s-field--row--wrapper').eq(0).clone();

            // Update the ID, name, and data-name attributes
            newRow.find('[id], [name], [data-name]').each(function () {
                const elem = $(this);
                elem.attr({
                    'id': elem.attr('id').replace('-0', `-${index}`),
                    'name': elem.attr('name').replace('-0', `-${index}`),
                    'data-name': elem.attr('data-name').replace('-0', `-${index}`)
                });
            });

            // Append the new row right after the last .s-field--row--wrapper
            newRow.insertAfter('.input-wrapper.block--4 .s-field--row--wrapper:last');

            // Increment the index for the next addition
            index++;
        });

        // Delete an employee (use event delegation)
        $('.input-wrapper').on('click', '.s-row--delete', function () {
            // Remove the closest .s-field--row--wrapper
            $(this).closest('.s-field--row--wrapper').remove();
        });
    }



    let dropdownHandler = () => {
        // ... your existing code ...

        // Show the dropdown list when clicking on .s-field--dropdown
        $('.input-wrapper').on('click', '.s-field--dropdown', function (event) {
            event.stopPropagation();
            const dropdownList = $(event.currentTarget).find('.s-field--dropdown--list');
            dropdownList.show();
            dropdownList.css('opacity', '100%');
        });

        // Hide the dropdown list when clicking anywhere else on the screen
        $(document).on('click', function () {
            const dropdownLists = $('.s-field--dropdown--list');

            dropdownLists.css('opacity', '0%');
            dropdownLists.hide();
        });

        // Update the text value when clicking on an option
        $('.input-wrapper').on('click', '.s-field--dropdown--option', function (event) {
            event.stopPropagation();
            const selectedText = $(event.currentTarget).text();
            const dropdownPlaceholder = $(event.currentTarget).closest('.s-field--dropdown').find('.s-field--dropdown--placeholder');
            dropdownPlaceholder.text(selectedText);
            const realInput = $(event.currentTarget).closest('.s-field--dropdown').siblings('.s-dropdown--input--value')
            realInput.val(selectedText);

            const currentDropdownList = $(event.currentTarget).closest('.s-field--dropdown--list');
            currentDropdownList.css('opacity', '0%');
            currentDropdownList.hide();
        });

    }

    function manageDynamicRows() {
        // Function to create new rows based on a template
        // Initially hide the elements
        $('.s-field--row--wrapper--customer, .s-field--row--wrapper--supplier').hide();


        function createNewRows(templateClass, targetClass, count, container) {
            const existingRows = $(targetClass, container).length;
            let index = existingRows;

            // Remove extra rows if needed, but always leave at least one row
            if (existingRows > count && count > 0) {
                for (let i = count; i < existingRows; i++) {
                    $(`${targetClass}:last`, container).remove();
                }
            } else if (count <= 0 && existingRows > 1) {
                for (let i = 1; i < existingRows; i++) {
                    $(`${targetClass}:last`, container).remove();
                }
            }

            // Add new rows if needed
            for (let i = existingRows; i < count; i++) {
                const newRow = $(templateClass, container).eq(0).clone();

                newRow.find('[id], [name], [data-name]').each(function () {
                    const elem = $(this);
                    const newId = elem.attr('id').replace('--0', `--${index}`);
                    const newName = elem.attr('name').replace('--0', `--${index}`);
                    const newDataName = elem.attr('data-name').replace('--0', `--${index}`);

                    elem.attr({
                        'id': newId,
                        'name': newName,
                        'data-name': newDataName
                    });
                });

                newRow.insertAfter(`${targetClass}:last`, container);
                index++;
            }
        }

        // Listen for changes to #customersResponsible
        $('#customersResponsible').on('input', function (event) {
            const count = $(event.target).val();
            if (count > 0) {
                $('.s-field--row--wrapper--customer').show();
            } else {
                $('.s-field--row--wrapper--customer').hide();
            }
            createNewRows('.s-field--row--wrapper--customer', '.s-field--row--wrapper--customer', count, '.basic-wrapper.margin-bottom--40px');
        });

        // Listen for changes to #SupplierResponsible
        $('#SupplierResponsible').on('input', function (event) {
            const count = $(event.target).val();
            if (count > 0) {
                $('.s-field--row--wrapper--supplier').show();
            } else {
                $('.s-field--row--wrapper--supplier').hide();
            }
            createNewRows('.s-field--row--wrapper--supplier', '.s-field--row--wrapper--supplier', count, '.basic-wrapper.margin-bottom--40px');
        });
    }

    manageDynamicRows();
    dropdownHandler();
    employeeListHandler();


    // 1. flow handler
    // 2. pass information from special inputs to form inputs
    // 3. Dynamic Inputs (add inputs)
    // 4. Precentage Sliders Handler


})




