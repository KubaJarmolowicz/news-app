export const GET = (req) => {
  console.log("----------------> req: ", req);

  return new Response("Hello!");
};
