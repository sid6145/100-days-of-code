const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Integer volutpat diam metus, non rutrum sem volutpat at. 
    Nunc ut pretium orci. Fusce pellentesque ante lobortis vehicula tristique. 
    Morbi eget placerat ligula. Ut congue orci ac purus venenatis, sed cursus nunc interdum. 
    Nunc justo dui, ultricies nec pulvinar vitae, tempus et ligula. 
    Sed laoreet purus ut odio blandit, et maximus arcu tristique. 
    Praesent tempor orci sit amet egestas condimentum.`,

    `Ut commodo facilisis ligula ac tempor. Proin vehicula, nisl vel dapibus bibendum, dui odio commodo lacus, ac facilisis lectus turpis eget quam. 
    Nulla venenatis placerat dui sed congue. Integer elementum sed nunc vel vulputate. 
    Integer ut nunc id erat volutpat rhoncus. 
    Phasellus sed urna sem. Maecenas tempor feugiat nulla, ac rutrum metus vehicula eget. 
    Praesent nunc leo, fringilla pellentesque lobortis non, ultricies quis tellus. 
    Nullam eu lectus sodales mauris fermentum maximus in sit amet purus. `,
    
    
    `Aliquam aliquet massa nibh, eu commodo ipsum dapibus a. 
    Pellentesque nulla eros, facilisis at eleifend nec, congue quis ante. 
    Phasellus neque nisi, rutrum ut ligula eu, hendrerit dictum sapien. 
    Donec posuere ultrices sem nec euismod. 
    Proin tincidunt, magna in vehicula varius, augue massa mollis ex, ut egestas ante mi vel orci. 
    Pellentesque eget diam pellentesque, fermentum tortor vitae, molestie nibh.`,

    `Nunc faucibus sapien ut lorem hendrerit, in lobortis ipsum fringilla. 
    Morbi venenatis tortor sed risus bibendum malesuada. Phasellus faucibus, justo a bibendum faucibus, est ipsum placerat lectus, id aliquet neque felis non quam. 
    Nam sed mauris felis. Cras vitae dui eget nisl consectetur porttitor. 
    Suspendisse sit amet gravida dolor, quis lobortis odio. Etiam vel odio mauris.`,

    `Donec risus ante, mattis ac risus sed, dapibus laoreet lorem. 
    Aenean nec fermentum velit. Donec ornare, dui vel venenatis faucibus, nunc mauris fringilla turpis, non elementum mi tortor in diam. Proin laoreet, felis sit amet tincidunt accumsan, elit justo maximus felis, eget euismod neque nisi a dui. 
    Phasellus vitae libero quis quam pulvinar auctor. Ut ac varius justo, vel dignissim augue. 
    Fusce imperdiet nibh velit, eu porttitor arcu convallis in. Maecenas dictum at magna ut vehicula.`,

    `Ut laoreet enim libero, et tempus magna consectetur quis. 
    Fusce tempus ut lectus auctor tincidunt. Nam ut diam nibh. Proin vel est mi. 
    Proin vulputate ex a eros ullamcorper, id luctus libero pretium. 
    Nullam blandit, tortor a cursus venenatis, mauris dolor commodo mauris, sed semper tortor mauris dignissim nisi. 
    Donec faucibus bibendum sapien et aliquet.`,

    `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Maecenas vulputate tempor posuere. Nam viverra finibus tortor, eget malesuada ante dapibus id. 
    Curabitur sodales mi quis auctor porta. Vivamus venenatis sollicitudin iaculis. 
    Vestibulum a egestas urna, vitae vestibulum neque. 
    Vestibulum at erat pretium mauris fringilla pulvinar id non risus. 
    Sed tristique id ante a accumsan.`,

    `Donec gravida vel leo vitae pretium. 
    In sodales, nunc eget pellentesque varius, justo mauris accumsan felis, quis dignissim velit ante ac quam. Pellentesque bibendum iaculis turpis eget auctor. 
    Morbi fringilla leo vitae nisl hendrerit, vitae hendrerit nunc tristique. 
    Nulla tortor massa, euismod dignissim lobortis vel, facilisis et diam. 
    Phasellus mollis purus orci, at aliquam magna maximus non. Ut ut dignissim nulla.`,

    `Phasellus et sapien euismod, consectetur justo maximus, tempus magna. 
    Nam laoreet non tortor nec condimentum. Vivamus venenatis ex fermentum odio auctor maximus. 
    Nunc rhoncus risus eu gravida iaculis. 
    Praesent dapibus lectus vel lacus eleifend, ac pulvinar lorem eleifend.`,


    `Duis ut urna luctus, scelerisque neque quis, scelerisque dui. 
    In eget interdum augue, et condimentum erat. 
    Morbi non ante sit amet eros congue fermentum. 
    Quisque faucibus, ipsum non cursus sollicitudin, leo mi venenatis eros, ac placerat sem magna eget urna. 
    Nulla mauris libero, fermentum eget blandit efficitur, auctor quis augue. 
    Quisque sollicitudin augue vitae eros vehicula dapibus. 
    Nullam sed elit interdum, tincidunt lectus ac, scelerisque sem.` 
    
]




const rangeInput = document.getElementById('range-input')
const rangeNumber = document.getElementById('range-number')
const form = document.querySelector('.form')
const genText = document.getElementById('lorem-container')

const handleInput = (e) => {
    const value = e.target.value;
    rangeNumber.value = value;
    rangeInput.value = value
}

rangeInput.oninput = handleInput
rangeNumber.oninput = handleInput


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = parseInt(rangeNumber.value)
    let newText = text.slice(0, value)
    newText = newText.map((item) => `<p class="lorem-para">${item}</p>`).join("");
    genText.innerHTML = newText
})

