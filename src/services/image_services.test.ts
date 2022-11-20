import { resizeImage } from "./image_services";


describe("Function resizeImage", function() {

  it("is defined", function() {
    expect(resizeImage).not.toBeUndefined();
  });

  it("Pass test case", async () =>  {
    const result = await resizeImage('images\\full\\encenadaport.jpg','\\images\\resized_images\\new_encenadaport.jpg',200,300);
    expect(result).toEqual('slow');
  });

  it("file not exist", async () =>  {
    const result = await resizeImage('images\\full\\wrongpath.jpg','\\images\\resized_images\\new_encenadaport.jpg',200,300);

    expect(result).toEqual('file not found');
  });


});