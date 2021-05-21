{
  const canvas = document.getElementById("vote-canvas");
  const ctx = canvas.getContext("2d");
  if (window.innerWidth >= 768) {
    const img = new Image();
    const imageUrl = "https://dycover.ru/render/204000980/160595";

    img.src = imageUrl;

    img.onload = function () {
      canvas.width = canvas.getBoundingClientRect().width;
      canvas.height = (canvas.getBoundingClientRect().width * 530) / 1590;

      const scale = 1;
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

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    function update() {
      img.src = "https://dycover.ru/render/204000980/160595";
    }
    update();
    setInterval(() => update(), 15000);
  } else {
    const template = document.createElement("div");
    canvas.replaceWith(template);
    template.innerHTML = `<div class="banner">
      <div class="banner__inner">
      <div style="display: flex; align-items: center; flex-wrap: wrap;">
      <div style="display: grid">
      <img style="width: 100px" src="https://raw.githubusercontent.com/sergevdokimov20/sergevdokimov20.github.io/main/2.png"/>
      <img style="width: 300px; margin: 16px 0px 16px 0px" src="https://raw.githubusercontent.com/sergevdokimov20/sergevdokimov20.github.io/main/1.png"/>
      </div>
      <div> 
      <div class="banner__row">
      <div class="banner__description">
            <span class="banner__emoji">✅</span>
            <div class="banner__text">
              Участников <br />
              голосования
            </div>
          </div>
          <div class="banner__count" id="num-1"></div>
          
        </div>
        <div class="banner__row">
           <div class="banner__description">
            <span class="banner__emoji">⭐</span>
            <div class="banner__text">
              Средняя <br />
              оценка
            </div>
          </div>
          <div class="banner__count" id="num-2"></div>
         
        </div>

        <div class="banner__row">
        <div class="banner__description">
            <span class="banner__emoji">📥</span>
            <div class="banner__text">
              Замечаний по<br />
              организации
            </div>
          </div>
          <div class="banner__count" id="num-3"></div>
          
        </div>
      </div>
      </div> 
      </div> 
    </div>`;
    var style = document.createElement("style");
    style.innerHTML = ` .banner {
        background-image: url(https://raw.githubusercontent.com/sergevdokimov20/sergevdokimov20.github.io/main/bg2.jpg);
        background-size: cover;
        background-position: center center;
      }
      .banner__inner {
        padding: 16px 12px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        
      }
      .banner__count {
        font-family: "Arial";
        font-size: 40px;
        font-weight: bold;
        color: white;
        margin-left: 16px;
        width: 100px;
        text-shadow: 2px 2px #000
      }
      .banner__row {
        display: flex;
        align-items: center;
      }
      .banner__emoji {
        font-size: 25px;
      }
      .banner__description {
        display: flex;
        color: white;
        font-family: sans-serif;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        align-items: center;
      }
      .banner__text {
        padding: 4px 0px 0px 4px;
        text-shadow: 1px 1px #000
      }`;

    // Get the first script tag
    var ref = document.querySelector("script");

    // Insert our new styles before the first script tag
    ref.parentNode.insertBefore(style, ref);
    function update() {
      fetch("https://ecobattle.online/api/bot/banner").then((res) =>
        res.json().then((resp) => {
          document.getElementById("num-1").innerText = resp.amount;
          document.getElementById("num-2").innerText = resp.score;
          document.getElementById("num-3").innerText = resp.complaints;
        }),
      );
    }
    update();
    setInterval(() => update(), 15000);
  }
}
