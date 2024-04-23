import { PageAPI } from '@api';
import { PostAPI } from './postTypes';


async function getList(): Promise<PageAPI<PostAPI>> {

   let response = await fetch("http://10.0.2.2:3333/user/post", {
      method: "GET",
      headers: {
         Authorization: "Bearer Mw.KBA0dEWNkZX5MhzMWLrHoX5HCwidpL9XUaX-l95SXy0ABCw1iX21jQr-QFal"
      }
   });

   let data: PageAPI<PostAPI> = await response.json();
   console.log('FETCH DATA: ', data);


   return data;
}

export const postApi = {
   getList,
};
