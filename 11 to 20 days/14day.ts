//Question 40: Album: Create objects for music albums.

// function make_album(artist: string, title: string, tracks?: number) {
//     let album = {artist  ,  title , tracks};
//     if(tracks) {
//         album[`tracks`] = tracks;
//     }
//     return album;
// }

// console.log(make_album("Atif Aslam", "Atif's first Album"));
// console.log(make_album("Ali Zafar", "Zafar's  Album" ));
// console.log(make_album("Asim Azhar", "Asim's second Album", 12));
// console.log(make_album('Taylor Swift', 'Fearless',2));
//   console.log(make_album('Ed Sheeran', '÷ (Divide)'));
//   console.log(make_album('Beyoncé', 'Lemonade',2));


//Question 41: Magicians: Display magician names from an array.
//  let magician_name : string[] = ["Penn & Teller", "Dynamo", "Criss Angel"];

// console.log(magician_name); //just to see the result.
// function show_magician(magician: string[]){
//     magician_name.forEach(magician_name=> {
//         console.log(magician_name);
//     });     
// }
// show_magician(magician_name);

// //Question 42: Great Magicians: Add "the Great" to magician names.

// function make_great(magician_name: string[]){
//     for(let i=0 ; i < magician_name.length ; i++){
//         magician_name[i] = magician_name[i] + " THE GREAT";
//     }
// }
// make_great(magician_name);
// show_magician(magician_name);
function make_album(artist: string, title:string,tracks?:number){
    let album = {
      artist: artist,
      title: title,
      tracks


      }
      if (tracks) {
          album['tracks'] = tracks;
      }
      return album
  }

  console.log(make_album('Taylor Swift', 'Fearless',2));
  console.log(make_album('Ed Sheeran', '÷ (Divide)' ,7));
  console.log(make_album('Beyoncé', 'Lemonade',2));
