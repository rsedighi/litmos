// const client =  {
// 			"url": "https://api.litmos.com/v1.svc/users?source=ramin&sendmessage=true",
// 			"method": "POST",
// 			"timeout": 0,
// 			"headers": {
// 				"Content-Type": "application/json",
// 				"apikey": "e8DE41C4-6167-43BC-BE78-19E522DB8668"
// 			}


exports.handler = function(event, context) {
	
  const  payload = JSON.parse(event.body)
  // const result = await client.create({ _type: 'submission.form', ...payload })
  callback(null, {
    statusCode: 200
    console.log(payload)
  }) 





 //  let payload = JSON.parse(event.body).payload;
 //  const params = JSON.parse(event.body);
 //  const name = params.firstname || "World";
 //  const fname = payload.data.firstname;

	// console.log('submission created error testing');
	// console
 //  return {
 //    statusCode: 200,
 //    body: `Hello, ${name}`
 //  };

   


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