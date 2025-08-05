// next.config.mjs
export default {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pub-b7fd9c30cdbf439183b75041f5f71b92.r2.dev",
        port: ""
      },
      // ✅ Add your backend server with port
      {
        protocol: "https",
        hostname: "talesfromthenorthpole.xyz",
        port: "3001"
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001"
      }
    ]
  }
};

// /** @type {import("next").NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: ""
//       },
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com",
//         port: ""
//       },
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//         port: ""
//       },
//       {
//         protocol: "https",
//         hostname: "pub-b7fd9c30cdbf439183b75041f5f71b92.r2.dev",
//         port: ""
//       }
//     ]
//   }
// };

// export default nextConfig;
