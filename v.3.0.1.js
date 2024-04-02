$(function () {
    let state = 0;
    let progressValue = '0%';
    let thirdPartyChecked = false;

    const progressController = () => {
        inputsController();
        $('.survey_start-button').on('click', () => {
            state = 1;
            updateProgress();
        });
        $('.next').on('click', () => {
            if (state < 12) {
                $('.input-wrapper.active').addClass('hidden')
                state++;
                updateProgress();
            }
        });
        $('.back').on('click', () => {
            if (state > 1) {
                $('.input-wrapper.active').addClass('hidden')
                state--;
                updateProgress();
            }
        });
        $('.s-progress--item').on('click', (e) => {
            $('.input-wrapper.active').addClass('hidden')
            let clickedButton = $(e.target);
            state = clickedButton.closest('.s-progress--item').index();
            updateProgress();

        });
    }

    const inputsController = () => {
        //state 3
        let debounceTimer;
        $('.interest--checkbox').on('click', (e) => {
            // Clear the timer if it's already set, preventing the previous click handler from executing
            clearTimeout(debounceTimer);
        
            // Set a new timer
            debounceTimer = setTimeout(() => {
                console.log('lol');
                let clickedCheckbox = $(e.target).closest('.interest--checkbox');
                if (!(clickedCheckbox.hasClass('active'))) {
                    clickedCheckbox.addClass('active');
                } else {
                    clickedCheckbox.removeClass('active');
                }
        
                let checkboxIcon = clickedCheckbox.find('.interest--icon');
                if (!(checkboxIcon.hasClass('active'))) {
                    checkboxIcon.addClass('active');
                } else {
                    checkboxIcon.removeClass('active');
                }
            }, 50); // Debounce delay of 200ms
        });
        

        $('.risk--type--checkbox').on('click', (e) => {
            let clickedCheckbox = $(e.target).closest('.risk--type--checkbox')
            if (clickedCheckbox.find('input').attr('id') === 'Both') { console.log('both clicked') } // MISSING: uncheck others + is being clicked twice
        });

        //state 10
        $('.button--download').on('click', (e) => {
            if ($('#Both').siblings('.w-checkbox-input').hasClass('w--redirected-checked')) {
                $('.button--download').attr('href', $('.download--third').attr('href'));
            }
            if ($('#Third-Party-Risk').siblings('.w-checkbox-input').hasClass('w--redirected-checked')) {
                $('.button--download').attr('href', $('.download--third').attr('href'));
            }
            if ($('#First-Party-Risk').siblings('.w-checkbox-input').hasClass('w--redirected-checked')) {
                $('.button--download').attr('href', $('.download--first').attr('href'));
            }
        });


    }

    //cmsController prologue
    $('.cms--survey--title').each((index, element) => {
        $('.s-progress--label').eq(index).text($(element).text())
    })
    const cmsController = () => {
        $('.s-heading').text($('.cms--survey--title').eq(state - 1).text())
        $('.s-description').text($('.cms--survey--description').eq(state - 1).text())
    }

    const stateConditionals = () => {
        // back button
        if (state > 1) $('.back').removeClass('hidden')
        if (state < 1 || state === 12) { $('.back').addClass('hidden') }
        if (state === 10) { $('.button--download').removeClass('hidden') }
        if (state !== 10) { if (!($('.button--download').hasClass('hidden'))) $('.button--download').addClass('hidden') }



    }

    const updateProgress = () => {
        //progress controller
        progressValue = `${(state / 12) * 100}%`;
        //table of contents controller
        $('.s-progress--item').children().removeClass('active')
        $('.s-progress--item').eq(state - 1).children().addClass('active')
        //special conditions
        stateConditionals()
        //control current block render
        $('.input-wrapper').removeClass('active')
        $('.input-wrapper').eq(state - 1).addClass('active')
        $('.input-wrapper.active').removeClass('hidden')
        //update header content
        cmsController()
        console.log(state)
    }

    progressController();

});
