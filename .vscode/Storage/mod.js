const posts = [{title: 'POST1'},{title: 'POST2'}];

//Do not touch this function below
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

//Do not touch this function below
function createPost(user) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(user);
            resolve(user.title);
        }, 3000)
    }) 
}
function deletePost(){
    //complete this function
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            let x=posts.pop();
            res(x.title);
        }, 1000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const d = new Date().getTime();
            res(d);
        }, 1000);
    });
}
Promise.all([createPost({title: 'Post5'}), updateLastUserActivityTime()]).then((msg)=>{
    console.log(msg);
});
