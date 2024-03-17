import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter
});


// import { createNextRouteHandler } from "uploadthing/next";

// import { ourFileRouter } from "./core";

// // Export routes for Next App Router
// export const { GET, POST } = createNextRouteHandler({
//   router: ourFileRouter,
// });