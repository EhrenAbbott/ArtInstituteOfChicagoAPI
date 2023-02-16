
// let song; 
// let playSong;
//^replace with anything?

const clientId = "173aee69532c9bb51566030b5bf4b292";  // Are clientID, access key, authentificaiton token, consumer key, API key, and access token all the same thing?
const clientSecret = "aaaaaaaaaa"; //Is this just supposed to be made up by me?

const _getToken = async () => {
    const result = await fetch(`http://api.coinlayer.com`, { //Is supposed to be /live ? or /token (as used in class example)?
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', //Where does this come from?
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    // Access the data given to us by the fetch response (Promise)
    const data = await result.json();
    return data.access_token
}

// Function to get Song Info when image figure is clicked
/**
 * @param img_index
 * @param item_index
 * 
 * Function gets song from spotify using the image index of our gallery.
 * Then finds the correct item_index inside of the JSON response data from Spotify
 * which will produce a preview url that will be used to play song from soundtrack.
 */

 async function clickedEvent(img_index, item_index){
     // Get Track Name
     let track = document.getElementsByTagName('img')[img_index].attributes[2].value;

     // Get Token
     let token = await _getToken();

     let headers = new Headers([
         ['Content-Type', 'application/json'],
         ['Accept', 'application/json'],
         ['Authorization', `Bearer ${token}`]
     ]);

     let request = new Request(`https://api.coinlayer.com/v1/search?q=${track}&type=track&limit=15`,{ //Where does this come from?
         method: 'GET',
         headers: headers
     });

     let result = await fetch(request);

     let response = await result.json();

     console.log(response)
     let song = response.tracks.items[item_index].preview_url


     // TODO: Add songSnippet function to play the selected song

    // Before we play a song, first check if playSong is True, if so then stop it
     if (playSong){
         stopSnippet();
     }
     songSnippet(song);
 }
a
 /**
  * @param id
  * @param event
  * 
  * id = image if for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces songs from the clickedEvent based 
  * on index of image.
  */

  function getSong(id,event){
      switch(id){
          case 'fig1': {
              event.stopPropagation();
              clickedEvent(0,3)
              break;
          }
          case 'fig2': {
              event.stopPropagation();
              clickedEvent(1,3)
              break;
          }
          case 'fig3': {
              event.stopPropagation();
              clickedEvent(2,3)
              break;
          }
          case 'fig4': {
              event.stopPropagation();
              clickedEvent(3,0)
              break;
          }
          case 'fig5': {
              event.stopPropagation();
              clickedEvent(4,0)
              break;
          }
          case 'fig6': {
              event.stopPropagation();
              clickedEvent(5,1)
              break;
          }
      }
  }

  /**
   * @param url
   * 
   * url = Song Preview_url
   * 
   * Function will return an audio clip given by the preview url
   */

   function songSnippet(url){
       playSong = new Audio(url);
       return playSong.play()
   }

   /**
    * NO PARAMS
    * 
    * Function returns event to stop song snippet
    */
   function stopSnippet(){
       return playSong.pause();
   }