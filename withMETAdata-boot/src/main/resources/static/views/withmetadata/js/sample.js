/*
==================================================================================
* Copyright (c) 2022 Withfuture
* --------------------------------------------------------------------------------
* @File : sample.js
* --------------------------------------------------------------------------------
* Change history
* @Modified Date : 수정자 : 수정내용
* @2022-06-22    : 노의현 : 최초 제작
==================================================================================
*/
var grid, chart ;
$(document).ready(function(){

	loadInclude();
	
	//renderList();
	toastUIGridSample();
	
	$("#insertBtn").click(function(){
		grid.destroy();
		insertSample();
		//renderList();
		toastUIGridSample();
	});
	
	$("#updateBtn").click(function(){
		grid.destroy();
		updateSample();
		//renderList();
		toastUIGridSample();
	});
	
	$("#deleteBtn").click(function(){
		grid.destroy();
		deleteSample();
		//renderList();
		toastUIGridSample();
	});
	
	toastUIChartSample();
});

function loadInclude(){
	$("#include").load("/layout/withMetaDataInclude.html");
}

function renderList(){
	$("#selectListSample").empty();
	let sampleList;
	sampleList = selectListSample();
	let tableHeader = $("<thead>").append( $("<tr>").append( $("<th>").html("id") ).append( $("<th>").html("name") ) );
	let tableBody = $("<tbody>");
	for( i = 0 ; i < sampleList.length ; i ++ ){
		tableBody.append($("<tr>").append( $("<td>").html(sampleList[i].id) ).append( $("<td>").html(sampleList[i].name) ) );
	}
	$("#selectListSample").append(tableHeader).append(tableBody);
}

function insertSample(){
	let result;
	$.ajax({
		type: 'POST',
		url: getApiUrl() + "sample/insertSample",
		data: {id : $("#insertId").val(), name: $("#insertName").val()},
		dataType: 'json',
		async: false,
		success: function(data){
			result = data;
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert( '[' + jqXHR.status + ']' + textStatus + ': ' + errorThrown + ': ' + jqXHR.responseText );
		}
	});
	return result;
}

function selectOneSample(){
	let sample;
	$.ajax({
		type: 'POST',
		url: getApiUrl() + "sample/selectOneSample",
		data: { selectOneSample : $("#selectOneSample").val()},
		dataType: 'json',
		async: false,
		success: function(data){
			sample = data;
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert( '[' + jqXHR.status + ']' + textStatus + ': ' + errorThrown + ': ' + jqXHR.responseText );
		}
	});
	return sample;
}

function selectListSample(){
	let sampleList;
	$.ajax({
		type: 'POST',
		url: getApiUrl() + "sample/selectListSample",
		dataType: 'json',
		async: false,
		success: function(data){
			sampleList = data;
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert( '[' + jqXHR.status + ']' + textStatus + ': ' + errorThrown + ': ' + jqXHR.responseText );
		}
	});
	return sampleList;
}

function updateSample(){
	let result;
	$.ajax({
		type: 'POST',
		url: getApiUrl() + "sample/updateSample",
		data: {id : $("#updateId").val(), name: $("#updateName").val()},
		dataType: 'json',
		async: false,
		success: function(data){
			result = data;
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert( '[' + jqXHR.status + ']' + textStatus + ': ' + errorThrown + ': ' + jqXHR.responseText );
		}
	});
	return result;
}

function deleteSample(){
	let result;
	$.ajax({
		type: 'POST',
		url: getApiUrl() + "sample/deleteSample",
		data: {id : $("#deleteId").val()},
		dataType: 'json',
		async: false,
		success: function(data){
			result = data;
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert( '[' + jqXHR.status + ']' + textStatus + ': ' + errorThrown + ': ' + jqXHR.responseText );
		}
	});
	return result;
}


function toastUIGridSample(){
	grid = new tui.Grid({
		el: document.getElementById('grid'),
		data: selectListSample(),
		rowHeaders: ['checkbox'],
		scrollX: false,
		scrollY: false,
		columns: [
					{
						title: 'ID',
						name: 'id'
					},
					{
						title: 'Name',
						name: 'name'
					},
					{
						name: 'datepicker',
						editor: {
							type : 'datePicker',
							options: {
								format: 'yyyy-MM-dd HH'
							}
						}
					}
				]
	});
}

function toastUIChartSample(){
  const el = document.getElementById('chart-area');
      const data = {
        categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          {
            name: 'Budget',
            data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
          },
          {
            name: 'Income',
            data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
          },
          {
            name: 'Expenses',
            data: [4000, 4000, 6000, 3000, 4000, 5000, 7000],
          },
          {
            name: 'Debt',
            data: [3000, 4000, 3000, 1000, 2000, 4000, 3000],
          },
        ],
      };
      const options = {
        chart: { title: 'Monthly Revenue', width: 900, height: 400 },
      };

      const chart = toastui.Chart.barChart({ el, data, options });
}