{
  const canvas = document.getElementById("vote-canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  const imageUrl = "https://dycover.ru/render/204000980/160595";

  img.src = imageUrl;

  img.onload = function () {
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = (canvas.getBoundingClientRect().width * 530) / 1590;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  function update() {
    img.src = "https://dycover.ru/render/204000980/160595";
  }
  update();
  setInterval(() => update(), 15000);
}
