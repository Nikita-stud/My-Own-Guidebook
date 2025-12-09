//Display posts by
<div id="posts-list"></div>; //have somewhere to display posts
//in js/posts.js
loadPosts(); //call load posts function on page load

async function loadPosts() {
  const postsContainer = document.querySelector('#posts-list');
  postsContainer.innerHTML = '';

  try {
    //renaming data to posts for clarity
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      // handle error
    }

    if (!posts || posts.length === 0) {
      // display message about no posts
      return;
    }

    posts.forEach((post) => {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    });
  } catch (error) {}
}

//function to create post element
function createPostElement(post) {
  const heading = document.createElement('h3');
  heading.textContent = post.title;
  return heading;
}
