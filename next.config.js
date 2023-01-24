/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scott-sports-v14.8848digitalerp.com",
      },
    ],
  },
  // redirects: async () => {
  //   let redirect;
  //   redirect = await fetch("http://localhost:3000/api/hello", {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       return data;
  //     });

  //   return redirect.data.map((data) => {
  //     return {
  //       source: `${data.source}`,
  //       destination: `${data.destination}`,
  //       permanent: true
  //     }
  //   })
  // },
};

module.exports = nextConfig;
