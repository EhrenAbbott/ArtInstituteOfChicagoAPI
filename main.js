const API = 'https://api.artic.edu/api/v1/artworks/127859';
                async function getArt() { 
                    const response = await fetch(API);
                    const info = await response.json();
                    const { data  } = info

                    document.getElementById('art_title').textContent = data.artist_title
                    const myBtn = document.getElementById("myBtn");

                    myBtn.addEventListener("click", function(e){ 
                        const name = alert(data.artist_title);
                        console.log(data.artist_title)
                });
                }; 
                getArt()

const API2 = 'https://api.artic.edu/api/v1/artworks/109780';
                async function getArt2() { 
                    const response = await fetch(API2);
                    const info = await response.json();
                    const { data  } = info

                    document.getElementById('art_title2').textContent = data.artist_title
                    const myBtn = document.getElementById("myBtn2");

                    myBtn.addEventListener("click", function(e){ 
                        const name = alert(data.artist_title);
                        console.log(data.artist_title)
                });
                }; 
                getArt2()

const API3 = 'https://api.artic.edu/api/v1/artworks/90048';
                async function getArt3() { 
                    const response = await fetch(API3);
                    const info = await response.json();
                    const { data  } = info

                    document.getElementById('art_title3').textContent = data.artist_title
                    const myBtn = document.getElementById("myBtn3");

                    myBtn.addEventListener("click", function(e){ 
                        const name = alert(data.artist_title);
                        console.log(data.artist_title)
                });
                }; 
                getArt3()

const API4 = 'https://api.artic.edu/api/v1/artworks/27992';
                async function getArt4() { 
                    const response = await fetch(API4);
                    const info = await response.json();
                    const { data  } = info

                    document.getElementById('art_title4').textContent = data.artist_title
                    const myBtn = document.getElementById("myBtn4");

                    myBtn.addEventListener("click", function(e){ 
                        const name = alert(data.artist_title);
                        console.log(data.artist_title)
                });
                }; 
                getArt4()

const API5 = 'https://api.artic.edu/api/v1/artworks/24645';
                async function getArt5() { 
                    const response = await fetch(API5);
                    const info = await response.json();
                    const { data  } = info

                    document.getElementById('art_title5').textContent = data.artist_title
                    const myBtn = document.getElementById("myBtn5");

                    myBtn.addEventListener("click", function(e){ 
                        const name = alert(data.artist_title);
                        console.log(data.artist_title)
                });
                }; 
                getArt5()


const API6 = 'https://api.artic.edu/api/v1/artworks/14655';
                async function getArt6() { 
                    const response = await fetch(API6);
                    const info = await response.json();
                    const { data  } = info

                    document.getElementById('art_title6').textContent = data.artist_title
                    const myBtn = document.getElementById("myBtn6");

                    myBtn.addEventListener("click", function(e){ 
                        const name = alert(data.artist_title);
                        console.log(data.artist_title)
                });
                }; 
                getArt6()
