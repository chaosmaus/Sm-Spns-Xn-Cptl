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

    /* Input Text Parser START */
    
    function formatNumberInput($input) {
        $input.on('input', function() {
            // Store the current cursor position
            var cursorPos = this.selectionStart;
    
            // Get the value without dollar sign, commas, and other non-numeric characters
            var value = $(this).val().replace(/[^0-9.]/g, '');
    
            // Count the number of non-numeric characters before the cursor position to adjust the cursor later
            var beforeCursor = $(this).val().substr(0, cursorPos);
            var nonNumericBeforeCursor = beforeCursor.replace(/[0-9.]/g, '').length;
    
            // Check if value is empty or not
            if (value) {
                // Format the number with commas
                var formattedValue = parseFloat(value).toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                    useGrouping: true
                });
                $(this).val(formattedValue);
            } else {
                // If value is empty or NaN, do nothing
            }
    
            // Count the number of non-numeric characters before the cursor position after formatting
            var afterCursor = $(this).val().substr(0, cursorPos + 1);
            var nonNumericAfterCursor = afterCursor.replace(/[0-9.]/g, '').length;
    
            // Calculate the new cursor position
            cursorPos += (nonNumericAfterCursor - nonNumericBeforeCursor);
    
            // Restore the cursor position at the end
            this.setSelectionRange(this.value.length, this.value.length);
        });
    }
    


    function formatPercentageInput($input) {
        $input.on('input', function () {
            // Store the current cursor position
            var cursorPos = this.selectionStart;

            // Get the value without the percentage sign and other non-numeric characters
            var value = $(this).val().replace(/[^0-9.]/g, '');

            // Count the number of commas before the cursor position to adjust the cursor later
            var beforeCursor = $(this).val().substr(0, cursorPos);
            var commasBeforeCursor = (beforeCursor.match(/,/g) || []).length;

            // Check if value is empty or not
            if (value) {
                // Format the number with commas
                var formattedValue = parseFloat(value).toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                    useGrouping: true
                });
                $(this).val(formattedValue + '%');  // Add percentage sign at the end
            } else {
                // If value is empty or NaN, keep the percentage sign
                $(this).val('%');
            }

            // Adjust the cursor position based on added/removed commas
            var afterCursor = $(this).val().substr(0, cursorPos);
            var newCommas = (afterCursor.match(/,/g) || []).length;
            cursorPos += (newCommas - commasBeforeCursor);

            // Restore the cursor position
            this.setSelectionRange(cursorPos, cursorPos);
        });
    }


    function formatDollarInput($input) {
        $input.on('input', function() {
            // Store the current cursor position
            var cursorPos = this.selectionStart;
    
            // Get the value without dollar sign, commas, and other non-numeric characters
            var value = $(this).val().replace(/[^0-9.]/g, '');
    
            // Count the number of non-numeric characters before the cursor position to adjust the cursor later
            var beforeCursor = $(this).val().substr(0, cursorPos);
            var nonNumericBeforeCursor = beforeCursor.replace(/[0-9.]/g, '').length;
    
            // Check if value is empty or not
            if (value) {
                // Format the number with commas
                var formattedValue = parseFloat(value).toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                    useGrouping: true
                });
                $(this).val('$' + formattedValue);
            } else {
                // If value is empty or NaN, keep the dollar sign
                $(this).val('$');
            }
    
            // Count the number of non-numeric characters before the cursor position after formatting
            var afterCursor = $(this).val().substr(0, cursorPos + 1);
            var nonNumericAfterCursor = afterCursor.replace(/[0-9.]/g, '').length;
    
            // Calculate the new cursor position
            cursorPos += (nonNumericAfterCursor - nonNumericBeforeCursor);
    
            // Restore the cursor position
            this.setSelectionRange(cursorPos, cursorPos);
        });
    }

    function formatDateInput($input) {
        $input.on('input', function() {
            var cursorPos = this.selectionStart;
            var value = $(this).val().replace(/[^0-9\/]/g, '');
            value = value.replace(/^(\d{2})\/?(\d{2})\/?(\d*)$/, "$1/$2/$3");
    
            var parts = value.split('/');
            if (parts.length > 2) {
                parts[2] = parts[2].substring(0, 2);
                value = parts.join('/');
            }
    
            $(this).val(value);
    
            var adjustCursorPos = value.substr(0, cursorPos).match(/\//g);
            adjustCursorPos = adjustCursorPos ? adjustCursorPos.length : 0;
            
            cursorPos += adjustCursorPos - (value.substr(0, cursorPos).length - cursorPos);
            this.setSelectionRange(cursorPos, cursorPos);
        });
    }
    
    
     /* Input Text Parser end */

    //cmsController prologue
    $('.cms--survey--title').each((index, element) => {
        $('.s-progress--label').eq(index).text($(element).text())
    })
    const cmsController = () => {
        $('.s-heading').text($('.cms--survey--title').eq(state - 1).text())
        $('.s-description').text($('.cms--survey--description').eq(state - 1).text())
    }

    /* SLIDER SYSTEM STARTS HERE */
    function sanitizeText(text) {
        return text
            .replace(/&/g, 'and')  // Replace & with 'and'
            .replace(/[^a-zA-Z0-9-_ ]/g, '')  // Remove any character that isn't a letter, number, hyphen, underscore, or space
            .trim()  // Remove any leading or trailing whitespace
            .replace(/\s+/g, '-');  // Replace spaces with hyphens
    }

    const sliderHandler = () => {
        $('.s-slider--progress--button').each(function (index, button) {
            var $sliderBlock = $(button).closest('.s-slider--block');
            var sliderText = $(button).closest('.slider--wrapper').find('.s-input--slider--text').text().replace(/\s+/g, '-');
            var $labelText = $(button).find('.s-slider--percentage--percentage--text')
            var $progressBar = $(button).siblings('.s-slider--progress')
            var $percentageInput = $(button).parent().siblings('.s-percentage--input');

            // Set initial position to 50% of the parent container's width
            var initialLeft = $sliderBlock.width() * 0;
            $(button).css('left', initialLeft);
            $progressBar.css('width', `${$(button).position().left}px`)

            // Set initial input value to 50%
            // $percentageInput.val(50);

            $(button).draggable({
                axis: 'x',
                containment: $sliderBlock,
                drag: function (event, ui) {
                    var totalWidth = $sliderBlock.width() - $(button).width();
                    var currentWidth = ui.position.left;
                    var percentage = Math.round((currentWidth / totalWidth) * 100);
                    if (percentage > 100) percentage = 100;
                    $labelText.text(percentage + '%')
                    //console.log($(button).position().left)
                    // Update the corresponding input value with the percentage
                    $percentageInput.val(percentage + '%');
                    $progressBar.css('width', `${$(button).position().left}px`)
                }
            });
        });


        $('.s-slider--progress--button').on('mousedown', (e) => {
            if (!($(e.target).hasClass('active'))) $(e.target).addClass('active')
            if (!($(e.target).find('.s-slider--percentage--percentage--text').hasClass('active'))) $(e.target).find('.s-slider--percentage--percentage--text').addClass('active')
            if (!($(e.target).siblings('.s-slider--progress').hasClass('active'))) $(e.target).siblings('.s-slider--progress').addClass('active')
        })

    }

    function processDynamicRisks() {
        console.log('show')
        $("#first-risk-block").show();
        var checkedRisks = [];

        $('.current--coverage--checkbox').each(function (index, element) {
            var checkbox = $(element).find('input[type="checkbox"]');
            var textElement = $(element).find('.current--coverage--checkbox--text');

            if (checkbox.is(':checked')) {
                checkedRisks.push(textElement.text());
            } else {

            }
        });

        // Create and append the slider elements for each checked risk
        $.each(checkedRisks, function (index, riskName) {
            var newSlider = createSliderElement(riskName);

            $('.risks--block').parent().append(newSlider);
        });

        sliderHandler();
    }


    let firstRisk = $("#first-risk-block");
    function createSliderElement(riskName) {

        var sanitized = sanitizeText(riskName);
        const riskBlock = firstRisk.clone(); // Assume you have a template

        // Update risk name
        riskBlock.find(".risk-block--label").eq(0).text(riskName);

        // Update checkbox attributes
        riskBlock.find(".risk-checkbox input").attr({
            "id": `${sanitized}-Covered`,
            "name": `${sanitized}-Covered`,
            "data-name": `${sanitized}-Covered`
        });

        // Update frequency slider and input attributes
        riskBlock.find("[id$='-Frequency']").attr({
            "id": `${sanitized}-Frequency`,
            "name": `${sanitized}-Frequency`,
            "data-name": `${sanitized}-Frequency`
        });

        // Update gravity slider and input attributes
        riskBlock.find("[id$='-Gravity']").attr({
            "id": `${sanitized}-Severity`,
            "name": `${sanitized}-Severity`,
            "data-name": `${sanitized}-Severity`
        });

        riskBlock.attr({
            "id": `${sanitized}-risk-block`,
        });

        return riskBlock;

    }
    /* SLIDER SYSTEM ENDS  HERE */

    /* Loss History Dynamic Blocks START */
    let lossBlockIndex = 1;

    $('body').on('click', '.loss--button', function () {    
        var newBlock = $('.s-loss--block').last().clone();
        lossBlockIndex++;

        newBlock.find('input').each(function () {
            var baseName = $(this).attr('name').replace(/-\d+$/, ''); 
            var newName = baseName + '-' + lossBlockIndex;
            $(this).attr({
                'id': newName,
                'name': newName,
                'data-name': newName.replace(/-/g, ' '), 
            });
            $(this).val('');
        });
        newBlock.appendTo('.s-loss--block--wrapper')
    });

    /* Loss History Dynamic Blocks END */


    const stateConditionals = () => {
        // back button
        if (state > 1) $('.back').removeClass('hidden')
        if (state < 1 || state === 12) { $('.back').addClass('hidden') }
        if (state === 7) {
            $('.risks--block').each((index, element) => {
                if (index > 0) $(element).remove();
            })
            processDynamicRisks()
            $("#first-risk-block").hide();
        }
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


    //init

    $('.s-form').on('input', 'input[type="text"]', function (event) {
        // Check if the target input has a certain class or other identifying feature if needed
        if ($(event.target).hasClass('dollar-input')) {
            formatDollarInput($(event.target));
        }

        if ($(event.target).hasClass('number-input')) {
            formatNumberInput($(event.target));
        }

        if ($(event.target).hasClass('percentage--input')) {
            formatPercentageInput($(event.target));
        }

        if ($(event.target).hasClass('date--input')) {
            formatDateInput($(event.target));
        }
    });

    progressController();

});
