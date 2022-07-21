
document.querySelector('#loanform').addEventListener('submit', function(event){
    event.preventDefault()
    let title = document.querySelector('#title').value
    let fname = document.querySelector('#firstName').value
    let sname = document.querySelector('#surName').value
    let birthDate = document.querySelector('#birthDate').value
    let identificationDoc = document.querySelector('#identificationDoc').value
    let gender = document.getElementsByName('gender').checked
    let maritalStatus = document.getElementsByName('maritalStatus').checked
    let email = document.querySelector('#email').value
    let phone = document.querySelector('#phone').value
    let streetAddress = document.querySelector('#streetAddress').value
    let city = document.querySelector('#city').value
    let stateProvince = document.querySelector('#stateProvince').value
    let zip = document.querySelector('#zip').value
    let addressDuration = document.getElementsByName('addressDuration').checked
    let grossMonthlyIncome = document.querySelector('#grossMonthlyIncome').value
    let monthlyRent = document.querySelector('#monthlyRent').value
    let loanItem = document.querySelector('#loanItem').value
    let downPayment = document.querySelector('#downPayment').value
    let accurateInfo = document.querySelector('#accurateInfo').value

    // Create object to store full user data
    loanObj = {
        "title":title,
        "fname":fname,
        "sName":sname,
        "birthDate": birthDate,
        "identificationDoc":identificationDoc,
        "gender":gender,
        "maritalStatus": maritalStatus,
        "email":email,
        "phone":phone,
        "streetAddress":streetAddress,
        "city":city,
        "stateProvince":stateProvince,
        "zip":zip,
        "addressDuration":addressDuration,
        "grossMonthlyIncome":grossMonthlyIncome,
        "monthlyRent":monthlyRent,
        "loanItem":loanItem,
        "downPayment":downPayment,
        "accurateInfo":accurateInfo
              
    }

    // save data from localstorage
    localStorage.setItem('userCrd', JSON.stringify(loanObj))
    console.log("Signup cred saved")
    console.log(loanObj)

    // Get data from localStorage
    let userdt = localStorage.getItem('userCrd')
    console.log(userdt)

    window.location.href = "../thankyou/thankyou.html"
})


// document.querySelector('#loanform').addEventListener('submit', function storeFunc(event){
//     event.preventDefault()
//     let firstName = document.querySelector('#firstName').value
//     let surName = document.querySelector('#surName').value

//     loanObj = (
//         "firstName" = firstName,
//         "surName" = surName
//     )
    
//     // localStorage.setItem('userCrd', JSON.stringify(loanObj))
//     // console.log("Signup cred saved")

//     // let userData = localStorage.getItem('userCred')
//     // console.log(userData)

//     localStorage.setItem('firstName', firstName)
// })