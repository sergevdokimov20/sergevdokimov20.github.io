{
  const canvas = document.getElementById("vote-canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  const imageUrl = "https://dycover.ru/render/204000980/160595";

  img.src = imageUrl;

  img.onload = function () {
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = (canvas.getBoundingClientRect().width * 530) / 1590;
    if (window.innerWidth < 968) {
      const scale = 1.75;
      canvas.height =
        (canvas.getBoundingClientRect().width * (530 / scale)) / (1590 / scale);
      ctx.scale(scale, scale);
      ctx.drawImage(
        img,
        -canvas.width * 0.2,
        -canvas.height * 0.38,
        canvas.width,
        canvas.height,
      );

      return;
    }
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  function update() {
    img.src = "https://dycover.ru/render/204000980/160595";
  }
  update();
  setInterval(() => update(), 15000);
}
