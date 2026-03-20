//Normal flow: user clicks "like" → wait 500ms for server → UI updates
//Optimistic flow: user clicks "like" → UI updates instantly → server confirms in background -> if fails → UI rolls back

//REWIND: useMutation has 4 callbacks:
const mutation = useMutation({
  mutationFn: likePost, // the actual API call

  onMutate: () => {}, // runs BEFORE the API call
  onSuccess: () => {}, // runs if API call succeeded
  onError: () => {}, // runs if API call failed
  onSettled: () => {}, // runs always, after success OR error
});

//When to use it:
//like/favourite buttons, toggles,anything that feels slow waiting for the server

const mutation = useMutation({
  mutationFn: likePost,

  //  // this runs BEFORE the server is called
  // used to update the UI instantly
  onMutate: async (postId) => {
    await queryClient.cancelQueries({ queryKey: ['post', postId] }); // stop any ongoing fetches
    const previous = queryClient.getQueryData(['post', postId]); // save current state

    queryClient.setQueryData(['post', postId], (old) => ({
      // update UI instantly
      ...old,
      likes: old.likes + 1,
    }));

    return { previous }; // pass to onError for rollback
  },

  onError: (err, postId, context) => {
    queryClient.setQueryData(['post', postId], context.previous); // undo the change
  },

  onSettled: (data, error, postId) => {
    // always runs regardless of success or failure
    // good place to refetch to sync with server
    queryClient.invalidateQueries({ queryKey: ['post', postId] }); // sync with server regardless
  },
});
