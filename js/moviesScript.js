let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("pos-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

mList = [
  {
    title: "Sooryavanshi",
    genres: "Action-Crime-Thriller",
    poster_path: "/8p3mhjyLjHKtaAv8tFKfvEBtir0.jpg",
  },
  {
    title: "Looop Lapeta",
    genres: "Action-Comedy-Crime",
    poster_path: "/onGdT8sYi89drvSJyEJnft97rOq.jpg",
  },
  {
    title: "Jawan",
    genres: "Action-Thriller",
    poster_path: "/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
  },
  {
    title: "My Name Is Khan",
    genres: "Drama-Romance",
    poster_path: "/5Y36lCiNyyV71mjq6LavgiggbhT.jpg",
  },
  {
    title: "3 Idiots",
    genres: "Drama-Comedy",
    poster_path: "/66A9MqXOyVFCssoloscw79z8Tew.jpg",
  },
  {
    title: "Pathaan",
    genres: "Action-Adventure-Thriller",
    poster_path: "/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg",
  },
  {
    title: "Kites",
    genres: "Drama-Action-Romance",
    poster_path: "/2WeDVSJd14JFZx6N1DqUOqB0PjD.jpg",
  },
  {
    title: "Bulbbul",
    genres: "Horror-Fantasy",
    poster_path: "/4XYEqHqvcf6vxFhNyeKZz5xbUfV.jpg",
  },
  {
    title: "Tu Jhoothi Main Makkaar",
    genres: "Comedy-Romance",
    poster_path: "/zHLtNP4KP0GMi6p1ACf2QvVnBvI.jpg",
  },
  {
    title: "Dhamaka",
    genres: "Thriller-Drama-Crime",
    poster_path: "/KowKEuyWziUtnCYicv6zhzTQIv.jpg",
  },
  {
    title: "Kabhi Alvida Naa Kehna",
    genres: "Drama-Romance",
    poster_path: "/dkYQgRPuik4FGIUdGGVYGQJWrHa.jpg",
  },
  {
    title: "Gadar 2",
    genres: "Action-Drama-Thriller",
    poster_path: "/ipoUI3FzVTczg2r8mYxNlE5SsMh.jpg",
  },
  {
    title: "Shehzada",
    genres: "Action-Comedy-Drama-Romance",
    poster_path: "/rcKbsGBZCwDs1sVXNkGHqEVLzQW.jpg",
  },
  {
    title: "Selfiee",
    genres: "Comedy-Drama",
    poster_path: "/3qCL8HLse8dupDH3QW6oUaCBbGU.jpg",
  },
  {
    title: "Rocky Aur Rani Kii Prem Kahaani",
    genres: "Comedy-Drama-Family-Romance",
    poster_path: "/vTQIqlxUkOuyf2UKhlM2OUaFGKz.jpg",
  },
  {
    title: "Fanaa",
    genres: "Action-Drama-Romance-Thriller",
    poster_path: "/8YCF3drTYLc7eoLFBbbexsT3iQj.jpg",
  },
  {
    title: "Monica, O My Darling",
    genres: "Crime-Comedy-Drama-Mystery",
    poster_path: "/xEksr0T34utTkeg0DB1Au4M0jto.jpg",
  },
  {
    title: "Tiger 3",
    genres: "Action-Drama",
    poster_path: "/44t0ke4me4KnWeDzOZEwipHxyJ6.jpg",
  },
  {
    title: "Commando 2 -  The Black Money Trail",
    genres: "Action-Thriller",
    poster_path: "/9RZfZxIqyom7XVtXlHKnlNezZua.jpg",
  },
  {
    title: "Kabhi Khushi Kabhie Gham",
    genres: "Comedy-Drama",
    poster_path: "/lRl7wrJmkOzMTDVYFSIpUcsIjPQ.jpg",
  },
  {
    title: "Veer-Zaara",
    genres: "Drama-Romance",
    poster_path: "/j267YqLvKAHeyykTflxzpgVgviQ.jpg",
  },
  {
    title: "Drive",
    genres: "Action-Thriller",
    poster_path: "/1ZUNyvVGTPkeBVXXTMnhIRoXlfo.jpg",
  },
  {
    title: "Gol Maal",
    genres: "Comedy",
    poster_path: "/uPW269Qx8VxfiQI2PFHcSJkGOI2.jpg",
  },
  {
    title: "BrahmÄstra Part One: Shiva",
    genres: "Action-Adventure-Fantasy",
    poster_path: "/x61qdvHIsr9U53FwoLVDQqAGur0.jpg",
  },
  {
    title: "Dangal",
    genres: "Drama-Family-Comedy-Action",
    poster_path: "/p2lVAcPuRPSO8Al6hDDGw0OgMi8.jpg",
  },
  {
    title: "Lost",
    genres: "Drama",
    poster_path: "/yRQkH26GZ7Qp9xkAMfmVNnkb1Ez.jpg",
  },
  {
    title: "Vivah",
    genres: "Romance-Drama",
    poster_path: "/e5zFYX3hW1TNeFCzRw7ET2DxRPm.jpg",
  },
  {
    title: "Kisi Ka Bhai... Kisi Ki Jaan",
    genres: "Action-Comedy-Family",
    poster_path: "/yJ2JqgfWniQLnXPM5WkM7f1rqaY.jpg",
  },
  {
    title: "Tumbbad",
    genres: "Horror-Fantasy",
    poster_path: "/z1xOCxw780WFJC5uCTMfCkQ4Agi.jpg",
  },
  {
    title: "Blood Money",
    genres: "Drama-Action-Thriller",
    poster_path: "/oX09oi63n3xlmaej3OvtA6PBQ4A.jpg",
  },
  {
    title: "Swades",
    genres: "Drama",
    poster_path: "/yUSL24kpHc9Nls4Pohia4shgcIM.jpg",
  },
  {
    title: "Adipurush",
    genres: "Action-Fantasy-Adventure",
    poster_path: "/kpuOeWclbtLU414Txv8ZT6HoZ0k.jpg",
  },
  {
    title: "The Girl on the Train",
    genres: "Drama-Thriller",
    poster_path: "/6Zvov912Mm0mrjR5nEGbSujjnGE.jpg",
  },
  {
    title: "An Action Hero",
    genres: "Action-Crime-Comedy-Thriller",
    poster_path: "/92hQUSB4vqkOH97znKLD8YFheZB.jpg",
  },
  {
    title: "Baaghi",
    genres: "Action-Thriller-Romance",
    poster_path: "/o5VJiWgGp1O2OtjESZVd37gepYQ.jpg",
  },
  {
    title: "Did It Happen?",
    genres: "Romance-Drama",
    poster_path: "/kt4yDO3dSYodlABtIdqZiwtGBPN.jpg",
  },
  {
    title: "Lagaan: Once Upon a Time in India",
    genres: "Adventure-Romance-Drama",
    poster_path: "/yNX9lFRAFeNLNRIXdqZK9gYrYKa.jpg",
  },
  {
    title: "Pariah",
    genres: "Romance-Drama",
    poster_path: "/bzF3liezEHB3u9tE5IcDpXme9ad.jpg",
  },
  {
    title: "Mrs Undercover",
    genres: "Action-Comedy-Thriller",
    poster_path: "/24vvtr8llLWRPy16wyJJ9MDoPbR.jpg",
  },
  {
    title: "Hindi Medium",
    genres: "Comedy-Drama",
    poster_path: "/2v0nQd3kYBV0iPNCVHiaLWGb1hg.jpg",
  },
  {
    title: "War",
    genres: "Action-Thriller-Adventure",
    poster_path: "/zpN2QYgiCNzG11k0tG3qfILgFYE.jpg",
  },
  {
    title: "Ludo",
    genres: "Crime-Comedy",
    poster_path: "/fA21PhxZm2GU2x8lmH7Ty2fIiPx.jpg",
  },
  {
    title: "Drishyam",
    genres: "Crime-Drama-Thriller-Mystery",
    poster_path: "/gIClWRv5OSe8rl5Koi0AeUcCZ9Z.jpg",
  },
  {
    title: "Dilwale",
    genres: "Crime-Action-Comedy",
    poster_path: "/pYgPu6hhOr61knwbestTx4vSdMb.jpg",
  },
  {
    title: "Afwaah",
    genres: "Drama",
    poster_path: "/ctz7lT3HX78AACZM9LeW0gmjxLJ.jpg",
  },
  {
    title: "Bajrangi Bhaijaan",
    genres: "Action-Comedy-Drama",
    poster_path: "/rNfToRJw35h7a4y6HXGRgfkLvdc.jpg",
  },
  {
    title: "Don",
    genres: "Action-Drama-Thriller",
    poster_path: "/1d52h7aDRlc5IPUFno24XPNT6hA.jpg",
  },
  {
    title: "Padmaavat",
    genres: "Drama-History-Romance",
    poster_path: "/vz4GoMXj5ntc6RSrTPVj7SmGf1e.jpg",
  },
  {
    title: "OMG 2",
    genres: "Comedy-Drama",
    poster_path: "/kApiO3oL6t100aCtkcwEhk2kqgK.jpg",
  },
  {
    title: "Tarla",
    genres: "Comedy-Drama",
    poster_path: "/qb0fDnId82mXbZBNg0n3GkX4rFl.jpg",
  },
  {
    title: "Junglee",
    genres: "Action-Adventure",
    poster_path: "/4Jwof1qQ6U99TZFkBCngBdfW8J2.jpg",
  },
  {
    title: "Sukhee",
    genres: "Drama",
    poster_path: "/ztKDW7ZZSnp2SvKesJxoflfnlpl.jpg",
  },
  {
    title: "Bajirao Mastani",
    genres: "History-Romance-Drama",
    poster_path: "/a3kM4CBTSI4NC8KYeSRJCh55liV.jpg",
  },
  {
    title: "Blind",
    genres: "Crime-Thriller",
    poster_path: "/aLJPi71MIH6cwJidPv7VXs9Dokh.jpg",
  },
  {
    title: "Tiku Weds Sheru",
    genres: "Comedy-Drama-Family",
    poster_path: "/lqxAxcxgCUDZGnsWkCXUzBnUT2B.jpg",
  },
  {
    title: "Rab Ne Bana Di Jodi",
    genres: "Comedy-Drama-Romance",
    poster_path: "/m8x6I2qf3R98HtF4DmJXcdxCU64.jpg",
  },
  {
    title: "Dhoom 3",
    genres: "Action-Adventure-Crime-Thriller",
    poster_path: "/rUVTM5EQUQ2I0fcfE46AkvBYWae.jpg",
  },
  {
    title: "Om Shanti Om",
    genres: "Comedy-Thriller-Drama",
    poster_path: "/hQrwdiacMM5XDUkKdv3pCS6VFt8.jpg",
  },
  {
    title: "Karan Arjun",
    genres: "Action-Thriller",
    poster_path: "/uYhjsC9gCKhxiG2enkCJgdLOXjB.jpg",
  },
  {
    title: "Devdas",
    genres: "Drama-Romance",
    poster_path: "/n853Gvyy5tGz6BujE6jeuVqjXKM.jpg",
  },
  {
    title: "Swatantra Veer Savarkar",
    genres: "History",
    poster_path: "/7npv7PcG4DyQLlGiF8VyOX3pJqZ.jpg",
  },
  {
    title: "Jab Tak Hai Jaan",
    genres: "Drama-Romance",
    poster_path: "/1TlzJZrzUlaC95Noqt3oMoxQxCu.jpg",
  },
  {
    title: "Mission Majnu",
    genres: "Thriller-Action-Drama",
    poster_path: "/jHQitiHK4M561W1O7WwfJ0dJ8S1.jpg",
  },
  {
    title: "Bholaa",
    genres: "Action-Thriller-Crime",
    poster_path: "/iIpevyUKHn2tYydRWeHIDz51YXW.jpg",
  },
  {
    title: "Nasha Jurm aur Gangsters",
    genres: "Action-Crime-Drama",
    poster_path: "/l54xSN69ALlIoanhS5Whgalrnd4.jpg",
  },
  {
    title: "Hacker: Trust No One",
    genres: "Thriller",
    poster_path: "/91pB7MxquMeFbeMHamslCKk5wNZ.jpg",
  },
  {
    title: "Kathal",
    genres: "Mystery-Comedy-Crime-Drama",
    poster_path: "/vO4jAxMFrUAEOR3b1EFKFCbboFw.jpg",
  },
  {
    title: "Sholay",
    genres: "Action",
    poster_path: "/ya9bwgqA4eNl5bQ9QqS0jcmRoBS.jpg",
  },
  {
    title: "Mujhse Dosti Karoge!",
    genres: "Romance-Comedy-Drama",
    poster_path: "/fOu6pOPCeofmf5apKvsJb3XQmj3.jpg",
  },
  {
    title: "Sardar Udham",
    genres: "Crime-Drama-History",
    poster_path: "/5m0ir7GygfhzBBwFYRWzQ7yY0De.jpg",
  },
  {
    title: "Guru",
    genres: "Drama-Romance",
    poster_path: "/xX2BJ5sn3ElTZqhnOEod8ZXsCQg.jpg",
  },
  {
    title: "Hichki",
    genres: "Drama-Comedy",
    poster_path: "/awN7MPVHcubWEqfo7T5jidx3xYY.jpg",
  },
  {
    title: "Jab We Met",
    genres: "Drama-Comedy-Romance",
    poster_path: "/reEzvhfp85DTapHSPRzBULCXUuz.jpg",
  },
  {
    title: "Mumbaikar",
    genres: "Crime-Drama",
    poster_path: "/we0j8oUGcUEHXBTfjo1M6EnBNc0.jpg",
  },
  {
    title: "All That Breathes",
    genres: "Documentary",
    poster_path: "/4X01J7lpVdWWPTKvJKc2Zbqf9V.jpg",
  },
  {
    title: "Agneepath",
    genres: "Action-Crime-Drama",
    poster_path: "/xO9sErs0c3XMzh8O34ygQWcENTj.jpg",
  },
  {
    title: "Hacker: Trust No One",
    genres: "Thriller",
    poster_path: "/91pB7MxquMeFbeMHamslCKk5wNZ.jpg",
  },
  {
    title: "English Vinglish",
    genres: "Comedy-Drama-Family",
    poster_path: "/ccEVR8sf18psGH5daio9y7OGu93.jpg",
  },
  {
    title: "Yeh Jawaani Hai Deewani",
    genres: "Romance-Comedy",
    poster_path: "/em39H81XLCDgXsI7V4IcBZseEO6.jpg",
  },
  {
    title: "Satyameva Jayate",
    genres: "Action-Thriller",
    poster_path: "/4cgcfxYE1UoNGISx9CrdhuKsXe3.jpg",
  },
  {
    title: "Laal Singh Chaddha",
    genres: "Drama-Romance",
    poster_path: "/qqBB1tAi345mXMhLwLJpd7LWLRP.jpg",
  },
  {
    title: "Jodhaa Akbar",
    genres: "Romance-History-Drama",
    poster_path: "/bEltVQbNJpsl9sopLVkE5z24Ssj.jpg",
  },
  {
    title: "AK vs AK",
    genres: "Comedy-Action-Drama-Crime",
    poster_path: "/4ULEEvH0hDYnbWN3nClrb88sYCF.jpg",
  },
  {
    title: "Billu",
    genres: "Comedy-Drama",
    poster_path: "/nmWKskigmvBow3uOP4RPQOIaUux.jpg",
  },
  {
    title: "Bodyguard",
    genres: "Drama-Action-Romance",
    poster_path: "/12VEUEHebd9ydQs0Y4ikzb179LY.jpg",
  },
  {
    title: "Andhadhun",
    genres: "Crime-Thriller-Comedy",
    poster_path: "/dy3K6hNvwE05siGgiLJcEiwgpdO.jpg",
  },
  {
    title: "Raees",
    genres: "Thriller-Action-Crime",
    poster_path: "/zFYFUfnoXWxeA3n7v4acEqgk2iE.jpg",
  },
  {
    title: "Gangubai Kathiawadi",
    genres: "Crime-Drama",
    poster_path: "/wHPEKlzg7CaJFCjWlMdZKpCRIDl.jpg",
  },
  {
    title: "Zero",
    genres: "Romance-Drama-Comedy",
    poster_path: "/5uLyqwq2swVns28TFPV2zUzBEd7.jpg",
  },
  {
    title: "Humpty Sharma Ki Dulhania",
    genres: "Drama-Comedy-Romance",
    poster_path: "/kiqZEW6ZmFducXGeikKI5WcQZEI.jpg",
  },
  {
    title: "Te3n",
    genres: "Mystery-Thriller-Drama",
    poster_path: "/gSkghZtZygWBTmv6DQVKcn69mUZ.jpg",
  },
  {
    title: "Sultan",
    genres: "Drama-Action",
    poster_path: "/uNpt24ESuyTU6vNFrA9NkrUkImH.jpg",
  },
  {
    title: "Jersey",
    genres: "Drama",
    poster_path: "/ur2D5MXrwBBymQ7DjG0cOFen2yh.jpg",
  },
  {
    title: "Ek Tha Tiger",
    genres: "Action-Romance-Thriller",
    poster_path: "/btgkNgL5uVKeMFuXnO5xYHsJx3B.jpg",
  },
  {
    title: "Ajeeb Daastaans",
    genres: "Drama-Romance",
    poster_path: "/kVl9jjIgSsyO1cQGhx5Zz1RxPK3.jpg",
  },
  {
    title: "Cocktail",
    genres: "Romance-Drama-Comedy",
    poster_path: "/zeLv84TH3Vc6rLpgHY1ObdSljbh.jpg",
  },
  {
    title: "Jism",
    genres: "Thriller",
    poster_path: "/afSVOdens3jMc1QzLA3Ps3XGSbR.jpg",
  },
  {
    title: "Dhoom 2",
    genres: "Drama-Action-Thriller-Crime",
    poster_path: "/3zJLnrP9g9LSMpX5C1wau49gGUv.jpg",
  },
  {
    title: "Uri: The Surgical Strike",
    genres: "Action-Drama-War",
    poster_path: "/yNySAgpAnWmPpYinim9E0tUzJWG.jpg",
  },
  {
    title: "Race",
    genres: "Drama-Action-Thriller-Crime",
    poster_path: "/krMI3hRmlgKcuNc3XBWtl8APasR.jpg",
  },
  {
    title: "Bhool Bhulaiyaa 2",
    genres: "Horror-Comedy",
    poster_path: "/fw0oMHiMt9qOuKEJEmzFiCNAnXc.jpg",
  },
  {
    title: "The Lunchbox",
    genres: "Drama-Romance",
    poster_path: "/jSOiz1h97i3qwjZJXY8SeLvjPsl.jpg",
  },
  {
    title: "Main Hoon Na",
    genres: "Drama",
    poster_path: "/iiZ8BgmAsxKUEyO6ux8z6GHiE6j.jpg",
  },
  {
    title: "Ankahi Kahaniya",
    genres: "Drama-Romance",
    poster_path: "/2B33UMfA8Yr79qP7g90eMSLggXm.jpg",
  },
  {
    title: "One 2 Ka 4",
    genres: "Action-Drama-Comedy",
    poster_path: "/tmb5ixdGcEVHfItcOQ8jxCxid4c.jpg",
  },
  {
    title: "Tamasha",
    genres: "Romance-Drama-Comedy",
    poster_path: "/9hjYvub3LekTTEs1KV0a9QF1NNC.jpg",
  },
  {
    title: "Dil To Pagal Hai",
    genres: "Drama-Romance-Comedy",
    poster_path: "/HKUrZZbXnwCM4129fPlgHEg0eG.jpg",
  },
  {
    title: "Koi... Mil Gaya",
    genres: "Drama-Science Fiction-Action",
    poster_path: "/2iJVauDYcYxRRGciTmAOSjiATf9.jpg",
  },
  {
    title: "Dhoom",
    genres: "Action-Crime-Drama-Thriller",
    poster_path: "/A7fxXAsuYEohxYNl8YeH3FYkuDv.jpg",
  },
  {
    title: "Trapped",
    genres: "Thriller-Drama",
    poster_path: "/bkavKb2CIIJJqOx6Ta1QwBwUKqu.jpg",
  },
  {
    title: "Ae Dil Hai Mushkil",
    genres: "Romance-Drama",
    poster_path: "/hlDOF4UhUqrYY7gqLk3Rl0Fx4ns.jpg",
  },
  {
    title: "OMG: Oh My God!",
    genres: "Comedy-Drama-Fantasy",
    poster_path: "/wUnwafB1Zvt6Hvy5g8m5E6Dm3uz.jpg",
  },
  {
    title: "Mom",
    genres: "Crime-Drama-Thriller",
    poster_path: "/zZwbntqdfKdVgzH1RoMHa99g0mJ.jpg",
  },
  {
    title: "Hasee Toh Phasee",
    genres: "Comedy-Romance",
    poster_path: "/nyyYh9u4KL5IWbMRETLMADce1j7.jpg",
  },
  {
    title: "India Lockdown",
    genres: "Drama-Adventure",
    poster_path: "/rR8lTcL81n5oHtxmGHMWxag0XOc.jpg",
  },
  {
    title: "Hera Pheri",
    genres: "Comedy-Crime",
    poster_path: "/jSnwHZTkSufd5rFenTm2jUP03wV.jpg",
  },
  {
    title: "M.S. Dhoni: The Untold Story",
    genres: "Drama",
    poster_path: "/lUpMckVHaB55YJ3SMK0arwxKmCt.jpg",
  },
  {
    title: "Chalte Chalte",
    genres: "Comedy-Drama-Romance",
    poster_path: "/bqjy7JtOb3sD7yRckOqvq81rOiu.jpg",
  },
  {
    title: "Lage Raho Munna Bhai",
    genres: "Comedy-Drama-Romance",
    poster_path: "/gC87f7ccvjQubTop4HJJdeEzKQ7.jpg",
  },
  {
    title: "Black Friday",
    genres: "Crime-Drama",
    poster_path: "/a5s6liMFTQd7EHvCSSjavu4piPr.jpg",
  },
  {
    title: "Luka Chuppi",
    genres: "Comedy-Romance",
    poster_path: "/pa7zam9rAUBZEbfEuFQszaId4tQ.jpg",
  },
  {
    title: "Gangs of Wasseypur - Part 2",
    genres: "Action-Crime-Thriller",
    poster_path: "/4CVPyT10Cvw9BCgWNKXiRcXntuc.jpg",
  },
  {
    title: "Ghajini",
    genres: "Action-Romance-Thriller",
    poster_path: "/cPLzHxPFRjzNvoyncdtDGBAxjp.jpg",
  },
  {
    title: "Gunjan Saxena: The Kargil Girl",
    genres: "Action-Drama",
    poster_path: "/llWz6LbVpGPChnNnhAiGJyPMDwP.jpg",
  },
  {
    title: "Chakda â€˜Xpress",
    genres: "Drama",
    poster_path: "/pOsKWCnZa8vUsZjTB49tzJTqIgS.jpg",
  },
  {
    title: "Raid",
    genres: "Crime-Drama-Thriller-Action",
    poster_path: "/qx3m9mRUmDZUVQeAe7CAzFX7xCB.jpg",
  },
  {
    title: "Jaane Tu... Ya Jaane Na",
    genres: "Drama-Comedy-Romance",
    poster_path: "/gRMnFvuPyeTDPlREZzXggE2ohO2.jpg",
  },
  {
    title: "Chennai Express",
    genres: "Romance-Comedy-Action",
    poster_path: "/9LZgpUyFEvqHaDVuveE002mhgTi.jpg",
  },
  {
    title: "Tiger Zinda Hai",
    genres: "Action-Thriller",
    poster_path: "/mdzNLFfCfuBoJz43l0SmMWWdu5t.jpg",
  },
  {
    title: "Highway",
    genres: "Drama-Romance-Crime",
    poster_path: "/xuTevYF35WDkElpm5vNBVaISkT9.jpg",
  },
  {
    title: "Article 15",
    genres: "Drama-Crime",
    poster_path: "/egknEWNt2B0slG2OC0gSpLZdVHj.jpg",
  },
  {
    title: "Student of the Year",
    genres: "Comedy-Drama-Music",
    poster_path: "/yAhfRGZx7nOAZkrm90pqaAjakdH.jpg",
  },
  {
    title: "Mister Mummy",
    genres: "Comedy-Drama",
    poster_path: "/pZcDBlTEqqlp2o3Vmmwcm7Ntxoa.jpg",
  },
  {
    title: "Krrish 3",
    genres: "Action-Science Fiction",
    poster_path: "/tpCrYKO0S6jIc4qf2rif4J4U4lh.jpg",
  },
  {
    title: "2 States",
    genres: "Comedy-Romance-Drama",
    poster_path: "/lOQqeKxZg12ZSn0qfHAOXOtbVFR.jpg",
  },
  {
    title: "Desi Boyz",
    genres: "Comedy-Drama",
    poster_path: "/2Tga4SJQTKSENOISM5CRIb240LR.jpg",
  },
  {
    title: "Stree",
    genres: "Horror-Comedy",
    poster_path: "/euhgW6hpDYw7nxFDjqHn0eKvQPX.jpg",
  },
  {
    title: "Kesari",
    genres: "Action-Drama-History-War",
    poster_path: "/ctjT1pMNAGD9ou0kuhz806tf7kX.jpg",
  },
  {
    title: "Ajab Prem Ki Ghazab Kahani",
    genres: "Romance-Comedy-Action",
    poster_path: "/vegTWHUWLulmpAz8hGpsrneRvuf.jpg",
  },
  {
    title: "Kaal",
    genres: "Action-Thriller",
    poster_path: "/dzFAY2jqODs7GXGhi590222WAyw.jpg",
  },
  {
    title: "Aladin",
    genres: "Fantasy-Drama-Romance-Adventure-Comedy",
    poster_path: "/90xSKwsBBciN018LyQwVhuIDJN7.jpg",
  },
  {
    title: "Badrinath Ki Dulhania",
    genres: "Drama-Comedy-Romance",
    poster_path: "/e1tV7gYSF5iw8NPR78sUHNb3YLU.jpg",
  },
  {
    title: "A Wednesday!",
    genres: "Drama-Thriller",
    poster_path: "/gVUSxtJM3arL5VIUIRNYde20EF0.jpg",
  },
  {
    title: "Qala",
    genres: "Drama-Music",
    poster_path: "/4d2xoBGXMpfeQ6QgpVI4qm34bKP.jpg",
  },
  {
    title: "PK",
    genres: "Comedy-Drama-Science Fiction",
    poster_path: "/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg",
  },
  {
    title: "Zindagi Na Milegi Dobara",
    genres: "Drama-Comedy-Romance",
    poster_path: "/hjqkwv4lJbcxhGjffboDRiPErUo.jpg",
  },
  {
    title: "Krrish",
    genres: "Action-Science Fiction",
    poster_path: "/neJo0Xt9NH6aPBPNhKfHFQpwrcC.jpg",
  },
  {
    title: "Badla",
    genres: "Crime-Drama-Mystery",
    poster_path: "/eKpzbERuhogYTwI3PwfVsAHXnuO.jpg",
  },
  {
    title: "Happy New Year",
    genres: "Action-Comedy-Crime",
    poster_path: "/irK5WgHuNKfuyKhUDOGD6HG7LCY.jpg",
  },
];

const container = document.querySelector(".m-list-grid");

mList.forEach((element) => {
  const newSlide = document.createElement("div");
  newSlide.classList.add("slide");

  const newCard = document.createElement("div");
  newCard.classList.add("m-card");
  newCard.innerHTML = `
    <div class="m-card-overlay"></div>
    <img class="m-card-image" src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="">
    <div class="m-card-details fadeIn-bottom">
        <h3 class="m-card-title">${element.title}</h3>
        <p class="m-card-text">${element.genres}</p>
    </div>
`;

  // Append the new card to the new slide
  newSlide.appendChild(newCard);

  // Append the new slide to the container
  container.appendChild(newSlide);
});
