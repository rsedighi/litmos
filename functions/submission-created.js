// const client =  {
// 			"url": "https://api.litmos.com/v1.svc/users?source=ramin&sendmessage=true",
// 			"method": "POST",
// 			"timeout": 0,
// 			"headers": {
// 				"Content-Type": "application/json",
// 				"apikey": "e8DE41C4-6167-43BC-BE78-19E522DB8668"
// 			}


exports.handler = function(event, context) {
	
  const  payload = JSON.parse(event.body.payload);

  const fname = payload.firstname;
  const lname = payload.lastname;
  const email = payload.email;
  


  console.log(fname, lname, email);
  console.log(payload.data);


// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("apikey", "50c30fc1-759b-44e2-8299-e8d7adec6c04");
// myHeaders.append("Content-Type", "text/plain");

// var raw = "\n\n{\"Id\":\"",\n\"UserName\": \"\",\n\"FirstName\":\"\",\n\"LastName\":\"\",\n\"FullName\":\"\",\n\"Email\": \"rsedighi@gmail.com\",\n\"AccessLevel\":\"Learner\",\n\"DisableMessages\":\"false\",\n\"Active\":\"true\",\n\"IsCustomUsername\":\"true\",\n\"SkipFirstLogin\":\"false\"\n}";

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://api.litmos.com/v1.svc/users?source=ramin&format=json&sendmessage=true", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



// var settings = {
// 			"url": "https://api.litmos.com/v1.svc/users?source=ramin&sendmessage=true",
// 			"method": "POST",
// 			"timeout": 0,
// 			"headers": {
// 				"Content-Type": "application/json",
// 				"apikey": "e8DE41C4-6167-43BC-BE78-19E522DB8668"
// 			},
// 			"data": JSON.stringify({"Id":"","UserName":"(fname)","FirstName":"(payload.data.firstname)","LastName":"","lastname":"","Email":"payload.data.email","AccessLevel":"Learner","DisableMessages":"false","Active":"true","Skype":"","PhoneWork":"","PhoneMobile":"","IsCustomUsername":"true","SkipFirstLogin":"true","TimeZone":"Pacific Standard Time","Street1":"","Street2":"","City":"","State":"","PostalCode":"","Country":"","CompanyName":"","JobTitle":"","CustomField1":"payload.data.partner-code","CustomField2":"payload.data.region","CustomField3":"","CustomField4":"","CustomField5":"","CustomField6":"","CustomField7":"","CustomField8":"","CustomField9":"","CustomField10":"","EnableTextNotification":"false"}),
// 		};

// 		$.ajax(settings).done(function (response) {
// 			console.log(response);
// 		});


}



	