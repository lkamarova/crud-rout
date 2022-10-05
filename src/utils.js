import { fetchPosts, removePost } from "./api";

export const addPost = (newPost) => {
  const opt = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  };

  return fetch("http://localhost:7777/posts", opt).then(
    () => {
      console.log("resultat ok");
    },

    (error) => {
      console.error(error);
    }
  );
};

export const deletePost = (postId) => {
  return fetch(`http://localhost:7777/posts/${postId}`, {
    method: "DELETE",
  }).then(
    () => {
      console.log("resultat ok");
    },

    (error) => {
      console.error(error);
    }
  );
};

export const getPosts = async () => {
  try {
    const posts = await fetchPosts();

    return { posts, isError: false };
  } catch (err) {
    console.log(err);
    return { posts: null, isError: true };
  }
};

export const geletePosts = (postId) => {
  try {
    removePost(postId);
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (postId) => {
  const { posts, isError } = await getPosts();
  if (isError) {
    return null;
  }

  return posts?.find((el) => el.id === postId);
};

/* export const useGetPosts = () => {
  console.log('useGetPosts')
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCanselled = false;
    const getPosts = () => {
      fetchPosts()
        .then((res) => res.json())
        .then(
          (res) => {
            if (!isCanselled) {
              setPosts(res);
              setLoading(true);
              console.log("posts", posts);
            }
          },

          (error) => {
            console.log(error);
          }
        );
    };

    getPosts();

    return () => {
      isCanselled = true;
    };
  }, []);

  return [posts, loading];
}; */
