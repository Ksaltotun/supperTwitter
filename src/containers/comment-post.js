export default function concatCommentsAndPosts(id, array) {
  const commentsArray = [...array];
  const filteredArray = [...commentsArray.filter((comment) => id.toString() === comment["postId"])];
  if (filteredArray.length) return filteredArray;
  return null;
}

