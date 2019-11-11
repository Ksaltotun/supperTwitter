async function getData() {
    const posts = await fetch('http://localhost:3001/posts', {
        method: "GET"
    });
    const postsArray = await posts.json();
    return postsArray;
}

export default getData