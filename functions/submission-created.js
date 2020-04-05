import querystring from "querystring";


exports.handler = function(event, context) {
	

  const params = querystring.parse(event.body);
  const name = params.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };

}


 //  const formBody = JSON.parse(event.body).payload;
 //  let payload = JSON.parse(event.body).payload;


	// console.log(formBody);
	// console.log(payload);

	// var settings = {
	// 		"url": "https://api.litmos.com/v1.svc/users?source=ramin&sendmessage=true",
	// 		"method": "POST",
	// 		"timeout": 0,
	// 		"headers": {
	// 			"Content-Type": "application/json",
	// 			"apikey": "e8DE41C4-6167-43BC-BE78-19E522DB8668"
	// 		},
	// 		"data": JSON.stringify({"Id":"","UserName":"(payload.data.email)","FirstName":"(payload.data.firstname)","LastName":"","lastname":"","Email":"payload.data.email","AccessLevel":"Learner","DisableMessages":"false","Active":"true","Skype":"","PhoneWork":"","PhoneMobile":"","IsCustomUsername":"true","SkipFirstLogin":"true","TimeZone":"Pacific Standard Time","Street1":"","Street2":"","City":"","State":"","PostalCode":"","Country":"","CompanyName":"","JobTitle":"","CustomField1":"payload.data.partner-code","CustomField2":"payload.data.region","CustomField3":"","CustomField4":"","CustomField5":"","CustomField6":"","CustomField7":"","CustomField8":"","CustomField9":"","CustomField10":"","EnableTextNotification":"false"}),
	// 	};

	// 	$.ajax(settings).done(function (response) {
	// 		console.log(response);
	// 	});