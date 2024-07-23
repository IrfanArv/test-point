function getScore(score) {
  const userID = localStorage.getItem("userID");
  const gameID = localStorage.getItem("gameID");

  const data = {
    userID: userID,
    gameID: gameID,
    pointsEarned: score,
  };

  fetch("https://cms.metaplay.id/api/submitPoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) =>
      response.json().then((data) => ({ status: response.status, body: data }))
    )
    .then((result) => {
      if (result.status === 200) {
        alert(
          `${result.body.message}\nPoint yang didapat dari game ini: ${score}\nTotal Point kamu: ${result.body.data.newUserCoins}`
        );
      } else {
        alert("Error: Unable to submit points.");
      }
      window.location.href = "https://test-point.vercel.app";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error: Unable to submit points.");
      window.location.href = "https://test-point.vercel.app";
    });
}

// in 3dvista
// var score = this.get('data').quiz.get(TDV.Quiz.PROPERTY.SCORE);
// getScore(score);
