import { resizeImage } from "../../services/image_services";



describe("Function resizeImage", function() {

  it("is defined", function() {
    expect(resizeImage).not.toBeUndefined();
  });

  it("Pass test case", async () =>  {
    try {
      const result = await resizeImage('images\\full\\encenadaport.jpg','\\images\\resized_images\\new_encenadaport.jpg',200,300);
      expect(result).toEqual("D:\\udacity\\imageprocessing01\\images\\resized_images\\new_encenadaport.jpg");
    } catch (error) {
      Promise.reject(typeof error === 'string' ? error : error);
      console.log('That did not go well.')
    }
   
  });

  it("file not exist", async () =>  {
    try {
      const result = await resizeImage('images\\full\\wrongpath.jpg','\\images\\resized_images\\new_encenadaport.jpg',200,300);

    expect(result).toEqual('file not found');
    } catch (error) {
      Promise.reject(typeof error === 'string' ? error : error);
      console.log('That did not go well.')
    }
    
  });


});