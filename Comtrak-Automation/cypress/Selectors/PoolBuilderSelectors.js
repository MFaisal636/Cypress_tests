const PoolBuilderSelectors = {

    // Xpath Selectors
    TXT_PoolName: '//input[@id="poolName"]',
    PoolName: 'Auto-QA Test ' + Math.floor(Math.random() * 1000),
    TXT_Description: '//textarea[@id="poolDescription"]',
    Description: 'Test Description',
    BTN_Continue1: '(//button[text()=" Continue "])[1]',
    DRP_State: '//span[text()="Select State"]',
    STATE_Search: '(//input[@placeholder="Search"])[1]',
    STATE_NewYork: '//input[@aria-label="New York"]',
    STATE_NewJersey: '//input[@aria-label="New Jersey"]',
    DRP_Status: '//span[text()="Select Status"]',
    STATUS_Search: '(//input[@placeholder="Search"])[2]',
    STATUS_PreBooking: '//input[@aria-label="Pre Booking"]',
    MIN_AgeSlider: '//span[@aria-label="ngx-slider"]',
    MAX_AgeSlider: '//span[@aria-label="ngx-slider-max"]',
    BTN_Reset: '//button[text()=" Reset Criteria "]',
    BTN_Continue2: '(//button[text()=" Continue "])[1]',
    BTN_SaveDraft: '(//button[text()=" Save as draft "])[1]',
    
    // CSS Selectors
    TXT_PoolName: 'input[placeholder="Enter Pool Name"]',
    PoolName: 'Auto-QA Test ' + Math.floor(Math.random() * 1000),
    TXT_Description: '#poolDescription',
    Description: 'Test Description',
    BTN_Continue1: 'button[class="btn btn-primary"]',
    DRP_State: 'span.ng-star-inserted',
    DRP_Status: 'span.ng-star-inserted',
    MIN_AgeSlider: '.ngx-slider-pointer-min',
    MAX_AgeSlider: '.ngx-slider-pointer-max',
    BTN_Continue2: 'button[class="btn btn-primary btn-next"]',


}
export default PoolBuilderSelectors