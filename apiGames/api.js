$.ajax({
   url: 'https://api-2445582011268.apicast.io',
   beforeSend: function(xhr) {
    xhr.setRequestHeader("user-key", "02707417abe91314e67ed68e2cf35c8402707417abe91314e67ed68e2cf35c84")
   },
//    headers: {
//         "user-key":"02707417abe91314e67ed68e2cf35c8402707417abe91314e67ed68e2cf35c84",
//         'accept': 'application/json'
//     },
   success: function(data) {
        console.log(data);
   }
})
