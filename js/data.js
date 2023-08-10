window.reviewData = [
  {
    name: "Harsh",
    date: new Date(2023, 4, 12),
    rating: 5,
    text: "Clash of Clans is one of my favorite games, and I absolutely love playing it on this platform. The gameplay is engaging, and the features are well-designed. The community is active and supportive, making the experience even more enjoyable.Badminton is one of my favorite sports, and I absolutely loved playing it at this facility. The courts were well-maintained, and the staff was friendly and helpful."
  },
  {
    name: "Anuj",
    date: new Date(2023, 1, 23),
    rating: 3,
    text: "I had a mixed experience playing Clash of Clans. The gameplay was decent, but I found some aspects to be a bit outdated and lacking in innovation. However, the player community was friendly, and the in-game prices were reasonable."
  },
  {
    name: "Vandan",
    date: new Date(2023, 8, 10),
    rating: 2,
    text: "I was disappointed with my experience in Clash of Clans. The game's mechanics felt outdated, and the overall quality was not up to my expectations. I wouldn't recommend investing time in this game."
  },
  {
    name: "Neel",
    date: new Date(2023, 5, 20),
    rating: 4,
    text: "I had a fantastic time playing Clash of Clans. The game environment was immersive and well-designed, and the developers were responsive to player feedback. I'll definitely continue playing and exploring all the features it has to offer!"
  },
  {
    name: "Rushi",
    date: new Date(2023, 6, 1),
    rating: 5,
    text: "I've been playing Clash of Clans for years, and it's one of the best gaming experiences I've ever had. The game mechanics are top-notch, and the developer team is incredibly skilled and responsive. I highly recommend giving it a try if you are a fan of strategy games."
  }
];


 


  function generateReviewHTML(reviews) {
    const reviewsContainer = document.getElementById('reviews-container');
  
    reviews.forEach((review) => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
  
      const nameHeader = document.createElement('h3');
      nameHeader.textContent = review.name;
      reviewDiv.appendChild(nameHeader);
  
      const datePara = document.createElement('p');
      datePara.textContent = review.date.toLocaleDateString();
      reviewDiv.appendChild(datePara);
  
      const ratingPara = document.createElement('p');
      const ratingString = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      ratingPara.textContent = ratingString;
      ratingPara.classList.add('rating');
      reviewDiv.appendChild(ratingPara);
  
      const textPara = document.createElement('p');
      textPara.textContent = review.text;
      reviewDiv.appendChild(textPara);
  
      reviewsContainer.appendChild(reviewDiv);
    });
  }
  