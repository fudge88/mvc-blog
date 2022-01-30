const loginForm = $("#login-form");
const signupForm = $("#sign-up-form");
const newBlogForm = $("#new-blog-form");
const commentForm = $("#comment-form");
const editBlogForm = $("#edit-blog-form");
const logoutBtn = $("#logout-btn");
const deleteYesBtn = $("#delete-yes-btn");
const errorMessageDiv = $("#error-message");
const confirmDeleteModal = $("#confirm-delete-modal");

const renderError = (message) => {
  errorMessageDiv.empty();

  const errorDiv = `<div class="form-text text-danger"><span class="mx-2">${message}</span><i class="fas fa-exclamation-circle"></i></div>`;

  errorMessageDiv.append(errorDiv);
};

const makeRequest = async (url, method, body = {}) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  if (email && password) {
    try {
      const data = await makeRequest("/auth/login", "POST", {
        email,
        password,
      });

      if (data.success) {
        window.location.replace("/dashboard");
      } else {
        renderError("Failed to login");
      }
    } catch (error) {
      renderError("Failed to login");
    }
  } else {
    renderError("Failed to login");
  }
};

const handleSignUp = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirm-password").val();

  if (
    email &&
    username &&
    password &&
    confirmPassword &&
    password === confirmPassword
  ) {
    try {
      const data = await makeRequest("/auth/signup", "POST", {
        username,
        email,
        password,
      });

      if (data.success) {
        window.location.replace("/login");
      } else {
        renderError("Failed to sign up");
      }
    } catch (error) {
      renderError("Failed to sign up");
    }
  } else {
    renderError("Failed to sign up");
  }
};

const handleCreateBlog = async (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const content = $("#content").val();

  if (title && content) {
    try {
      const data = await makeRequest("/api/blogs", "POST", {
        title,
        content,
      });

      if (data.success) {
        window.location.replace("/dashboard");
      } else {
        renderError("Failed to create blog");
      }
    } catch (error) {
      renderError("Failed to create blog");
    }
  } else {
    renderError("Failed to create blog");
  }
};

const handleCreateComment = async (event) => {
  event.preventDefault();

  const target = $(event.target);

  const blogId = target.attr("data-blog-id");
  const comment = $("#comment").val();

  if (comment && blogId) {
    try {
      const data = await makeRequest("/api/comments", "POST", {
        comment,
        blogId,
      });

      if (data.success) {
        window.location.reload();
      } else {
        renderError("Failed to post comment");
      }
    } catch (error) {
      renderError("Failed to post comment");
    }
  } else {
    renderError("Failed to post comment");
  }
};

const handleEditBlog = async (event) => {
  event.preventDefault();

  const target = $(event.target);
  const blogId = target.attr("data-blog-id");

  const title = $("#title").val();
  const content = $("#content").val();

  if (title && content) {
    try {
      const data = await makeRequest(`/api/blogs/${blogId}`, "PUT", {
        title,
        content,
      });

      if (data.success) {
        window.location.replace(`/blogs/${blogId}`);
      } else {
        renderError("Failed to update blog");
      }
    } catch (error) {
      renderError("Failed to update blog");
    }
  } else {
    renderError("Failed to update blog");
  }
};

const handleLogout = async () => {
  try {
    const data = await makeRequest("/auth/logout", "POST");

    if (data.success) {
      window.location.replace("/login");
    } else {
      console.log("Failed to logout");
    }
  } catch (error) {
    console.log("Failed to logout");
  }
};

const handleDelete = async (event) => {
  const target = $(event.target);
  const resourceId = target.attr("data-resource-id");
  const name = target.attr("name");

  if (name === "blog") {
    try {
      const data = await makeRequest(`/api/blogs/${resourceId}`, "DELETE");
      if (data.success) {
        window.location.replace("/dashboard");
      } else {
        console.log("Failed to delete blog");
      }
    } catch (error) {
      console.log("Failed to delete blog");
    }
  }

  if (name === "comment") {
    // handle comment delete here
  }
};

loginForm.on("submit", handleLogin);
signupForm.on("submit", handleSignUp);
newBlogForm.on("submit", handleCreateBlog);
commentForm.on("submit", handleCreateComment);
editBlogForm.on("submit", handleEditBlog);
logoutBtn.on("click", handleLogout);
deleteYesBtn.on("click", handleDelete);
