// fetch method
fetch ("https://jsonplaceholder.typicode.com/posts") .then ((data)=>{
    return data.json();
}).then((completedata)=>{
    //console.log(completedatadata[2].title);
    let data1=""
    completedata.map((values)=>{
        data1+=` <div class="tweet_image">
        <img src="images/profile_image.jpg" alt="">
    </div>
    <div class="tweet_text">
        <h1>${values.userId}
            <img src="images/quality.png" alt="" class="quality">
            <img src="images/package.png" alt="" class="quality">
        </h1>
        <div class="info">
            <p> ${values.title}</p> <br>
            <p> ${values.body}</p>
        </div>
    </div>`
    });
    document.getElementById("tweet").innerHTML=data1;
      
}).catch((err)=>{
    console.log(err);
})