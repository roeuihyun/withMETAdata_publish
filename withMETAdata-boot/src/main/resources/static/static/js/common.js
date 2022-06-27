// ApiUrl 값을 반환해준다.
function getApiUrl(){
	let apiUrl;
	// 가동계
	if( location.hostname.indexOf("withMetaData-p-msa") > -1 ){
		apiUrl = "http://" + location.hostname + "/"; 
	}
	// 개발계
	if( location.hostname.indexOf("withMetaData-t-msa") > -1 ){
		apiUrl = "http://" + location.hostname + "/";
	}
	// 로컬
	else {
		apiUrl = "http://" + location.hostname + ":8080/";
	}
	return apiUrl; 
}