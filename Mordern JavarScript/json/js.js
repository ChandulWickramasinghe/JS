function display(datavh){
    const vehicle=`  <center><img src="${datavh.image}"></center>
    <table border="2">
    <tr>
       <th>Brand</th>
       <td>${datavh.Brand}</td> 
    </tr>
    <tr>
        <th>Model</th>
        <td>${datavh.Model}</td>
    </tr>
    <tr>
        <th>Year</th>
        <td>${datavh.year}</td>
    </tr>
        <tr>
        
            <th>
                engine
            </th>
            <td>${datavh.engine.Type}</td>
        </tr>
        <tr>
            <th>Type</th>
            <td>${datavh.engine.Capacity}</td>
        </tr>
        
    <tr>
        <th>Features</th>
        <td>${datavh.Features[0]+" "+datavh.Features[1]+" "+datavh.Features[2]}</td>
    </tr>
    <tr>
        <th>color</th>
        <td>${datavh.Color}</td>
    </tr>
    <tr>
        <th>Price</th>
        <td>${datavh.Price}</td>
    </tr>
    <tr><th>Sold</th><td>${datavh.Sold}</td></tr>

</table>`;
document.querySelector(".container").innerHTML = vehicle;
}


const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        display(JSON.parse(xhr.responseText));
    }
}
xhr.open('GET', '1.json');
xhr.send();
