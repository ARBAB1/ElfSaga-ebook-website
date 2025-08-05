const BASE_URL = "http://localhost:3001"; // Adjust based on your backend route

// Login function
export const loginUser = async (userData) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // Ensure cookies are included if needed
    body: JSON.stringify(userData),
  });

  const data = await res.json();

  if (res.ok) {
    // Save the access token to localStorage after successful login
    localStorage.setItem("accessToken", data.accessToken); // Store access token
  } else {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

// Register function
export const registerUser = async (userData) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  return data;
};

// Upload video with thumbnail function
const uploadVideo = async (file, thumbnail) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("thumbnail", thumbnail); // optional, for thumbnail
  formData.append("fileId", uuidv4()); // Optional, if you want to pass the file ID
  formData.append("chunkIndex", 0); // Start with the first chunk (if you're chunking)
  formData.append("totalChunks", 1); // Total chunks, adjust accordingly

  const response = await fetch(`${BASE_URL}/api/upload`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Attach the JWT token
    },
    body: formData,
  });

  const data = await response.json();
  if (response.ok) {
    console.log(data);
  } else {
    console.error(data.message || 'Upload failed');
  }
};

// Get all videos function
const getVideos = async () => {
  const response = await fetch(`${BASE_URL}/videos?page=1&limit=100`, { // Adjusted endpoint to match backend
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Attach the JWT token
    },
  });
  const data = await response.json();
  console.log(data);  // List of videos
};

// Delete a video function
const deleteVideo = async (fileId) => {
  const response = await fetch(`${BASE_URL}/video/${fileId}`, {  // Make sure to match your backend route
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  const data = await response.json();
  console.log(data);  // Confirmation of deletion
};

// Logout function
export const logoutUser = async () => {
  const res = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include", // This sends cookies along with the request
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error("Logout failed: " + error);
  }

  // Clear the token from localStorage after successful logout
  localStorage.removeItem("accessToken"); // Clear access token

  return await res.json();
};



// export const searchCompanies = async (query) => {
//   const res = await fetch(`${BASE_URL}/api/company/search?query=${query}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (!res.ok) {
//     const errorText = await res.text();
//     console.error("API search failed:", res.status, errorText);
//     throw new Error("Failed to search companies");
//   }
//   return await res.json();
// };

// export const checkUsernameExists = async (username) => {
//   const res = await fetch(
//     `${BASE_URL}/api/company/check-username?username=${username}`,
//     {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     }
//   );

//   if (!res.ok) {
//     const errorText = await res.text();
//     console.error("API check username failed:", res.status, errorText);
//     throw new Error("Failed to check username");
//   }

//   const data = await res.json();
//   return data.exists;
// };

// export const getTopTenCompanies = async () => {
//   const res = await fetch(`${BASE_URL}/api/company/top10`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include",
//   });
//   let result = await res.json();
//   if (result.status === 200) {
//     return result.data || [];
//   }
//   else return [];
// };

// export const getTotalCompanies = async () => {
//   const res = await fetch(`${BASE_URL}/api/company/totalcompany`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include",
//   });
//   return await res.json();
// };

// export const getActiveCompanies = async () => {
//   const res = await fetch(`${BASE_URL}/api/company/activecompany`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include",
//   });
//   return await res.json();
// };